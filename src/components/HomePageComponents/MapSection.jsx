import { assets } from "../../assets/assets";

function MapSection() {
    return ( 
        <div className="flex flex-col items-center gap-4 my-10 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Search By Location</h1>
            <p className="sm:w-1/3 text-center text-sm">Pick a speciality to see trusted experts who are ready to help you with fast, reliable, and location-based service.</p>
            <div className=" bg-gray-200 w-full min-h-[400px] relative">
                <img  src={assets.MapClone} alt="MapImage" />
            </div>
        </div>
        
     );
}

export default MapSection;