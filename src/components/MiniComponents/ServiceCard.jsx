import { useNavigate } from "react-router";
import { MapPin, Star, Wallet } from "lucide-react";

function ServiceCard({ image, name, speciality, status, id, rating = 0, totalReviews = 0, city, fees }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        window.scrollTo(0, 0);
        navigate(`/appointment/${id}`);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={13}
                style={i < Math.round(rating)
                    ? { fill: "#e36e2a", color: "#e36e2a" }
                    : { fill: "#fde8d8", color: "#fde8d8" }
                }
            />
        ));
    };

    return (
        <div
            onClick={handleCardClick}
            className="w-full bg-white rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1.5 transition-all duration-300 group"
            style={{ border: "1px solid #fde8d8", boxShadow: "none" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 24px #e36e2a22"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
        >
            {/* Image */}
            <div className="w-full flex justify-center items-center h-44 relative overflow-hidden" style={{ background: "#fff5ef" }}>
                <img
                    src={`http://localhost:3000/${image.replace(/\\/g, "/")}`}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Status badge */}
                <span
                    className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 bg-white"
                    style={status === "Available"
                        ? { color: "#e36e2a", border: "1px solid #e36e2a55" }
                        : { color: "#ef4444", border: "1px solid #fca5a5" }
                    }
                >
                    <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: status === "Available" ? "#e36e2a" : "#ef4444" }}
                    />
                    {status}
                </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
                <div>
                    <p className="text-gray-900 text-base font-semibold leading-tight">{name}</p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "#e36e2a" }}>{speciality}</p>
                </div>

            

                {/* Location + Fees */}
                <div className="flex items-center justify-between pt-1" style={{ borderTop: "1px solid #fde8d8" }}>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <MapPin size={12} style={{ color: "#e36e2a" }} />
                        <span>{city || "Location N/A"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;