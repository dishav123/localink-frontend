import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import ServiceCard from "../../MiniComponents/ServiceCard";
import { useNavigate } from "react-router";

function RelatedSP({spId,speciality}) {
    const {serviceProviders}=useContext(AppContext)
    const [relSP,setRelSP]=useState([])
    const navigate=useNavigate();

    useEffect(()=>{
        if(serviceProviders.length>0 && speciality){
            const spData=serviceProviders.filter((sp)=>sp.speciality===speciality && sp._id !== spId);
            setRelSP(spData);
        }

    },[serviceProviders,speciality,spId])
    return ( 
        <div>
            <div className="flex flex-col items-center gap-4 my-10 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Related Service Providers</h1>
            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {relSP.slice(0, 10).map((item, index) => (
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

            <button onClick={()=>{navigate(`/serviceproviders/${speciality}`)}} className="bg-orange-200 text-gray-600 px-12 py-3 rounded-full mt-10">More</button>
        </div>

        </div>
     );
}

export default RelatedSP;