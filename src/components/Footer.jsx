import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router";

function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "Home",             path: "/" },
    { label: "Service Providers", path: "/serviceproviders" },
    { label: "About Us",         path: "/about" },
    { label: "Contact Us",       path: "/contact" },
    { label: "Privacy Policy",   path: "/privacy" },
  ];

  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* ── Logo + description ── */}
          <div className="sm:col-span-2 md:col-span-1">
            <img
              className="w-28 mb-4 cursor-pointer"
              src={assets.logo}
              alt="Localink"
              onClick={() => goTo("/")}
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Connecting you with trusted local service providers across Nepal.
              Quality work, fair prices, and reliable service — every time.
            </p>
          </div>

          {/* ── Company links ── */}
          <div>
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map(({ label, path }) => {
                const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
                return (
                  <li key={label}>
                    <span
                      onClick={() => goTo(path)}
                      className={`text-sm cursor-pointer transition-colors flex items-center gap-2 group ${
                        isActive ? "text-[#e36e2a] font-medium" : "text-gray-500 hover:text-[#e36e2a]"
                      }`}
                    >
                      {/* Active dot indicator */}
                      <span className={`inline-block w-1 h-1 rounded-full flex-shrink-0 transition-all ${
                        isActive ? "bg-[#e36e2a] scale-125" : "bg-transparent group-hover:bg-[#e36e2a]"
                      }`} />
                      {label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── Get in touch ── */}
          <div>
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4 text-[#e36e2a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +977-987456123
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4 text-[#e36e2a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                localinkinfoservice@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4 text-[#e36e2a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kathmandu, Nepal
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © 2024 Localink. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span
              onClick={() => goTo("/privacy")}
              className={`text-xs cursor-pointer transition-colors ${
                pathname === "/privacy" ? "text-[#e36e2a]" : "text-gray-400 hover:text-[#e36e2a]"
              }`}
            >
              Privacy Policy
            </span>
            <span className="text-gray-300">•</span>
            <span
              onClick={() => goTo("/terms")}
              className={`text-xs cursor-pointer transition-colors ${
                pathname === "/terms" ? "text-[#e36e2a]" : "text-gray-400 hover:text-[#e36e2a]"
              }`}
            >
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;