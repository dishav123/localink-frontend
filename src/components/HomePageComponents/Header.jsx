import { assets } from "../../assets/assets";

function Header() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#F3752B] to-[#e36e2a] mt-4 rounded-2xl shadow-xl">

      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">

        {/* ── Text content ─────────────────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 z-10">
          <div className="max-w-xl flex flex-col items-center text-center lg:items-start lg:text-left gap-5">

            {/* Location pill badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Location-based service
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold leading-tight">
              Find trusted local professionals near you
            </h1>

            {/* Sub-text */}
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Browse verified service providers in your area — we use your location to connect you with the nearest, most trusted experts instantly.
            </p>

            {/* Profiles + short note */}
            <div className="flex items-center gap-3">
              <img
                className="w-20 sm:w-24 h-auto flex-shrink-0"
                src={assets.group_profiles}
                alt="Trusted professionals"
              />
            </div>

            {/* CTA buttons — centered on mobile, left-aligned on desktop */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href="#speciality"
                className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-full text-gray-700 text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
              >
                <span>Book Appointment</span>
                <img
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  src={assets.arrowIcon}
                  alt=""
                />
              </a>
              <a
                href="#map"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 border border-white/40 px-6 py-3 rounded-full text-white text-sm font-medium transition-all duration-300 w-full sm:w-auto"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                Search by map
              </a>
            </div>

          </div>
        </div>

        {/* ── Image — hidden on mobile, visible on desktop ──────────────────── */}
        <div className="hidden lg:block w-full lg:w-1/2 relative lg:h-[500px] xl:h-[600px]">
          <div className="absolute inset-0">
            <img
              className="absolute bottom-0 right-0 w-full max-w-[400px] xl:max-w-[500px] h-auto object-contain"
              src={assets.headerImage3}
              alt="Professional services"
            />
          </div>
        </div>

      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none" />
    </div>
  );
}

export default Header;