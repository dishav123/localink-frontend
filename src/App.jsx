import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ServiceProviders from "./pages/ServiceProviders";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Login from "./pages/Login";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Appointment from "./pages/Appointment"
import Services from "./pages/Services";

export default function App() {
  return (
    
    <div className="mx-5 sm:mx-[8%]">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/servicerproviders' element={<ServiceProviders/>} />
        <Route path='/servicerproviders/:speciality' element={<ServiceProviders/>} />
        <Route path='services' element={<Services/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointments/>} />
        <Route path='/appointment/:povId' element={<Appointment/>} />
      </Routes>
    </div>
  );
}
