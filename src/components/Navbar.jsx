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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
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
        <nav>
          <ul className="flex items-start gap-6 font-medium text-[16px]">
            {["/", "/serviceproviders", "/about", "/contact"].map(
              (path, i) => {
                const labels = [
                  "HOME",
                  "SERVICE PROVIDERS",
                  "ABOUT US",
                  "CONTACT",
                ];
                return (
                  <NavLink
                    key={i}
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "active group" : "group"
                    }
                  >
                    <li className="py-1 hover:text-gray-600 transition-colors duration-200">
                      {labels[i]}
                    </li>
                    <hr className="border-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded" />
                  </NavLink>
                );
              }
            )}
          </ul>
        </nav>

        {/* Right Side */}
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
                  src={userData?.image
                      ? `http://localhost:3000/${userData.image.replace(/\\/g, "/")}`
                      : assets.profile_pic}
                  alt="Profile"
                />
                <img
                  className={`w-2.5 transition-transform ${
                    showDropdown ? "rotate-180" : ""
                  }`}
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

      {/* ---------------- MOBILE NAVBAR ---------------- */}
      <div className="flex md:hidden items-center justify-between py-3">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-14 h-14"
          onClick={() => navigate("/")}
        />

        <button onClick={() => setShowMenu(!showMenu)}>
          <div
            className={`w-7 h-1 bg-black mb-1 ${
              showMenu ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-1 bg-black mb-1 ${
              showMenu ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-7 h-1 bg-black ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      {showMenu && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 z-40">
          {["/", "/serviceproviders", "/about", "/contact"].map(
            (path, i) => {
              const labels = [
                "HOME",
                "SERVICE PROVIDERS",
                "ABOUT US",
                "CONTACT",
              ];
              return (
                <NavLink
                  key={i}
                  to={path}
                  onClick={() => setShowMenu(false)}
                  className="hover:text-[#F3752B]"
                >
                  {labels[i]}
                </NavLink>
              );
            }
          )}

          {isLoggedIn ? (
            <div className="flex flex-col gap-4 w-full px-8">
              <button
                onClick={() => {
                  navigate("/my-profile");
                  setShowMenu(false);
                }}
              >
                MY PROFILE
              </button>

              <button
                onClick={() => {
                  navigate("/my-appointments");
                  setShowMenu(false);
                }}
              >
                MY APPOINTMENTS
              </button>

              <button onClick={handleLogout}>LOGOUT</button>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setShowMenu(false);
              }}
              className="bg-[#F3752B] text-white px-8 py-3 rounded-full"
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
