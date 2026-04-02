import { useNavigate } from "react-router";
import ServiceCard from "../MiniComponents/ServiceCard";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function TopServiceProvider() {
  const navigate = useNavigate();
  const { serviceProviders } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-10 text-gray-900 px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-medium text-center">
        Top Choices on Service Providers
      </h1>

      {/* Subtitle */}
      <p className="w-full sm:w-2/3 lg:w-1/3 text-center text-xs sm:text-sm text-gray-500 leading-relaxed">
        Pick a speciality to see trusted experts who are ready to help you with
        fast, reliable, and location-based service.
      </p>

      {/* Grid —
          mobile : 2 columns (cards are compact but still readable)
          sm+    : auto-fill with min 220px per card                  */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3 sm:gap-4 pt-5">
        {serviceProviders.slice(0, 10).map((item) => (
          <ServiceCard
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            speciality={item.speciality}
            status={item.available ? "Available" : "Unavailable"}
            rating={item.rating}
            totalReviews={item.totalReviews}
            city={item.city}
            fees={item.fees}
          />
        ))}
      </div>

      {/* More button */}
      <button
        onClick={() => {
          navigate("/serviceproviders");
          scrollTo(0, 0);
        }}
        className="bg-orange-100 hover:bg-orange-200 text-gray-600 text-sm font-medium px-10 sm:px-12 py-2.5 sm:py-3 rounded-full mt-6 sm:mt-10 transition-colors"
      >
        View More
      </button>
    </div>
  );
}

export default TopServiceProvider;
