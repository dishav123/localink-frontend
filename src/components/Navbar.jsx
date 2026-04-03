import { NavLink, useNavigate } from "react-router";
import { assets } from "../assets/assets";
import { useState, useRef, useEffect, useContext } from "react";
import axios from "../api/axios";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const { token, setToken, userData } = useContext(AppContext);

  const isLoggedIn = !!token;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownKeyDown = (e) => {
    if (e.key === "Escape") setShowDropdown(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setShowDropdown(false);
  };

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
      setToken(null);
      localStorage.removeItem("token");
      setShowDropdown(false);
      setShowMenu(false);
      navigate("/");
    } catch (err) {
      console.log("Logout error", err);
    }
  };

  const navLinks = ["/", "/serviceproviders", "/about", "/contact"];
  const navLabels = ["HOME", "SERVICE PROVIDERS", "ABOUT US", "CONTACT"];

  return (
    <div className="relative">
      {/* ---------------- Desktop Navbar ---------------- */}
      <div className="flex items-center justify-between text-sm py-3 mb-3 backdrop-blur-xl hidden md:flex relative z-50">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-15 h-15 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/")}
        />

        <nav>
          <ul className="flex items-start gap-6 font-medium text-[16px]">
            {navLinks.map((path, i) => (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) => (isActive ? "active group" : "group")}
              >
                <li className="py-1 hover:text-gray-600 transition-colors duration-200">
                  {navLabels[i]}
                </li>
                <hr className="border-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded" />
              </NavLink>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div ref={dropdownRef} className="relative z-50">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                onKeyDown={handleDropdownKeyDown}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  className="w-8 h-8 rounded-full border"
                  src={
                    userData?.image
                      ? `${import.meta.env.VITE_API_URL.replace('/api', '')}/${userData.image.replace(/\\/g, "/")}`
                      : assets.profile_pic
                  }
                  alt="Profile"
                />
                <img
                  className={`w-2.5 transition-transform ${showDropdown ? "rotate-180" : ""}`}
                  src={assets.dropdownIcon}
                  alt=""
                />
              </button>

              {showDropdown && (
                <div className="absolute top-full right-0 mt-2 z-[100]">
                  <div className="min-w-48 bg-stone-100 rounded shadow-lg flex flex-col gap-1 p-2">
                    <button
                      onClick={() => handleNavigation("/my-profile")}
                      className="text-left px-4 py-2 hover:bg-white rounded"
                    >
                      MY PROFILE
                    </button>
                    <button
                      onClick={() => handleNavigation("/my-appointments")}
                      className="text-left px-4 py-2 hover:bg-white rounded"
                    >
                      MY APPOINTMENTS
                    </button>
                    <button
                      onClick={handleLogout}
                      className="text-left px-4 py-2 hover:bg-white rounded"
                    >
                      LOGOUT
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#F3752B] text-white px-8 py-3 rounded-full"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* ---------------- Mobile Navbar ---------------- */}
      <div className="flex md:hidden items-center justify-between py-3">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-14 h-14"
          onClick={() => navigate("/")}
        />

        {/* Hamburger */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-neutral-800 rounded-full transition-all duration-300 origin-center ${
              showMenu ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-800 rounded-full transition-all duration-300 ${
              showMenu ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-800 rounded-full transition-all duration-300 origin-center ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* ---------------- Mobile Menu ---------------- */}
      <div
        className={`md:hidden absolute top-[72px] left-0 w-full z-40 transition-all duration-300 ease-in-out ${
          showMenu
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="mx-3 bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">

          {/* Nav links */}
          <div className="px-3 pt-3 pb-2 flex flex-col gap-1">
            {navLinks.map((path, i) => (
              <NavLink
                key={i}
                to={path}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-orange-50 text-[#F3752B]"
                      : "text-neutral-700 hover:bg-neutral-50 hover:text-[#F3752B]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                        isActive ? "bg-[#F3752B]" : "bg-neutral-300"
                      }`}
                    />
                    {navLabels[i]}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-4 border-t border-neutral-100" />

          {/* Auth section */}
          <div className="px-3 pt-2 pb-3">
            {isLoggedIn ? (
              <>
                {/* User info row */}
                <div className="flex items-center gap-3 px-4 py-3 mb-1">
                  <img
                    className="w-9 h-9 rounded-full border border-neutral-200 object-cover"
                    src={
                      userData?.image
                        ? `${import.meta.env.VITE_API_URL.replace('/api', '')}/${userData.image.replace(/\\/g, "/")}`
                        : assets.profile_pic
                    }
                    alt="Profile"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-800 truncate">
                      {userData?.name || "My Account"}
                    </p>
                    <p className="text-xs text-neutral-400 truncate">{userData?.email || ""}</p>
                  </div>
                </div>

                <button
                  onClick={() => { navigate("/my-profile"); setShowMenu(false); }}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#F3752B] transition-all duration-150 text-left"
                >
                  <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My Profile
                </button>

                <button
                  onClick={() => { navigate("/my-appointments"); setShowMenu(false); }}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-[#F3752B] transition-all duration-150 text-left"
                >
                  <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  My Appointments
                </button>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-150 text-left mt-1"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <div className="px-1 py-1">
                <button
                  onClick={() => { navigate("/login"); setShowMenu(false); }}
                  className="w-full bg-[#F3752B] text-white py-3 rounded-xl font-medium text-sm hover:bg-[#e06520] transition-colors duration-150"
                >
                  Login / Create Account
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;