import { createContext } from "react";
// import { serviceProviders } from "../assets/assets";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_API_URL;
  const [serviceProviders, setServiceProviders] = useState([]);
  const [userData, setUserData] = useState(false);
  const [token, setToken] = useState(() => getValidToken());

  function getValidToken() {
    const token = localStorage.getItem("token");

    if (!token) return "";

    try {
      // JWT payload is the middle part, base64 encoded
      const payload = JSON.parse(atob(token.split(".")[1])); //atob decodes base64 to string, then parse JSON
      const isExpired = payload.exp * 1000 < Date.now(); // exp is in seconds, Date.now() in ms

      if (isExpired) {
        localStorage.removeItem("token"); // clear expired token immediately
        return "";
      }
      return token;
    } catch {
      // Token is malformed
      localStorage.removeItem("token");
      return "";
    }
  }

  const getSPData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/serviceprovider/list");
      if (data.success) {
        setServiceProviders(data.serviceProviders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/auth/me`, {
        headers: { token },
      });
      if (data) {
        setUserData(data.userData);
      } else {
        toast.error("Session Expired, Please Login!");
      }
    } catch (error) {
      toast.error("Session Expired, Please Login!");
    }
  };

  const value = {
    serviceProviders,
    getSPData,
    token,
    setToken,
    backendUrl,
    setUserData,
    userData,
    loadUserProfileData,
  };

  useEffect(() => {
    getSPData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
