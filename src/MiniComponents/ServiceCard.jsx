import { useNavigate } from "react-router";

function ServiceCard({ image, name, speciality, status,id }) {
    const navigate=useNavigate();
    return (
        
        <div  onClick={()=>navigate(`/appointment/${id}`)} className="w-full border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500">
            <div className="w-full bg-blue-100 flex justify-center items-center">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full max-h-42 object-contain" 
                />
            </div>

            <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                    <p className={`w-2 h-2 rounded-full ${status === "Available" ? "bg-green-500" : "bg-red-500"}`}></p>
                    <p>{status}</p>
                </div>

                <p className="text-gray-900 text-lg font-medium ">{name}</p>
                <p className="text-sm text-gray-600">{speciality}</p>
            </div>
        </div>
    );
}

export default ServiceCard;
