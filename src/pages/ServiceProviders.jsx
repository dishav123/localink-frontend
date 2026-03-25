import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ServiceCard from "../components/MiniComponents/ServiceCard";
import { AppContext } from "../context/AppContext";

// All speciality filter options in one place — easy to update
const SPECIALITIES = [
  "Carpenter",
  "Electrician",
  "Plumber",
  "Painter",
  "House Cleaner",
  "Technician",
];

function ServiceProviders() {
  const { speciality } = useParams();
  const [filterSP, setFilterSP]     = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { serviceProviders }        = useContext(AppContext);
  const navigate                    = useNavigate();

  // Toggle: clicking an active filter clears it, otherwise navigate to it
  function handleFilterClick(value) {
    if (speciality === value) {
      navigate("/serviceproviders");      // deselect
    } else {
      navigate(`/serviceproviders/${value}`);
    }
  }

  useEffect(() => {
    let filtered = serviceProviders;

    if (speciality) {
      filtered = filtered.filter((sp) => sp.speciality === speciality);
    }
    if (searchTerm) {
      filtered = filtered.filter((sp) =>
        sp.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilterSP(filtered);
  }, [serviceProviders, speciality, searchTerm]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">

      {/* ── Header + Search ──────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <p className="text-gray-700 text-lg sm:text-2xl font-medium leading-snug">
          Browse your choices from top service providers.
        </p>

        {/* Search input */}
        <div className="relative w-full sm:w-72 flex-shrink-0">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
          </svg>
          <input
            placeholder="Search by name..."
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#e36e2a] focus:ring-1 focus:ring-[#e36e2a]/30 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-5">

        {/* ── Filters ───────────────────────────────────────────────────────
            Mobile: horizontal scrollable pill row
            Desktop: vertical list on the left                              */}
        <div className="w-full sm:w-auto">
          {/* Mobile — horizontal scroll row of pills */}
          <div className="flex sm:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {SPECIALITIES.map((label) => (
              <button
                key={label}
                onClick={() => handleFilterClick(label)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm border transition-all
                  ${speciality === label
                    ? "bg-[#e36e2a] text-white border-[#e36e2a]"
                    : "bg-white text-gray-600 border-gray-300 hover:border-[#e36e2a] hover:text-[#e36e2a]"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop — vertical list */}
          <div className="hidden sm:flex flex-col gap-3 text-sm text-gray-600 min-w-[160px]">
            {SPECIALITIES.map((label) => (
              <p
                key={label}
                onClick={() => handleFilterClick(label)}
                className={`pl-3 py-1.5 pr-10 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap
                  ${speciality === label
                    ? "bg-[#e36e2a] text-white border-transparent"
                    : "hover:bg-orange-50 hover:border-[#e36e2a] hover:text-[#e36e2a]"
                  }`}
              >
                {label}
              </p>
            ))}
          </div>
        </div>

        {/* ── Provider grid ─────────────────────────────────────────────────
            1 col on very small mobile, 2 col on sm, auto-fill on lg+       */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 gap-y-6">
          {filterSP.length > 0 ? (
            filterSP.map((item) => (
              <ServiceCard
                key={item._id}
                id={item._id}
                image={item.image}
                name={item.name}
                speciality={item.speciality}
                status="Available"
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16 text-gray-500">
              <svg
                className="w-12 h-12 mx-auto mb-3 text-gray-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-medium">No service providers found</p>
              <p className="text-sm mt-1">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default ServiceProviders;