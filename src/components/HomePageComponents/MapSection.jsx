import { useState, useEffect, useRef } from "react";
import axios from "axios";

// ── Constants ────────────────────────────────────────────────────────────────
const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const BACKEND_URL  = import.meta.env.VITE_API_URL;
const BASE_IMAGE_URL = (import.meta.env.VITE_API_URL || "https://backend-localink.vercel.app/api").replace('/api', ''); 

const SPECIALITIES = [
  "All",
  "Carpenter",
  "Electrician",
  "Plumber",
  "Painter",
  "House Cleaner",
  "Technician",
];

// Radius options the user can pick
const RADIUS_OPTIONS = [
  { label: "5 km",  value: 5  },
  { label: "10 km", value: 10 },
  { label: "20 km", value: 20 },
];

// ── Load Google Maps script (same helper as admin page) ──────────────────────
function loadGoogleMapsScript(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) return resolve();
    const existing = document.getElementById("gmap-script");
    if (existing) {
      existing.addEventListener("load", resolve);
      existing.addEventListener("error", reject);
      return;
    }
    const script    = document.createElement("script");
    script.id       = "gmap-script";
    script.src      = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async    = true;
    script.defer    = true;
    script.onload   = resolve;
    script.onerror  = reject;
    document.head.appendChild(script);
  });
}

// ── Star rating display ──────────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.round(rating) ? "text-amber-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-500 ml-1">{rating?.toFixed(1) ?? "—"}</span>
    </div>
  );
}

