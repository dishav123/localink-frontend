import { NavLink, useNavigate } from "react-router";
import { assets } from "../assets/assets";
import { useState, useRef, useEffect } from "react";
import axios from "../api/axios";

function Navbar({ user, setUser, loading }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  console.log("Navbar user:", user);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation for dropdown
  const handleDropdownKeyDown = (e) => {
    if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      {/* ---------------- Desktop Navbar ---------------- */}
      <div className="flex items-center justify-between text-sm py-3 mb-3 backdrop-blur-xl hidden md:flex relative z-50">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="w-15 h-15 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/")}
        />

        {/* Nav Items */}
        <nav aria-label="Main navigation">
          <ul className="flex items-start gap-6 font-medium text-[16px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active group" : "group"
              }
            >
              <li className="py-1 hover:text-gray-600 transition-colors duration-200">
                HOME
              </li>
              <hr
                className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded"
                aria-hidden="true"
              />
            </NavLink>

            <NavLink
              to="/serviceproviders"
              className={({ isActive }) =>
                isActive ? "active group" : "group"
              }
            >
              <li className="py-1 hover:text-gray-600 transition-colors duration-200">
                SERVICE PROVIDERS
              </li>
              <hr
                className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded"
                aria-hidden="true"
              />
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "active group" : "group"
              }
            >
              <li className="py-1 hover:text-gray-600 transition-colors duration-200">
                SERVICES
              </li>
              <hr
                className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded"
                aria-hidden="true"
              />
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active group" : "group"
              }
            >
              <li className="py-1 hover:text-gray-600 transition-colors duration-200">
                ABOUT US
              </li>
              <hr
                className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded"
                aria-hidden="true"
              />
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active group" : "group"
              }
            >
              <li className="py-1 hover:text-gray-600 transition-colors duration-200">
                CONTACT
              </li>
              <hr
                className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded"
                aria-hidden="true"
              />
            </NavLink>
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user ? (
            <div ref={dropdownRef} className="relative z-50">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                onKeyDown={handleDropdownKeyDown}
                className="flex items-center gap-2 cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3752B] rounded-full p-1"
                aria-expanded={showDropdown}
                aria-haspopup="true"
                aria-label="User menu"
              >
                <img
                  className="w-8 h-8 rounded-full border hover:scale-105 transition-transform"
                  src={assets.profile_pic}
                  alt="Profile"
                />
                <img
                  className={`w-2.5 transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`}
                  src={assets.dropdownIcon}
                  alt=""
                  aria-hidden="true"
                />
              </button>

              {showDropdown && (
                <div
                  className="absolute top-full right-0 mt-2 z-[100] animate-fadeIn"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="min-w-48 bg-stone-100 rounded shadow-lg flex flex-col gap-1 p-2 border border-gray-200">
                    <button
                      onClick={() => handleNavigation("/my-profile")}
                      className="text-left px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer rounded focus:outline-none focus:bg-white"
                      role="menuitem"
                      tabIndex={0}
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => handleNavigation("/my-appointments")}
                      className="text-left px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer rounded focus:outline-none focus:bg-white"
                      role="menuitem"
                      tabIndex={0}
                    >
                      My Appointments
                    </button>
                    <button
                      onClick={async () => {
                        try {
                          await axios.post("/auth/logout");
                          setUser(null);
                          setShowDropdown(false);
                          navigate("/");
                        } catch (err) {
                          console.log("Logout error", err);
                        }
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#F3752B] text-white px-8 py-3 rounded-full font-light transition-all duration-300 hover:bg-[#d96322] hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#F3752B] focus:ring-offset-2"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* ------------------ MOBILE NAVBAR ------------------ */}
      <div className="flex md:hidden items-center justify-between py-3">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="w-14 h-14"
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && navigate("/")}
        />

        {/* Hamburger */}
        <button
          className="cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-[#F3752B] rounded p-1"
          onClick={() => setShowMenu(!showMenu)}
          aria-expanded={showMenu}
          aria-label={showMenu ? "Close menu" : "Open menu"}
        >
          <div
            className={`w-7 h-1 bg-black mb-1 transition-all duration-300 ${showMenu ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div
            className={`w-7 h-1 bg-black mb-1 transition-all duration-300 ${showMenu ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-7 h-1 bg-black transition-all duration-300 ${showMenu ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </button>
      </div>

      {/* ------------------ MOBILE MENU ------------------ */}
      {showMenu && (
        <nav
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 z-40"
          aria-label="Mobile navigation"
        >
          <NavLink
            to="/"
            onClick={() => setShowMenu(false)}
            className="hover:text-[#F3752B] transition-colors font-medium"
          >
            HOME
          </NavLink>
          <NavLink
            to="/serviceproviders"
            onClick={() => setShowMenu(false)}
            className="hover:text-[#F3752B] transition-colors font-medium"
          >
            SERVICE PROVIDERS
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setShowMenu(false)}
            className="hover:text-[#F3752B] transition-colors font-medium"
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setShowMenu(false)}
            className="hover:text-[#F3752B] transition-colors font-medium"
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setShowMenu(false)}
            className="hover:text-[#F3752B] transition-colors font-medium"
          >
            CONTACT
          </NavLink>

          {user ? (
            <div className="flex flex-col gap-4 w-full px-8">
              <button
                onClick={() => {
                  navigate("/my-profile");
                  setShowMenu(false);
                }}
                className="text-center py-2 hover:text-[#F3752B] transition-colors font-medium"
              >
                My Profile
              </button>
              <button
                onClick={() => {
                  navigate("/my-appointments");
                  setShowMenu(false);
                }}
                className="text-center py-2 hover:text-[#F3752B] transition-colors font-medium"
              >
                My Appointments
              </button>
              <button
                onClick={() => {
                  setUser;
                  setShowMenu(false);
                }}
                className="text-center py-2 hover:text-[#F3752B] transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setShowMenu(false);
              }}
              className="bg-[#F3752B] text-white px-8 py-3 rounded-full font-light hover:bg-[#d96322] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F3752B] focus:ring-offset-2"
            >
              Create Account
            </button>
          )}
        </nav>
      )}
    </div>
  );
}

export default Navbar;
