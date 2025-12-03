import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ServiceCard from "../MiniComponents/ServiceCard";
import { AppContext } from "../context/AppContext";

function ServiceProviders() {
  const { speciality } = useParams();
  const [filterSP, setFilterSP] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { serviceProviders } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    let filtered = serviceProviders;
    if (speciality) {
      filtered = filtered.filter((SP) => SP.speciality === speciality);
    }

    if (searchTerm) {
      filtered = filtered.filter((SP) =>
        SP.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilterSP(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [serviceProviders, speciality, searchTerm]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-gray-600 text-2xl font-medium">
          Browse your choices from Top Service providers.
        </p>
        <input
          placeholder="Enter providers name..."
          className="border-2 border-gray-600 px-4 py-2 m-2 rounded-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              speciality === "Carpenter"
                ? navigate("/serviceproviders")
                : navigate("/serviceproviders/Carpenter")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Carpenter"
                ? "bg-[#e36e2a] text-white border-0"
                : ""
            }`}
          >
            Carpenter
          </p>
          <p
            onClick={() =>
              speciality === "Electrician"
                ? navigate("/serviceproviders")
                : navigate("/serviceproviders/Electrician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Electrician"
                ? "bg-[#e36e2a] text-white border-0"
                : ""
            }`}
          >
            Electrician
          </p>
          <p
            onClick={() =>
              speciality === "Plumber"
                ? navigate("/serviceproviders")
                : navigate("/serviceproviders/Plumber")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Plumber" ? "bg-[#e36e2a] text-white border-0" : ""
            }`}
          >
            Plumber
          </p>
          <p
            onClick={() =>
              speciality === "Painter"
                ? navigate("/serviceproviders")
                : navigate("/serviceproviders/Painter")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Painter" ? "bg-[#e36e2a] text-white border-0" : ""
            }`}
          >
            Painter
          </p>
          <p
            onClick={() =>
              speciality === "House Cleaner"
                ? navigate("/serviceproviders")
                : navigate("/serviceproviders/House Cleaner")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-36 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "House Cleaner"
                ? "bg-[#e36e2a] text-white border-0"
                : ""
            }`}
          >
            House Cleaner
          </p>
          <p
            onClick={() =>
              speciality === "Technician"
                ? navigate("/serviceproviders")
                : navigate("/serviceproviders/Technician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Technician"
                ? "bg-[#e36e2a] text-white border-0"
                : ""
            }`}
          >
            Technician
          </p>
        </div>
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 gap-y-6">
          {filterSP.length > 0 ? (
            filterSP.map((item, index) => {
              return (
                <ServiceCard
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  speciality={item.speciality}
                  status="Available"
                />
              );
            })
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              <p className="text-xl">No service providers found</p>
              <p className="text-sm mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceProviders;
