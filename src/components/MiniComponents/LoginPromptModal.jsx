import { useState } from "react";
import { useNavigate } from "react-router";

function LoginPromptModal({ isOpen, onClose, onLogin }) {
  if (!isOpen) return null;

  return (
    // Backdrop — clicking it closes the modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      {/* Modal box — stop clicks from bubbling to backdrop */}
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[#e36e2a]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m0 0v2m0-2h2m-2 0H10m2-9a3 3 0 100 6 3 3 0 000-6zm6 9a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Login Required
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            You need to be logged in to book an appointment.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Cancel */}
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          {/* Go to login */}
          <button
            onClick={onLogin}
            className="flex-1 py-2.5 rounded-xl bg-[#e36e2a] text-white text-sm font-medium hover:bg-[#c85c1c] transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Usage example inside your booking component ────────────────────────────
// Copy LoginPromptModal above into its own file, then use it like this:
function BookingExample({ token, selectedSlot }) {
  const navigate = useNavigate();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const bookAppointment = async () => {
    if (!token) {
      setShowLoginPrompt(true); // show modal instead of toast
      return;
    }
    // ...rest of your booking logic
    console.log("Slots booked date & time", selectedSlot);
  };

  return (
    <>
      {/* Your existing book button */}
      <button
        onClick={bookAppointment}
        className="bg-[#e36e2a] text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:bg-[#c35d22]"
      >
        Book An Appointment
      </button>

      {/* Login prompt modal */}
      <LoginPromptModal
        isOpen={showLoginPrompt}
        onClose={() => setShowLoginPrompt(false)}
        onLogin={() => {
          setShowLoginPrompt(false);
          navigate("/login");
        }}
      />
    </>
  );
}

export { LoginPromptModal };
export default BookingExample;