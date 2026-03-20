import { createContext } from "react";
// import { serviceProviders } from "../assets/assets";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [serviceProviders, setServiceProviders] = useState([]);
 const [token, setToken] = useState(() => localStorage.getItem("token"));

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
  const value = {
    serviceProviders,
    token,
    setToken,
    backendUrl
  };

  useEffect(() => {
    getSPData();
  }, []);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
