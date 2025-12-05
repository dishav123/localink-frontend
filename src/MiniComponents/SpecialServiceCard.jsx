import { Star } from "lucide-react";
import { useNavigate } from "react-router";

function SpecialServiceCard({
  id,
  title,
  providerName,
  category,
  image,
  description,
  rating,
  cost,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/services/${id}`)}
      className="group w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ease-out flex"
    >
      <div className="w-2/5 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {category && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-[#e36e2a]">
              {category}
            </span>
          </div>
        )}
      </div>

      <div className="w-3/5 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <p className="text-md font-bold text-[#e36e2a]">Rs. {cost}</p>
          <a className="text-sm font-medium hover:text-gray-600 " href="#">
            By {providerName}
          </a>
        </div>

        <div className="flex items-center gap-3 pt-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className={`${
                  index < Math.floor(rating)
                    ? "fill-[#e36e2a] text-[#e36e2a]"
                    : "fill-none text-gray-300"
                }`}
              />
            ))}
          </div>

          <span className="text-lg font-semibold text-gray-900">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default SpecialServiceCard;
