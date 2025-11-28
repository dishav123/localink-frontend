import { assets } from "../assets/assets";



function Header() {
    return ( 
        <div className="flex flex-col md:flex-row flex-wrap bg-[#e36e2a] mt-4 rounded-lg px-6 md:px-10 lg:px-20">
            {/* leftSide */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
                <p className="text-4xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight ">Quickly schedule with <br/>local professionals</p>
                <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                <img className="w-28" src={assets.group_profiles} alt="groupprofiles" />
                <p>Simply browse through our extensive list of trusted 
                <br/>professionals,  schedule your appointment hassle-free.
                </p>
                </div>
                
                <a className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 ' href="#">Book Appointment <img src={assets.arrowIcon} alt="" /></a>
            </div>

            {/* RightSide */}
            <div className="md:w-1/2 relative">
               <img
                className="w-full max-w-[620px] md:w-[420px] md:absolute md:bottom-0 md:right-2.5 h-auto rounded-lg object-cover"
                src={assets.headerImage2}
                alt="image"
                />
            </div>

        </div>
     );
}

export default Header;