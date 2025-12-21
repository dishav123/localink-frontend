import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import ServiceProviders from "./pages/ServiceProviders";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Login from "./AuthPages/Login";
import Register from "./AuthPages/Register";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Appointment from "./pages/Appointment"
import Services from "./pages/Services";
import Footer from "./components/Footer";
import FeaturedServices from "./pages/FeaturedServices";

export default function App() {
  const location = useLocation();
  const hideLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="mx-5 sm:mx-[8%]">
      
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/serviceproviders' element={<ServiceProviders/>} />
        <Route path='/serviceproviders/:speciality' element={<ServiceProviders/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/services/:serviceid' element={<FeaturedServices/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointments/>} />
        <Route path='/appointment/:povId' element={<Appointment/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}
