import { useParams } from "react-router";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { featuredServices } from "../assets/assets";

function FeaturedServices() {
    const {serviceId}=useParams();
    const [serviceInfo,setServiceInfo]=useState(null);

    useEffect(()=>{
        const sInfo= featuredServices.find((fs)=>fs.id===serviceId)
        setServiceInfo(sInfo) 
    },[serviceId,serviceInfo])
    
    console.log(serviceInfo)
    return ( 
        <div>
            <div className="w-full max-h-56 overflow-hidden object-fill rounded-lg" > 
                
            </div>
        </div>
     );
}

export default FeaturedServices;