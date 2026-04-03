import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedSP from "../components/AppointmentPageComponent/RelatedSP";
import BookingSlots from "../components/BookingComponent/BookingSlots.jsx";
import { toast } from "react-toastify";
import { LoginPromptModal } from "../components/MiniComponents/LoginPromptModal.jsx";
import axios from "axios";

function MyAppointment() {
  const navigate = useNavigate();
  const { povId } = useParams();
  const { serviceProviders, getSPData, token, backendUrl } =
    useContext(AppContext);

  const [servicePovInfo, setServicePovInfo] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showRatings, setShowRatings] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const spInfo = serviceProviders.find((sp) => sp._id === povId);
    setServicePovInfo(spInfo);
  }, [povId, serviceProviders]);

  if (!servicePovInfo) return null;

  const reviews = servicePovInfo.customerReviews || [];
  const totalReviews = reviews.length;

  const avgRating =
    totalReviews > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(
          1,
        )
      : 0;

  const calculatedRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        ).toFixed(1)
      : 0;

  const locationString = [
    servicePovInfo.municipality,
    servicePovInfo.city,
    servicePovInfo.province,
  ]
    .filter(Boolean) // removes empty/undefined values
    .join(", ");

  const bookAppointment = async () => {
    if (!token) {
      setShowLoginPrompt(true); // ← replaces toast + navigate
      return;
    }
    try {
      const date = selectedSlot.date;
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      const slotDate = day + "/" + month + "/" + year;
      const slotTime = selectedSlot.time;
      const spId = povId;

      console.log(slotDate, slotTime, spId);

      const { data } = await axios.post(
        `${backendUrl}/user/book-appointment`,
        { spId, slotDate, slotTime },
        { headers: { token } },
      );
      if (data.success) {
        toast.success(data.message);
        await getSPData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const hasUserReviewed = () => {
    if (!token || !servicePovInfo?.customerReviews) return false;

    return servicePovInfo.customerReviews.some(
      (r) => r.userId === JSON.parse(atob(token.split(".")[1])).id,
    );
  };

  const submitReview = async () => {
    if (!token) {
      setShowLoginPrompt(true);
      return;
    }

    if (!rating || !reviewText.trim()) {
      return toast.error("Please provide rating and review.");
    }

    try {
      setIsSubmitting(true);

      const { data } = await axios.post(
        `${backendUrl}/user/review-rating`,
        {
          spId: povId,
          rating,
          review: reviewText,
        },
        { headers: { token } },
      );

      if (data.success) {
        toast.success(data.message);

        setReviewText("");
        setRating(0);

        await getSPData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Back Button */}
      <div className="flex justify-start mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-base text-gray-600 hover:text-[#e36e2a] transition"
        >
          ← Back
        </button>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* IMAGE SECTION */}
        <div className="md:w-1/4 w-full flex-1 flex items-start p-4 bg-[#e36e2a] rounded-lg">
          <div className="w-62 h-80">
            <img
              className="w-full h-full object-cover rounded-lg shadow-sm"
              src={`${import.meta.env.VITE_API_URL.replace('/api', '')}/${servicePovInfo?.image ? servicePovInfo.image.replace(/\\/g, "/") : ''}`}
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
            <p className="text-base">{servicePovInfo.speciality}</p>
            {/* yearsOfExperience is now a number from DB, was a string "5 Years" */}
            {servicePovInfo.yearsOfExperience > 0 && (
              <span className="border rounded-full px-3 py-1 text-sm bg-gray-100">
                {servicePovInfo.yearsOfExperience} Years Experience
              </span>
            )}
          </div>

          {/* About / Description */}
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
            {servicePovInfo.description?.length > 120 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#e36e2a] text-sm font-medium hover:underline w-fit"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          {/* Fees */}
          <div className="flex gap-2 text-lg md:text-xl">
            <span className="text-gray-600">Hourly Fees:</span>
            <span className="font-semibold">
              Rs. {servicePovInfo.fees} / hour
            </span>
          </div>

          {/* Location — built from flat fields: municipality, city, province */}
          <div className="flex flex-col">
            <span className="text-gray-600">Location:</span>
            <span className="text-md flex gap-x-1 items-center">
              <img
                className="text-gray-600 w-4"
                src={assets.LocationPinIcon}
                alt="location"
              />
              {locationString || "Location not specified"}
            </span>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="sm:ml-80 sm:pl-4 mt-8">
        <BookingSlots
          spData={servicePovInfo}
          onSlotSelect={(slot) => {
            setSelectedSlot(slot);
          }}
        />
        <button
          className="bg-[#e36e2a] text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:bg-[#c35d22]"
          onClick={() => {
            selectedSlot
              ? bookAppointment()
              : toast.error("Please select date & time.");
          }}
        >
          Book An Appointment
        </button>
      </div>

      {/* Description & Reviews Tabs */}
      <div className="mt-12 mb-8">
        <div className="border-b border-gray-200">
          <div className="flex gap-12">
            <button
              onClick={() => setShowRatings(false)}
              className={`pb-3 text-lg font-medium transition relative ${
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
              className={`pb-3 text-lg font-medium transition relative ${
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

        <div className="mt-8">
          {!showRatings ? (
            // ── DESCRIPTION TAB ──────────────────────────────────────────────
            <div className="space-y-8">
              {/* Skills & Expertise */}
              {servicePovInfo.skills?.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Skills & Expertise
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {servicePovInfo.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#e36e2a]" />
                        <span className="text-base text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Work Experience — now an array of objects from DB */}
              {servicePovInfo.experience?.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Work Experience
                  </h3>
                  <div className="space-y-3">
                    {servicePovInfo.experience.map((exp, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg px-4 py-4"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-base font-medium text-gray-900">
                            {exp.title}
                          </p>
                          {exp.years > 0 && (
                            <span className="text-sm text-gray-500">
                              {exp.years} yr{exp.years !== 1 ? "s" : ""}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#e36e2a]">{exp.company}</p>
                        {exp.desc && (
                          <p className="text-sm text-gray-600 mt-1">
                            {exp.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {servicePovInfo.certifications?.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {servicePovInfo.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-orange-50 text-[#e36e2a] border border-orange-200 text-sm px-3 py-1.5 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Highlights */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Service Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Years of experience — was a string, now a number */}
                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-4">
                    <svg
                      className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        Experience
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {servicePovInfo.yearsOfExperience
                          ? `${servicePovInfo.yearsOfExperience} Years`
                          : "Not specified"}
                      </p>
                    </div>
                  </div>

                  {/* Completed Projects */}
                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-4">
                    <svg
                      className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        Completed Projects
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {servicePovInfo.completedProjects}+ Projects
                      </p>
                    </div>
                  </div>

                  {/* Customer Rating */}
                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-4">
                    <svg
                      className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        Customer Rating
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {avgRating} ⭐ ({totalReviews} reviews)

                      </p>
                    </div>
                  </div>

                  {/* Location highlight */}
                  <div className="flex items-start gap-3 bg-gray-50 rounded-lg px-4 py-4">
                    <svg
                      className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        Service Area
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {locationString}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // ── RATINGS & REVIEWS TAB ────────────────────────────────────────
            <div className="space-y-8">
              {/* Rating Overview */}
              <div className="flex flex-col md:flex-row gap-8 pb-8 border-b border-gray-200">
                {/* Overall rating number */}
                <div className="md:w-1/3 text-center md:text-left">
                  <div className="text-7xl font-semibold text-gray-900">
                    {calculatedRating}
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(servicePovInfo.rating)
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
                  <p className="text-base text-gray-500 mt-2">
                    {totalReviews} Reviews
                  </p>
                </div>

                {/* Rating bars */}
                <div className="md:w-2/3 space-y-3">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const reviews = servicePovInfo.customerReviews || [];
                    const count = reviews.filter(
                      (r) => Math.floor(r.rating) === star,
                    ).length;
                    const percentage =
                      reviews.length > 0 ? (count / reviews.length) * 100 : 0;

                    return (
                      <div key={star} className="flex items-center gap-4">
                        <span className="text-base text-gray-600 w-8">
                          {star}★
                        </span>
                        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#e36e2a] rounded-full transition-all"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-base text-gray-500 w-16 text-right">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Add Review Section */}
              {!hasUserReviewed() ? (
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Add Your Review
                  </h3>

                  {/* Stars */}
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        onClick={() => !isSubmitting && setRating(star)}
                        className={`w-7 h-7 ${
                          isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                        } ${star <= rating ? "text-[#e36e2a]" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Input */}
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    disabled={isSubmitting}
                    placeholder="Write your experience..."
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e36e2a]"
                    rows={4}
                  />

                  {/* Button */}
                  <button
                    onClick={submitReview}
                    disabled={isSubmitting}
                    className={`mt-4 px-6 py-2 rounded-full text-sm text-white ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#e36e2a] hover:bg-[#c35d22]"
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Review"}
                  </button>
                </div>
              ) : (
                <div className="bg-green-50 p-4 rounded-lg mb-8 text-green-700 text-sm">
                  You have already reviewed this service provider.
                </div>
              )}

              {/* Individual reviews */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Customer Reviews
                </h3>

                {servicePovInfo.customerReviews?.length === 0 ? (
                  <p className="text-gray-500 text-base">
                    No reviews yet. Be the first to review!
                  </p>
                ) : (
                  <div className="space-y-6">
                    {servicePovInfo.customerReviews?.map((review, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-6 last:border-0"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
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
                        <p className="font-medium text-lg text-gray-900 mb-2">
                          {review.name}
                        </p>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <LoginPromptModal
        isOpen={showLoginPrompt}
        onClose={() => setShowLoginPrompt(false)}
        onLogin={() => {
          setShowLoginPrompt(false);
          navigate("/login");
        }}
      />

      {/* Related service providers */}
      <RelatedSP spId={povId} speciality={servicePovInfo.speciality} />
    </div>
  );
}

export default MyAppointment;
