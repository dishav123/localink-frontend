import { assets } from "../../assets/assets";

function Header() {
    return ( 
        <div className="relative overflow-hidden bg-gradient-to-br from-[#F3752B] to-[#e36e2a] mt-4 rounded-2xl shadow-xl">
            
            {/* Container with proper padding */}
            <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
                
                {/* Left Side - Content */}
                <div className="w-full lg:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 z-10">
                    <div className="max-w-xl">
                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6 animate-fadeIn">
                            Quickly schedule with local professionals
                        </h1>

                        {/* Group Profiles and Description */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                            <img 
                                className="w-24 sm:w-28 h-auto" 
                                src={assets.group_profiles} 
                                alt="Trusted professionals" 
                            />
                            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                                Simply browse through our extensive list of trusted professionals, schedule your appointment hassle-free.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <a 
                            className="inline-flex items-center gap-2 bg-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-gray-700 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group" 
                            href="#speciality"
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

                {/* Right Side - Image */}
                <div className="w-full lg:w-1/2 relative lg:h-[500px] xl:h-[600px]">
                    {/* Mobile/Tablet View */}
                    <div className="lg:hidden w-full px-6 pb-8">
                        <img
                            className="w-full h-auto rounded-xl shadow-2xl object-cover"
                            src={assets.headerImage2}
                            alt="Professional services"
                        />
                    </div>

                    {/* Desktop View - Positioned Image */}
                    <div className="hidden lg:block absolute inset-0">
                        <img
                            className="absolute bottom-0 right-0 w-full max-w-[400px] xl:max-w-[500px] h-auto object-contain"
                            src={assets.headerImage2}
                            alt="Professional services"
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -z-0"></div>
        </div>
    );
}

export default Header;