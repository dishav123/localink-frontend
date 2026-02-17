import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "../api/axios";
import { assets } from "../assets/assets";

function OtpPage() {
const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location=useLocation();

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, i) => {
      if (i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);

    // Focus last filled input or last input
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleResend = () => {
    setTimer(60);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      await axios.post("/auth/verify-otp", { email: location.state?.email, otp: otpValue })
          .then((response) => {
            console.log("Otp Verification successful", response.data);
          })
          .catch((error) => {
            console.error("There was an error verifying OTP!", error);
          });
        navigate("/");
    }
  };

  const isComplete = otp.every(digit => digit !== "");

  return (
    <div className="min-h-screen flex items-center justify-center relative ">
      {/* Top-left back button */}
      <button
        onClick={() => navigate("/login")}
        className="absolute top-5 left-5 w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition bg-white"
        aria-label="Go back"
      >
        <img className="w-8" src={assets.BackArrow} alt="" />
      </button>

      <div className="w-full max-w-md bg-white rounded-3xl px-8 py-10 ">
        <div className="flex flex-col items-center gap-6">
          {/* Header */}
          <div className="flex flex-col items-center gap-2">
            <img src={assets.logo} alt="" className="w-20" />
            <h1 className="text-3xl text-gray-500 text-center">
              Verify your{" "}
              <span className="font-bold bg-linear-to-r from-[#e36e2a] to-[#f4a261] bg-clip-text text-transparent">
                Identity
              </span>
            </h1>
            <p className="text-sm text-gray-400 text-center mt-2">
              We've sent a 6-digit code to your Phone number/Email
              <br />
              
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="flex gap-3 w-full justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-xl outline-none focus:border-[#e36e2a] focus:ring-2 focus:ring-[#e36e2a]/20 transition"
              />
            ))}
          </div>

          {/* Timer and Resend */}
          <div className="flex flex-col items-center gap-2 w-full">
            {timer > 0 ? (
              <p className="text-sm text-gray-500">
                Resend code in{" "}
                <span className="font-semibold text-[#e36e2a]">
                  {String(Math.floor(timer / 60)).padStart(2, "0")}:
                  {String(timer % 60).padStart(2, "0")}
                </span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-sm text-[#e36e2a] hover:text-[#c85c1c] font-medium underline"
              >
                Resend Code
              </button>
            )}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleSubmit}
            disabled={!isComplete}
            className={`w-full py-3 rounded-xl text-white font-medium transition ${
              isComplete
                ? "bg-[#e36e2a] hover:bg-[#c85c1c]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Verify & Continue
          </button>

          {/* Help Text */}
          <p className="text-center text-xs text-gray-400 leading-relaxed">
            Didn't receive the code?{" "}
            <span className="text-[#e36e2a] cursor-pointer hover:underline">
              Check your spam folder
            </span>{" "}
            or contact support
          </p>

          {/* Security Notice */}
          <div className="flex items-start gap-2 bg-orange-50 border border-orange-200 rounded-xl p-3 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-[#e36e2a] flex-shrink-0 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p className="text-xs text-gray-600">
              For your security, never share this code with anyone. Our team will never ask for your OTP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;