import { NavLink, useNavigate } from "react-router";
import { assests } from "../assets/assests";
import { useState } from "react";

function Navbar() {
    const navigate=useNavigate();
    const [showMenu,setShowMenu]=useState(false);
    const [token,setToken]=useState(true);
    return ( 
        <div className="flex items-center justify-between text-sm py-2 mb-3 border-b border-b-gray-400">
            <img src={assests.logo} alt="Logo" className="w-25 h-25 cursor-pointer"/>
            <ul className="hidden md:flex items-start gap-5 font-medium text-[16px]">
                <NavLink to='/'>
                    <li className="py-1" >HOME</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-[#F3752B] hidden"/>
                </NavLink>
                <NavLink to='/servicerproviders'>
                    <li className="py-1 ">SERVICE PROVIDERS</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-[#F3752B] hidden"/>
                </NavLink>
                <NavLink to='/services'>
                    <li className="py-1 ">SERVICES</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-[#F3752B] hidden"/>
                </NavLink>
                <NavLink to='/about'>
                    <li className="py-1 ">ABOUT</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-[#F3752B] hidden"/>
                </NavLink>
                <NavLink to='/contact'>
                    <li className="py-1 ">CONTACT</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 m-auto bg-[#F3752B] hidden"/>
                </NavLink>

            </ul>
            <div className="flex items-center gap-4">
                {
                    token ? <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className="w-8 rounded-full" src={assests.profile_pic} alt="" />
                        <img className='w-2.5' src={assests.dropdownIcon} alt="" />
                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                                <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={()=>navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                                <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                        </div>

                    </div> 
                    :<button onClick={()=>navigate('/login')} className="bg-[#F3752B] text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
                }
                
            </div>
        </div>
     );
}

export default Navbar;