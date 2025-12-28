import { useState } from "react";
import { useNavigate } from "react-router";
import { assets } from "../assets/assets";

function Login() {
  const [phoneLogin, setPhoneLogin] = useState(true);
  const [email,setEmail] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
  }

  return (
    <form> 
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
              <label className="text-sm text-gray-500">Phone</label>
              <div className="flex items-center border border-gray-300 rounded-xl px-3 py-3 focus-within:ring-2 focus-within:ring-[#e36e2a]/40">
                <span className="text-sm text-gray-500 mr-2 select-none">
                  +977
                </span>
                <input
                  type="tel"
                  className="flex-1 text-sm outline-none"
                  placeholder="Contact Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <button className="w-full bg-[#e36e2a] py-3 rounded-xl text-white font-medium hover:bg-[#c85c1c] transition">
                Continue
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 w-full">
              <label className="text-sm text-gray-500">Email Address</label>
              <input
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#e36e2a]/40"
                placeholder="Mailing Address"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="w-full bg-[#e36e2a] py-3 rounded-xl text-white font-medium hover:bg-[#c85c1c] transition">
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

          <div>
            <a
              href="/register"
              className="text-sm text-[#e36e2a] hover:text-[#ef5f0c]"
            >
              Don't have an account, <span className="underline">Register</span>
            </a>
          </div>

          {/* Info */}
          <p className="text-center text-xs text-gray-400 leading-relaxed">
            By continuing, you confirm that you have read, understood, and agree
            to our{" "}
            <span className="underline cursor-pointer">Terms of Service</span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
    </form>
  );
}

export default Login;
