import { useNavigate } from "react-router";
import { featuredServices } from "../assets/assets";
import SpecialServiceCard from "../MiniComponents/SpecialServiceCard";

function Services() {
    const navigate=useNavigate();
    return ( 
        <div>
            <div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    featuredServices.map((fs,index)=>{
                        return(
                            <SpecialServiceCard
                            key={index}
                            id={fs.id}
                            title={fs.serviceTitle}
                            providerName={fs.providerName}
                            image={fs.image}
                            rating={fs.review}
                            category={fs.category}
                            description={fs.description}
                            cost={fs.cost}
                            />
                        )
                    })
                }
                
            </div>
            
        </div>
     );
}

export default Services;