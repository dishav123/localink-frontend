import { assets } from "../../assets/assets";

function Header() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#F3752B] to-[#e36e2a] mt-4 rounded-2xl shadow-xl">

      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">

        {/* ── Left: Text content ──────────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 pt-10 pb-6 sm:pt-14 sm:pb-8 lg:py-20 z-10">
          <div className="max-w-xl">

            {/* Heading — smaller on mobile so it doesn't overflow */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold leading-tight mb-4 sm:mb-6">
              Quickly schedule with local professionals
            </h1>

            {/* Profiles + description — stack vertically on small screens */}
            <div className="flex flex-col xs:flex-row items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <img
                className="w-20 sm:w-28 h-auto flex-shrink-0"
                src={assets.group_profiles}
                alt="Trusted professionals"
              />
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                Simply browse through our extensive list of trusted professionals, schedule your appointment hassle-free.
              </p>
            </div>

            {/* CTA button */}
            <a
              href="#speciality"
              className="inline-flex items-center gap-2 bg-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-gray-700 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <span>Book Appointment</span>
              <img
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                src={assets.arrowIcon}
                alt=""
              />
            </a>
          </div>
        </div>

        {/* ── Right: Image ────────────────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 relative lg:h-[500px] xl:h-[600px]">

          {/* Mobile — smaller, contained, doesn't dominate the screen */}
          <div className="lg:hidden flex justify-center px-8 pb-8 pt-2">
            <img
              className="w-48 sm:w-64 h-auto object-contain drop-shadow-2xl"
              src={assets.headerImage2}
              alt="Professional services"
            />
          </div>

          {/* Desktop — absolute positioned, sits flush at the bottom */}
          <div className="hidden lg:block absolute inset-0">
            <img
              className="absolute bottom-0 right-0 w-full max-w-[400px] xl:max-w-[500px] h-auto object-contain"
              src={assets.headerImage2}
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