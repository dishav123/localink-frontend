import { NavLink, useNavigate } from "react-router";
import { assets } from "../assets/assets";
import { useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(false);

    return (
        <div className="relative">

            {/* ---------------- Desktop Navbar (UNCHANGED) ---------------- */}
            <div className="flex items-center justify-between text-sm py-3 mb-3 backdrop-blur-xl hidden md:flex">

                {/* Logo */}
                <img 
                    src={assets.logo} 
                    alt="Logo" 
                    className="w-15 h-15 cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={()=>{navigate('/')}}
                />

                {/* Nav Items (Your Original Code) */}
                <ul className="flex items-start gap-6 font-medium text-[16px]">

                    <NavLink 
                        to="/"
                        className={({ isActive }) => isActive ? "active group" : "group"}
                    >
                        <li className="py-1 hover:text-gray-600 transition-colors duration-200">HOME</li>
                        <hr className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded" />
                    </NavLink>

                    <NavLink 
                        to="/serviceproviders"
                        className={({ isActive }) => isActive ? "active group" : "group"}
                    >
                        <li className="py-1 hover:text-gray-600 transition-colors duration-200">SERVICE PROVIDERS</li>
                        <hr className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded" />
                    </NavLink>

                    <NavLink 
                        to="/services"
                        className={({ isActive }) => isActive ? "active group" : "group"}
                    >
                        <li className="py-1 hover:text-gray-600 transition-colors duration-200">SERVICES</li>
                        <hr className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded" />
                    </NavLink>

                    <NavLink 
                        to="/about"
                        className={({ isActive }) => isActive ? "active group" : "group"}
                    >
                        <li className="py-1 hover:text-gray-600 transition-colors duration-200">ABOUT US</li>
                        <hr className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded" />
                    </NavLink>

                    <NavLink 
                        to="/contact"
                        className={({ isActive }) => isActive ? "active group" : "group"}
                    >
                        <li className="py-1 hover:text-gray-600 transition-colors duration-200">CONTACT</li>
                        <hr className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded" />
                    </NavLink>

                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {token ? (
                        <div className="flex items-center gap-2 cursor-pointer group relative transition-all duration-300">
                            <img 
                                className="w-8 rounded-full border hover:scale-105 transition-transform" 
                                src={assets.profile_pic} 
                                alt="" 
                            />
                            <img 
                                className="w-2.5 transition-transform group-hover:rotate-180 duration-300" 
                                src={assets.dropdownIcon} 
                                alt="" 
                            />

                            <div className="absolute top-0 right-0 pt-10 z-20 hidden group-hover:block animate-fadeIn">
                                <div className="min-w-48 bg-stone-100 rounded shadow-lg flex flex-col gap-4 p-4 border border-gray-200">
                                    <p onClick={()=>navigate('/my-profile')} className="hover:text-black transition-colors cursor-pointer">My Profile</p>
                                    <p onClick={()=>navigate('/my-appointments')} className="hover:text-black transition-colors cursor-pointer">My Appointments</p>
                                    <p onClick={()=>setToken(false)} className="hover:text-black transition-colors cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div> 
                    ) : (
                        <button 
                            onClick={()=>navigate('/login')}
                            className="bg-[#F3752B] text-white px-8 py-3 rounded-full font-light transition-all duration-300 hover:bg-[#d96322] hover:shadow-lg hover:scale-[1.02]"
                        >
                            Create Account
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
                />

                {/* Hamburger */}
                <div className="cursor-pointer z-50" onClick={() => setShowMenu(!showMenu)}>
                    <div className={`w-7 h-1 bg-black mb-1 transition-all duration-300 ${showMenu ? "rotate-45 translate-y-2" : ""}`}></div>
                    <div className={`w-7 h-1 bg-black mb-1 transition-all duration-300 ${showMenu ? "opacity-0" : ""}`}></div>
                    <div className={`w-7 h-1 bg-black transition-all duration-300 ${showMenu ? "-rotate-45 -translate-y-2" : ""}`}></div>
                </div>
            </div>

            {/* ------------------ MOBILE MENU ------------------ */}
            {showMenu && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 z-40">

                    <NavLink to="/" onClick={() => setShowMenu(false)}>HOME</NavLink>
                    <NavLink to="/servicerproviders" onClick={() => setShowMenu(false)}>SERVICE PROVIDERS</NavLink>
                    <NavLink to="/services" onClick={() => setShowMenu(false)}>SERVICES</NavLink>
                    <NavLink to="/about" onClick={() => setShowMenu(false)}>ABOUT US</NavLink>
                    <NavLink to="/contact" onClick={() => setShowMenu(false)}>CONTACT</NavLink>

                    {!token && (
                        <button 
                            onClick={() => { navigate('/login'); setShowMenu(false); }}
                            className="bg-[#F3752B] text-white px-8 py-3 rounded-full font-light"
                        >
                            Create Account
                        </button>
                    )}
                </div>
            )}

        </div>
    );
}

export default Navbar;