// ── Provider card shown below the map ────────────────────────────────────────
function ProviderCard({ provider, onClick, isActive }) {
  const distanceKm = (provider.distance / 1000).toFixed(1);
  return (
    <div
      onClick={() => onClick(provider)}
      className={`flex gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
        isActive
          ? "border-[#e36e2a] bg-orange-50 shadow-sm"
          : "border-gray-200 bg-white hover:border-[#e36e2a]/50 hover:bg-orange-50/40"
      }`}
    >
      {/* Avatar */}
      <img
        src={provider?.image 
          ? `${BASE_IMAGE_URL}/${provider.image.replace(/\\/g, "/")}` 
          : "https://placehold.co/56x56"}
        alt={provider.name}
        className="w-14 h-14 rounded-full object-cover shrink-0 border border-gray-100"
      />
      {/* Info */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-medium text-gray-800 truncate">{provider.name}</p>
          {provider.available && (
            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full shrink-0">
              Available
            </span>
          )}
        </div>
        <p className="text-xs text-[#e36e2a]">{provider.speciality}</p>
        <Stars rating={provider.rating} />
        <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-500">
          <span>{provider.city}{provider.municipality ? `, ${provider.municipality}` : ""}</span>
          <span className="flex items-center gap-1">
            {/* location pin icon */}
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            {distanceKm} km away
          </span>
          <span className="font-medium text-gray-700">Rs. {provider.fees}/hr</span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
function MapSection() {
  // ── Map refs ──────────────────────────────────────────────────────────────
  const mapDivRef      = useRef(null);  // the <div> Google Maps renders into
  const googleMapRef   = useRef(null);  // google.maps.Map instance
  const userMarkerRef  = useRef(null);  // blue dot for user's location
  const radiusCircleRef = useRef(null); // the circle showing search radius
  const providerMarkersRef = useRef([]); // array of provider pin markers
  const infoWindowRef  = useRef(null);  // the popup when clicking a marker

  // ── State ─────────────────────────────────────────────────────────────────
  const [mapsReady,    setMapsReady]    = useState(false);
  const [userLocation, setUserLocation] = useState(null);   // { lat, lng }
  const [providers,    setProviders]    = useState([]);
  const [loading,      setLoading]      = useState(true);   // initial load
  const [searching,    setSearching]    = useState(false);  // subsequent searches
  const [error,        setError]        = useState("");
  const [speciality,   setSpeciality]   = useState("All");
  const [radius,       setRadius]       = useState(10);
  const [activeProvider, setActiveProvider] = useState(null); // highlighted card + open info window

  // ── Step 1: Load Google Maps script ──────────────────────────────────────
  useEffect(() => {
    loadGoogleMapsScript(MAPS_API_KEY)
      .then(() => setMapsReady(true))
      .catch(() => setError("Could not load Google Maps. Check your API key."));
  }, []);

  // ── Step 2: Once maps ready, detect user location + init map ─────────────
  useEffect(() => {
    if (!mapsReady) return;

    // Default to Kathmandu if user denies location
    const DEFAULT = { lat: 27.7172, lng: 85.3240 };

    function initMap(center) {
      if (!mapDivRef.current) return;

      googleMapRef.current = new window.google.maps.Map(mapDivRef.current, {
        center,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      });

      infoWindowRef.current = new window.google.maps.InfoWindow();

      // Blue dot for user's own position
      userMarkerRef.current = new window.google.maps.Marker({
        position: center,
        map: googleMapRef.current,
        title: "You are here",
        icon: {
          // Custom blue circle for user location
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#4285F4",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 3,
        },
        zIndex: 999,
      });

      setUserLocation(center);
    }

    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const center = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };
          initMap(center);
          // loading state turns off after providers are fetched (in the fetch useEffect)
        },
        () => {
          // User denied location — fall back to Kathmandu
          initMap(DEFAULT);
          setError("Location access denied. Showing results near Kathmandu.");
          setLoading(false);
        }
      );
    } else {
      initMap(DEFAULT);
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, [mapsReady]);

  // ── Step 3: Fetch providers whenever location, radius, or speciality changes
  useEffect(() => {
    if (!userLocation) return;
    fetchProviders(userLocation.lat, userLocation.lng, radius, speciality);
  }, [userLocation, radius, speciality]);

  // ── Fetch from backend ────────────────────────────────────────────────────
  async function fetchProviders(lat, lng, radiusKm, spec) {
    setSearching(true);
    try {
      const params = { lat, lng, radius: radiusKm };
      if (spec && spec !== "All") params.speciality = spec;

      const res = await axios.get(`${BACKEND_URL}/serviceProvider/nearby-providers`, { params });
      const results = res.data.data || [];
      setProviders(results);
      updateMapMarkers(results);
      drawRadiusCircle(lat, lng, radiusKm);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch nearby providers. Please try again.");
    } finally {
      setSearching(false);
      setLoading(false);
    }
  }

  // ── Draw/update the search radius circle on the map ───────────────────────
  function drawRadiusCircle(lat, lng, radiusKm) {
    if (!googleMapRef.current) return;

    // Remove old circle
    if (radiusCircleRef.current) radiusCircleRef.current.setMap(null);

    radiusCircleRef.current = new window.google.maps.Circle({
      map: googleMapRef.current,
      center: { lat, lng },
      radius: radiusKm * 1000,         // metres
      strokeColor: "#e36e2a",
      strokeOpacity: 0.4,
      strokeWeight: 1.5,
      fillColor: "#e36e2a",
      fillOpacity: 0.06,
    });

    // Fit map to the circle bounds so the whole radius is visible
    googleMapRef.current.fitBounds(radiusCircleRef.current.getBounds());
  }

  // ── Place/replace provider markers on the map ─────────────────────────────
  function updateMapMarkers(results) {
    if (!googleMapRef.current) return;

    // Clear old markers
    providerMarkersRef.current.forEach((m) => m.setMap(null));
    providerMarkersRef.current = [];

    results.forEach((provider) => {
      if (!provider.location?.coordinates) return;

      const [lng, lat] = provider.location.coordinates; // MongoDB stores [lng, lat]
      const distanceKm = (provider.distance / 1000).toFixed(1);

      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map: googleMapRef.current,
        title: provider.name,
        animation: window.google.maps.Animation.DROP, // pin drops in
        icon: {
          // Orange pin to match your brand
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40">
                <ellipse cx="16" cy="37" rx="6" ry="3" fill="rgba(0,0,0,0.15)"/>
                <path d="M16 0C9.37 0 4 5.37 4 12c0 9 12 26 12 26S28 21 28 12C28 5.37 22.63 0 16 0z" fill="#e36e2a"/>
                <circle cx="16" cy="12" r="5" fill="white"/>
              </svg>
            `),
          scaledSize: new window.google.maps.Size(32, 40),
          anchor: new window.google.maps.Point(16, 40),
        },
      });

      // Info window popup when clicking a marker
      marker.addListener("click", () => {
        infoWindowRef.current.setContent(`
          <div style="font-family:sans-serif;padding:4px;min-width:160px">
            <p style="font-weight:600;margin:0 0 2px;font-size:14px">${provider.name}</p>
            <p style="color:#e36e2a;margin:0 0 4px;font-size:12px">${provider.speciality}</p>
            <p style="color:#666;margin:0;font-size:12px">${distanceKm} km away &bull; Rs. ${provider.fees}/hr</p>
          </div>
        `);
        infoWindowRef.current.open(googleMapRef.current, marker);
        setActiveProvider(provider._id);
        // Scroll the card into view
        document.getElementById(`card-${provider._id}`)?.scrollIntoView({
          behavior: "smooth", block: "nearest",
        });
      });

      providerMarkersRef.current.push(marker);
    });
  }

  // ── When a card is clicked, pan map to that provider + open info window ───
  function handleCardClick(provider) {
    if (!provider.location?.coordinates || !googleMapRef.current) return;
    const [lng, lat] = provider.location.coordinates;
    googleMapRef.current.panTo({ lat, lng });
    googleMapRef.current.setZoom(15);
    // Find and click the matching marker to open the info window
    const marker = providerMarkersRef.current.find(
      (m) => m.getTitle() === provider.name
    );
    if (marker) window.google.maps.event.trigger(marker, "click");
    setActiveProvider(provider._id);
  }

  // ── Refetch when user changes filters ─────────────────────────────────────
  function handleFilter(newSpec, newRadius) {
    if (!userLocation) return;
    setActiveProvider(null);
    infoWindowRef.current?.close();
    fetchProviders(userLocation.lat, userLocation.lng, newRadius, newSpec);
  }

  // ════════════════════════════════════════════════════════════════════════════
  // RENDER
  // ════════════════════════════════════════════════════════════════════════════
  return (
    <div className="flex flex-col items-center gap-4 my-10 text-gray-900 md:mx-10">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <h1 className="text-3xl font-medium">Search By Location</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-500">
        We automatically detect your location and show trusted service providers near you.
      </p>

      {/* ── Filters bar ────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3 w-full">
        {/* Speciality dropdown */}
        <select
          value={speciality}
          onChange={(e) => {
            setSpeciality(e.target.value);
            handleFilter(e.target.value, radius);
          }}
          className="border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#e36e2a] transition-all"
        >
          {SPECIALITIES.map((s) => (
            <option key={s} value={s}>{s === "All" ? "All Specialities" : s}</option>
          ))}
        </select>

        {/* Radius pills */}
        <div className="flex items-center gap-2">
          {RADIUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setRadius(opt.value);
                handleFilter(speciality, opt.value);
              }}
              className={`text-sm px-4 py-2 rounded-xl border transition-all ${
                radius === opt.value
                  ? "bg-[#e36e2a] text-white border-[#e36e2a]"
                  : "border-gray-300 text-gray-600 hover:border-[#e36e2a] hover:text-[#e36e2a]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Result count badge */}
        {!loading && (
          <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
            {searching ? "Searching..." : `${providers.length} provider${providers.length !== 1 ? "s" : ""} found`}
          </span>
        )}
      </div>

      {/* ── Error banner ───────────────────────────────────────────────────── */}
      {error && (
        <div className="w-full text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5">
          {error}
        </div>
      )}

      {/* ── Map ────────────────────────────────────────────────────────────── */}
      <div className="w-full relative">
        {/* Loading overlay sits on top of the map div while data loads */}
        {loading && (
          <div className="absolute inset-0 z-10 bg-gray-100 rounded-xl flex flex-col items-center justify-center gap-2">
            <svg className="animate-spin w-8 h-8 text-[#e36e2a]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            <p className="text-sm text-gray-500">Detecting your location...</p>
          </div>
        )}
        {/* Searching spinner (lighter, doesn't cover the whole map) */}
        {searching && !loading && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-white border border-gray-200 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm">
            <svg className="animate-spin w-3.5 h-3.5 text-[#e36e2a]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            <span className="text-xs text-gray-600">Updating results...</span>
          </div>
        )}
        {/* The actual map — must have a fixed height */}
        <div ref={mapDivRef} className="w-full h-[420px] rounded-xl border border-gray-200" />
      </div>

      {/* ── Provider cards below map ────────────────────────────────────────── */}
      {!loading && providers.length > 0 && (
        <div className="w-full">
          <p className="text-sm text-gray-500 mb-3">
            Click a card to jump to that provider on the map.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {providers.map((provider) => (
              <div id={`card-${provider._id}`} key={provider._id}>
                <ProviderCard
                  provider={provider}
                  onClick={handleCardClick}
                  isActive={activeProvider === provider._id}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Empty state ────────────────────────────────────────────────────── */}
      {!loading && !searching && providers.length === 0 && (
        <div className="w-full flex flex-col items-center gap-2 py-10 text-gray-400">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <p className="text-sm">No providers found in this area.</p>
          <p className="text-xs">Try increasing the radius or changing the speciality filter.</p>
        </div>
      )}
    </div>
  );
}

export default MapSection;