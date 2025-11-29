import { Link } from "react-router";
import { specialityData } from "../assets/assets";

function SpecialityMenu() {
    return ( 
        <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
            <h1 className="text-3xl font-medium">Find by Speciality</h1>
            <p className="sm:w-1/3 text-center text-sm">
                Pick a speciality to see trusted experts who are ready to help you with fast, reliable, and location-based service.
            </p>

            <div className="flex sm:justify-center gap-6 pt-5 w-full overflow-scroll ">
                {specialityData.map((items, index) => {
                    return (
                        <Link className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index} to={`/servicerproviders/${items.speciality}`}>
                            <img className='w-16 sm:w-24 mb-2' src={items.image} alt={items.speciality} />
                            <p>{items.speciality}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
     );
}

export default SpecialityMenu;
