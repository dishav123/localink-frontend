import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

function MyAppointment() {
  const { povId } = useParams();
  const { serviceProviders } = useContext(AppContext);

  const [servicePovInfo, setServicePovInfo] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const spInfo = serviceProviders.find((sp) => sp._id === povId);
    setServicePovInfo(spInfo);
  }, [povId, serviceProviders]);

  if (!servicePovInfo) return null;

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 p-4">
      {/* IMAGE SECTION */}
      <div className="md:w-1/4 w-full flex-1 flex items-start p-4 bg-[#e36e2a] rounded-lg">
        <div className="w-62 h-80">
          <img
            className="w-full h-full object-cover rounded-lg shadow-sm"
            src={servicePovInfo.image}
            alt={servicePovInfo.name}
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col md:w-3/4 w-full gap-4 border border-gray-300 p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold">{servicePovInfo.name}</p>
          <img className="w-5 h-5" src={assets.verifiedIcon} alt="verified" />
        </div>

        <div className="flex flex-wrap gap-3 items-center text-gray-600">
          <p className="text-base">
            {servicePovInfo.speciality} — {servicePovInfo.masterIn}
          </p>
          <span className="border rounded-full px-3 py-1 text-sm bg-gray-100">
            {servicePovInfo.experience}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 font-medium text-gray-800 text-lg">
            About <img className="w-4 h-4" src={assets.InfoIcon} alt="info" />
          </p>

          <p
            className={`text-gray-600 leading-relaxed transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-4"
            }`}
          >
            {servicePovInfo.description}
          </p>

          {servicePovInfo.description.length > 120 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className=" text-[#e36e2a] text-sm font-medium hover:underline w-fit"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          )}
        </div>

        <div className="flex gap-2 text-lg md:text-xl">
          <span className="text-gray-600">Hourly Fees:</span>
          <span className="font-semibold">
            Rs. {servicePovInfo.fees} / hour
          </span>
        </div>

        <div className="flex flex-col">
            <span className="text-gray-600">Location: </span>
            <span className="text-md flex gap-x-1"><img className="text-gray-600 w-4" src={assets.LocationPinIcon} alt="" /> {servicePovInfo.address.line1}</span>
        </div> 
      </div>
    </div>
  );
}

export default MyAppointment;
