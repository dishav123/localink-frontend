import { NavLink, useNavigate } from "react-router";
import { assets } from "../assets/assets";
import { useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(false);

    return (
        <div className="flex items-center justify-between text-sm py-3 mb-3 backdrop-blur-xl">
            
            {/* Logo */}
            <img 
                src={assets.logo} 
                alt="Logo" 
                className="w-15 h-15 cursor-pointer transition-transform duration-300 hover:scale-105"
            />

            {/* Nav Items */}
            <ul className="hidden md:flex items-start gap-6 font-medium text-[16px]">

                <NavLink 
                    to="/"
                    className={({ isActive }) => isActive ? "active group" : "group"}
                >
                    <li className="py-1 hover:text-gray-600 transition-colors duration-200">HOME</li>
                    <hr className="border-none outline-none h-[3px] w-3/5 m-auto bg-[#F3752B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded" />
                </NavLink>

                <NavLink 
                    to="/servicerproviders"
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

                        {/* Dropdown */}
                        <div className="absolute top-0 right-0 pt-10 z-20 hidden group-hover:block animate-fadeIn">
                            <div className="min-w-48 bg-stone-100 rounded shadow-lg flex flex-col gap-4 p-4 border border-gray-200">
                                <p 
                                    onClick={()=>navigate('/my-profile')} 
                                    className="hover:text-black transition-colors cursor-pointer"
                                >
                                    My Profile
                                </p>

                                <p 
                                    onClick={()=>navigate('/my-appointments')} 
                                    className="hover:text-black transition-colors cursor-pointer"
                                >
                                    My Appointments
                                </p>

                                <p 
                                    onClick={()=>setToken(false)} 
                                    className="hover:text-black transition-colors cursor-pointer"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div> 
                ) : (
                    <button 
                        onClick={()=>navigate('/login')}
                        className="bg-[#F3752B] text-white px-8 py-3 rounded-full font-light hidden md:block transition-all duration-300 hover:bg-[#d96322] hover:shadow-lg hover:scale-[1.02]"
                    >
                        Create Account
                    </button>
                )}
            </div>
        </div>
    );
}

export default Navbar;
