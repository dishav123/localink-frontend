import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

function MyAppointments() {
  const { backendUrl, token, getSPData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("/");
    return dateArray[0] + " " + months[dateArray[1]] + " " + dateArray[2];
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/user/appointments`, {
        headers: { token },
      });
      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/user/cancel-appointment`,
        { appointmentId },
        { headers: { token } },
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getSPData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <p className="text-2xl font-semibold text-neutral-800 mb-5">
        My Appointments
      </p>

      <div className="flex flex-col gap-4">
        {appointments.slice(0, 10).map((provider, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              p-4 sm:p-5
              shadow-sm
              hover:shadow-md
              transition
              flex flex-col sm:flex-row
              gap-4
            "
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                className="w-24 h-32 object-cover rounded-xl bg-[#e36e2a]/90"
                src={`http://localhost:3000/${provider.spData.image.replace(/\\/g, "/")}`}
                alt=""
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-sm text-neutral-700">
              <p className="text-base font-semibold text-neutral-900">
                {provider.spData.name}
              </p>
              <p className="text-neutral-600">{provider.spData.speciality}</p>

              <p className="text-neutral-800 font-medium mt-3">Address</p>
              <p className="text-xs text-neutral-600">{provider.spData.city}</p>
              <p className="text-xs text-neutral-600">
                {provider.spData.municipality} - {provider.spData.wardNo}
              </p>

              <p className="text-xs mt-3">
                <span className="font-medium text-neutral-700">
                  Date & Time:
                </span>{" "}
                {slotDateFormat(provider.slotDate)} | {provider.slotTime}
              </p>
            </div>

            {/* Actions */}
            <div className="flex sm:flex-col gap-2 sm:justify-end">
              {!provider.cancelled && (
                <button
                  className="
                  text-sm
                  px-4 py-2
                  rounded-full
                  border
                  text-neutral-700
                  hover:bg-[#e36e2a]
                  hover:text-white
                  transition
                "
                >
                  Pay Online
                </button>
              )}

              {!provider.cancelled && (
                <button
                  className="
                  text-sm
                  px-4 py-2
                  rounded-full
                  border
                  text-neutral-500
                  hover:bg-red-700
                  hover:text-white
                  transition
                "
                  onClick={() => cancelAppointment(provider._id)}
                >
                  Cancel
                </button>
              )}

              {provider.cancelled && <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">Appointment Cancelled</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointments;
