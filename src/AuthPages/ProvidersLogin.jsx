import { useState } from "react";
import { useNavigate } from "react-router";
import { assets } from "../assets/assets";

function ProviderLogin() {
  const [phoneLogin, setPhoneLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form>
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
                Welcome to Provider's Club,{" "}
                <span className="font-bold bg-linear-to-r from-[#e36e2a] to-[#f4a261] bg-clip-text text-transparent">
                  LOGIN.
                </span>
              </p>
            </div>

            {/* Inputs */}
            {phoneLogin ? (
              <div className="flex flex-col gap-3 w-full">
                <div className="relative border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-[#e36e2a]/40">
                  <div className="flex items-center px-3 py-3">
                    <span className="text-sm text-gray-500 mr-2 select-none">
                      +977
                    </span>
                    <input
                      type="tel"
                      className="flex-1 text-sm outline-none peer placeholder:text-gray-400"
                      placeholder={contactNumber ? "984123xxx" : ""}
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      id="phone-input"
                    />
                    <label
                      htmlFor="phone-input"
                      className={`absolute left-12 transition-all duration-200 pointer-events-none ${
                        contactNumber
                          ? "text-xs -top-2 bg-white px-1 text-[#e36e2a]"
                          : "text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#e36e2a]"
                      }`}
                    >
                      Contact Number
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-[#e36e2a]/40 peer placeholder:text-gray-400"
                    placeholder={password ? "••••••••" : ""}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password-input"
                  />
                  <label
                    htmlFor="password-input"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      password
                        ? "text-xs -top-2 bg-white px-1 text-[#e36e2a]"
                        : "text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#e36e2a]"
                    }`}
                  >
                    Provider Passcode
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
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
                <div className="relative">
                  <input
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#e36e2a]/40 peer placeholder:text-gray-400"
                    type="email"
                    placeholder={email ? "xxxx@gmail.com" : ""}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email-input"
                  />
                  <label
                    htmlFor="email-input"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      email
                        ? "text-xs -top-2 bg-white px-1 text-[#e36e2a]"
                        : "text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#e36e2a]"
                    }`}
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-[#e36e2a]/40 peer placeholder:text-gray-400"
                    placeholder={password ? "••••••••" : ""}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password-input-email"
                  />
                  <label
                    htmlFor="password-input-email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      password
                        ? "text-xs -top-2 bg-white px-1 text-[#e36e2a]"
                        : "text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#e36e2a]"
                    }`}
                  >
                    Provider Passcode
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
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
                  onClick={() => setPhoneLogin(false)}
                >
                  <img className="w-5 " src={assets.MailIcon} alt="" />
                  Use Email Address
                </button>
              ) : (
                <button
                  type="button"
                  className=" flex justify-center gap-x-2 w-full py-3 border border-gray-300 rounded-xl text-sm hover:bg-gray-50 transition text-gray-500 "
                  onClick={() => setPhoneLogin(true)}
                >
                  <img className="w-5" src={assets.PhoneIcon} alt="" />
                  Use Phone Number
                </button>
              )}
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
      </div>
    </form>
  );
}

export default ProviderLogin;