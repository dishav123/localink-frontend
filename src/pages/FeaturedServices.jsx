import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { assets, featuredServices } from "../assets/assets";
import BookingSlots from "../components/BookingComponent/BookingSlots.jsx";

function FeaturedServices() {
  const navigate = useNavigate();
  const { serviceid } = useParams();

  const [serviceInfo, setServiceInfo] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [showRatings, setShowRatings] = useState(false);

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
                    activeImage === img ? "border-[#e36e2a]" : "border-gray-200"
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
            <p className="text-sm text-[#e36e2a]">{serviceInfo.category}</p>

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
                onClick={() => navigate(`/appointment/${serviceInfo.povId}`)}
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
      {/* <hr className="mt-5 border border-gray-400"/> */}

      {/* Tabs Section */}
      <div className="mt-12 border-b border-gray-200">
        <div className="flex gap-12">
          <button
            onClick={() => setShowRatings(false)}
            className={`pb-3 text-xl font-medium transition relative ${
              !showRatings
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Description
            {!showRatings && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
            )}
          </button>
          <button
            onClick={() => setShowRatings(true)}
            className={`pb-3 text-xl font-medium transition relative ${
              showRatings
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Ratings & Reviews
            {showRatings && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-8">
        {!showRatings ? (
          // Description Tab
          <div className="space-y-8">
            {serviceInfo.detailedDescription?.overview && (
              <div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {serviceInfo.detailedDescription.overview}
                </p>
              </div>
            )}

            {serviceInfo.detailedDescription?.servicesOffered && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Services Offered
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceInfo.detailedDescription.servicesOffered.map(
                    (service, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e36e2a]" />
                        <span className=" text-gray-700">{service}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {serviceInfo.detailedDescription?.whyChooseRamesh && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose This Service
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceInfo.detailedDescription.whyChooseRamesh.map(
                    (point, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-3"
                      >
                        <svg
                          className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{point}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          // Ratings & Reviews Tab
          <div className="space-y-8">
            {/* Rating Overview */}
            <div className="flex flex-col md:flex-row gap-8 pb-8 border-b border-gray-200">
              {/* Left: Overall Rating */}
              <div className="md:w-1/3 text-center md:text-left">
                <div className="text-6xl font-semibold text-gray-900">
                  {serviceInfo.review}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(serviceInfo.review)
                          ? "text-[#e36e2a]"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {serviceInfo.detailedDescription?.customerReviews?.length ||
                    0}{" "}
                  Reviews
                </p>
              </div>

              {/* Right: Rating Bars */}
              <div className="md:w-2/3 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => {
                  const reviews =
                    serviceInfo.detailedDescription?.customerReviews || [];
                  const count = reviews.filter(
                    (r) => Math.floor(r.rating) === star
                  ).length;
                  const percentage =
                    reviews.length > 0 ? (count / reviews.length) * 100 : 0;

                  return (
                    <div key={star} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-6">
                        {star}★
                      </span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#e36e2a] rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 w-12 text-right">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Customer Reviews */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Customer Reviews
              </h3>
              <div className="space-y-6">
                {serviceInfo.detailedDescription?.customerReviews?.map(
                  (review, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-6 last:border-0"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(review.rating)
                                ? "text-[#e36e2a]"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-medium text-gray-900 mb-1">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeaturedServices;
