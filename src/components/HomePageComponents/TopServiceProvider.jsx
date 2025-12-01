import { useNavigate } from "react-router";
import ServiceCard from "../../MiniComponents/ServiceCard";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function TopServiceProvider() {
    const navigate=useNavigate();
    const {serviceProviders}=useContext(AppContext);
    
    return ( 
        <div className="flex flex-col items-center gap-4 my-10 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Top Choices on Service Providers</h1>
            <p className="sm:w-1/3 text-center text-sm">
                Pick a speciality to see trusted experts who are ready to help you with fast, reliable, and location-based service.
            </p>

            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {serviceProviders.slice(0, 10).map((item, index) => (
                    <ServiceCard
                        key={index}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        speciality={item.speciality}
                        status="Available"
                    />
                ))}
            </div>

            <button onClick={()=>{navigate('/servicerproviders'); scrollTo(0,0)}} className="bg-orange-200 text-gray-600 px-12 py-3 rounded-full mt-10">More</button>
        </div>
     );
}

export default TopServiceProvider;
