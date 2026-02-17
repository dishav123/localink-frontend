import { useState } from "react";
import { useNavigate } from "react-router";
import { assets } from "../assets/assets";
import axios from "../api/axios";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateUsername = (name) => {
    if (!name) {
      setUsernameError("Username is required");
      return false;
    }
    if (name.length < 3) {
      setUsernameError("Username must be at least 3 characters");
      return false;
    }
    setUsernameError("");
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

  const validatePhone = (phone) => {
    if (!phone) {
      setPhoneError("Phone number is required");
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

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (usernameError) {
      validateUsername(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) {
      validateEmail(value);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setContactNumber(value);
    if (phoneError) {
      validatePhone(value);
    }
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(contactNumber);

    const formData = {
      name: username,
      email: email,
      phoneNum: contactNumber,
    };

  
    if (isUsernameValid && isEmailValid && isPhoneValid) {
        await axios.post("/auth/register",formData)
    .then((response) => {
      console.log("Registration successful:", response.data);
    })
    .catch((error) => {
      console.error("There was an error registering!", error);
    });
      navigate("/otp-page", { state: formData });
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
              <div className="flex flex-col gap-1">
                <div className="relative">
                  <input
                    className={`w-full border ${usernameError ? 'border-red-500' : 'border-gray-300'} rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 ${usernameError ? 'focus:ring-red-500/40' : 'focus:ring-[#e36e2a]/40'} peer placeholder:text-gray-400`}
                    placeholder={username ? "Eg: John Doe" : ""}
                    value={username}
                    onChange={handleUsernameChange}
                    onBlur={() => validateUsername(username)}
                    id="username-input"
                  />
                  <label
                    htmlFor="username-input"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      username
                        ? `text-xs -top-2 bg-white px-1 ${usernameError ? 'text-red-500' : 'text-[#e36e2a]'}`
                        : `text-sm top-3 text-gray-500 peer-focus:text-xs peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 ${usernameError ? 'peer-focus:text-red-500' : 'peer-focus:text-[#e36e2a]'}`
                    }`}
                  >
                    Username
                  </label>
                </div>
                {usernameError && (
                  <p className="text-xs text-red-500 px-1">{usernameError}</p>
                )}
              </div>

              {/* Email */}
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

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <div className={`relative border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-xl focus-within:ring-2 ${phoneError ? 'focus-within:ring-red-500/40' : 'focus-within:ring-[#e36e2a]/40'}`}>
                  <div className="flex items-center px-3 py-3">
                    <span className="text-sm text-gray-500 mr-2 select-none">
                      +977
                    </span>
                    <input
                      type="tel"
                      className="flex-1 text-sm outline-none peer placeholder:text-gray-400"
                      placeholder={contactNumber ? "9841234567" : ""}
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
                      Phone Number
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
    </form>
  );
}

export default Register;