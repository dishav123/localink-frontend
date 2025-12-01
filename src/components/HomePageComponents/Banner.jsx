import { assets } from "../../assets/assets";

function Banner() {
    return (  
        <div className="flex rounded-lg bg-[#e36e2a] px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 ">
            {/* Left Side */}
            <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white ">
                <p>Book Appointment</p>
                <p className="mt-4">With Trusted Service Providers</p>
                </div>
            <button className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">Become Service Provider</button>
            </div>

            {/* Right Side */}
            <div className="hidden md:block md:w-1/2 lg:w-[430px] relative">
                <img className="w-full absolute bottom-0 right-0 max-w-md" src={assets.BannerImage} alt="Image construction worker" />
                
            </div>

        </div>
    );
}

export default Banner
