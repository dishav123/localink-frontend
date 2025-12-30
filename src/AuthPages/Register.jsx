import { useNavigate } from "react-router";
import { assets } from "../assets/assets";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Top-left back button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition"
        aria-label="Go back"
      >
        <img className="w-8" src={assets.BackArrow} alt="" />
      </button>
      <div className="w-full max-w-md bg-white rounded-3xl px-8 py-10">
        <div className="flex flex-col items-center gap-3">
          {/* Header */}
          <div className="flex flex-col items-center gap-2">
            <img src={assets.logo} alt="" className="w-20" />
            <p className="text-gray-500 text-center text-3xl">
              Create your account,{" "}
              <span className="font-bold bg-linear-to-r from-[#e36e2a] to-[#f4a261] bg-clip-text text-transparent">
                REGISTER.
              </span>
            </p>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-2 w-full">
            {/* Username */}
            <div className="relative">
              <input
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#e36e2a]/40 peer placeholder:text-gray-400"
                placeholder=""
                id="username-input"
              />
              <label
                htmlFor="username-input"
                className="absolute left-4 transition-all duration-200 pointer-events-none text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#e36e2a]"
              >
                Username
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#e36e2a]/40 peer placeholder:text-gray-400"
                type="email"
                placeholder=""
                id="email-input"
              />
              <label
                htmlFor="email-input"
                className="absolute left-4 transition-all duration-200 pointer-events-none text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#e36e2a]"
              >
                Email Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-[#e36e2a]/40">
              <div className="flex items-center px-3 py-3">
                <span className="text-sm text-gray-500 mr-2 select-none">
                  +977
                </span>
                <input
                  type="tel"
                  className="flex-1 text-sm outline-none peer placeholder:text-gray-400"
                  placeholder=""
                  id="phone-input"
                />
                <label
                  htmlFor="phone-input"
                  className="absolute left-12 transition-all duration-200 pointer-events-none text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#e36e2a]"
                >
                  Phone Number
                </label>
              </div>
            </div>

            <button className="w-full bg-[#e36e2a] py-3 rounded-xl text-white font-medium hover:bg-[#c85c1c] transition">
              Create Account
            </button>
          </div>

          {/* Login redirect */}
          <div>
            <a
              href="/login"
              className="text-sm text-[#e36e2a] hover:text-[#ef5f0c]"
            >
              Already have an account? <span className="underline">Login</span>
            </a>
          </div>

          {/* Info */}
          <p className="text-center text-xs text-gray-400 leading-relaxed">
            By creating an account, you agree to our{" "}
            <span className="underline cursor-pointer">Terms of Service</span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
