import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { assets, featuredServices } from "../assets/assets";
import BookingSlots from "../components/BookingComponent/BookingSlots.jsx";

function FeaturedServices() {
  const navigate = useNavigate();
  const { serviceid } = useParams();

  const [serviceInfo, setServiceInfo] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    const sInfo = featuredServices.find((fs) => fs.id === serviceid);
    setServiceInfo(sInfo);
    setActiveImage(sInfo?.image);
  }, [serviceid]);

  if (!serviceInfo) return null;

  const subImages = [
    serviceInfo.image,
    serviceInfo.subImage1,
    serviceInfo.subImage2,
    serviceInfo.subImage3,
  ].filter(Boolean);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Top Right Back Button */}
      <div className="flex justify-start mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#e36e2a] transition"
        >
          ← Back
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side */}
        <div className="lg:w-1/2">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <img
              className="w-full h-[420px] object-cover transition"
              src={activeImage}
              alt=""
            />
          </div>

          {/* Sub Images */}
          <div className="flex mt-4 gap-4">
            {subImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(img)}
                className={`w-24 h-24 rounded-2xl overflow-hidden cursor-pointer border transition
                  ${
                    activeImage === img
                      ? "border-[#e36e2a]"
                      : "border-gray-200"
                  }`}
              >
                <img className="w-full h-full object-cover" src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-y-4">
            <p className="text-sm text-[#e36e2a]">
              {serviceInfo.category}
            </p>

            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-semibold text-zinc-800">
                  {serviceInfo.serviceTitle}
                </h1>
                <span className="border border-green-200 rounded-full text-xs px-3 py-1 text-green-600 bg-green-100">
                  Available
                </span>
              </div>

              <p
                onClick={() =>
                  navigate(`/appointment/${serviceInfo.povId}`)
                }
                className="text-sm mt-1 text-zinc-700 hover:text-[#e36e2a] cursor-pointer"
              >
                {serviceInfo.providerName}
              </p>
            </div>

            {/* Price */}
            <div className="flex gap-3 items-end">
              <p className="text-3xl font-medium text-gray-800">
                Rs. {serviceInfo.cost}
              </p>
              <p className="text-xl text-gray-400 line-through">
                Rs. {serviceInfo.cost}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {serviceInfo.description}
            </p>

            {/* Booking */}
            <div className="mt-4">
              <BookingSlots
                onSlotSelect={(slot) => {
                  console.log("Selected Slot:", slot);
                }}
              />

              <button className="bg-[#e36e2a] text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:bg-[#c35d22] transition">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedServices;
