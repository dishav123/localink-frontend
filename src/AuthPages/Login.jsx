import { useState } from "react";
import { useNavigate } from "react-router";
import { assets } from "../assets/assets";
import axios from "../api/axios";

function Login() {
  const [phoneLogin, setPhoneLogin] = useState(false);
  const [email, setEmail] = useState();
  const [contactNumber, setContactNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validatePhone = (phone) => {
    if (!phone) {
      setPhoneError("Contact number is required");
      return false;
    }
    const phoneRegex = /^[9][6-9]\d{8}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid Nepali mobile number (e.g., 9841234567)");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateEmail = (emailValue) => {
    if (!emailValue) {
      setEmailError("Email address is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    if (phoneLogin) {
      if (validatePhone(contactNumber)) {
        navigate('/otp-page');
      }
    } else {
      if (validateEmail(email)) {
        try{
          await axios.post('/auth/login', { email });
        }catch(error){
          console.error("Login error:", error);
        }
        navigate('/otp-page', {state: { email }});
      }
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setContactNumber(value);
    if (phoneError) {
      validatePhone(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) {
      validateEmail(value);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Top-left back button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute top-5 left-5 w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition"
          aria-label="Go back"
        >
          <img className="w-8" src={assets.BackArrow} alt="" />
        </button>

        <div className="w-full max-w-md bg-white rounded-3xl px-8 py-10">
          <div className="flex flex-col items-center gap-4">
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <img src={assets.logo} alt="" className="w-20" />
              <p className=" text-gray-500 text-center text-3xl">
                Unlock the booking feature,{" "}
                <span className="font-bold bg-linear-to-r from-[#e36e2a] to-[#f4a261] bg-clip-text text-transparent">
                  LOGIN.
                </span>
              </p>
            </div>

            {/* Inputs */}
            {phoneLogin ? (
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-1">
                  <div className={`relative border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-xl focus-within:ring-2 ${phoneError ? 'focus-within:ring-red-500/40' : 'focus-within:ring-[#e36e2a]/40'}`}>
                    <div className="flex items-center px-3 py-3">
                      <span className="text-sm text-gray-500 mr-2 select-none">
                        +977
                      </span>
                      <input
                        type="tel"
                        className="flex-1 text-sm outline-none peer placeholder:text-gray-400"
                        placeholder={contactNumber ? "984123xxx" : ""}
                        value={contactNumber}
                        onChange={handlePhoneChange}
                        onBlur={() => validatePhone(contactNumber)}
                        id="phone-input"
                        maxLength={10}
                      />
                      <label
                        htmlFor="phone-input"
                        className={`absolute left-12 transition-all duration-200 pointer-events-none ${
                          contactNumber
                            ? `text-xs -top-2 bg-white px-1 ${phoneError ? 'text-red-500' : 'text-[#e36e2a]'}`
                            : `text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 ${phoneError ? 'peer-focus:text-red-500' : 'peer-focus:text-[#e36e2a]'}`
                        }`}
                      >
                        Contact Number
                      </label>
                    </div>
                  </div>
                  {phoneError && (
                    <p className="text-xs text-red-500 px-1">{phoneError}</p>
                  )}
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#e36e2a] py-3 rounded-xl text-white font-medium hover:bg-[#c85c1c] transition"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-1">
                  <div className="relative">
                    <input
                      className={`w-full border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ${emailError ? 'focus:ring-red-500/40' : 'focus:ring-[#e36e2a]/40'} peer placeholder:text-gray-400`}
                      type="email"
                      placeholder={email ? "xxxx@gmail.com" : ""}
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={() => validateEmail(email)}
                      id="email-input"
                    />
                    <label
                      htmlFor="email-input"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        email
                          ? `text-xs -top-2 bg-white px-1 ${emailError ? 'text-red-500' : 'text-[#e36e2a]'}`
                          : `text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 ${emailError ? 'peer-focus:text-red-500' : 'peer-focus:text-[#e36e2a]'}`
                      }`}
                    >
                      Email Address
                    </label>
                  </div>
                  {emailError && (
                    <p className="text-xs text-red-500 px-1">{emailError}</p>
                  )}
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#e36e2a] py-3 rounded-xl text-white font-medium hover:bg-[#c85c1c] transition"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Options */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center w-full my-2">
                <div className="flex-1 h-px bg-gray-300" />
                <p className="px-3 text-xs text-gray-400">or continue with</p>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              {phoneLogin ? (
                <button
                  type="button"
                  className=" flex justify-center items-center gap-x-2 w-full py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-50 transition text-gray-500"
                  onClick={() => {
                    setPhoneLogin(false);
                    setPhoneError("");
                  }}
                >
                  <img className="w-5 " src={assets.MailIcon} alt="" />
                  Use Email Address
                </button>
              ) : (
                <button
                  type="button"
                  className=" flex justify-center gap-x-2 w-full py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-50 transition text-gray-500 "
                  onClick={() => {
                    setPhoneLogin(true);
                    setEmailError("");
                  }}
                >
                  <img className="w-5" src={assets.PhoneIcon} alt="" />
                  Use Phone Number
                </button>
              )}
            </div>

            <div>
              <a
                href="/register"
                className="text-sm text-[#e36e2a] hover:text-[#ef5f0c]"
              >
                Don't have an account,{" "}
                <span className="underline">Register</span>
              </a>
            </div>

            {/* Info */}
            <p className="text-center text-xs text-gray-400 leading-relaxed">
              By continuing, you confirm that you have read, understood, and
              agree to our{" "}
              <span className="underline cursor-pointer">Terms of Service</span>{" "}
              and{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </div>

        {/* Provider Login Options - Right Bottom */}
        <div className="absolute right-1 bottom-80 flex flex-col gap-y-2">
          {/* Provider Login */}
          <div className="group relative">
            <button
              type="button"
              className="w-14 h-14 bg-gray-100 flex items-center justify-center rounded-2xl transition-all duration-300 hover:bg-[#e36e2a] shadow-sm hover:shadow-md"
              onClick={() => navigate("/provider-login")}
            >
              <img 
                src={assets.ProviderIcon} 
                alt="Provider" 
                className="w-8 h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </button>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                Provider Login
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;