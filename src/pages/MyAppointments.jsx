import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function MyAppointments() {
  const { backendUrl, token, getSPData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const slotDateFormat = (slotDate) => {
    const [day, month, year] = slotDate.split("/");
    return `${day} ${months[parseInt(month)]} ${year}`;
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/user/appointments`, {
        headers: { token },
      });
      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/user/cancel-appointment`,
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getSPData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) getUserAppointments();
  }, [token]);

  const getStatus = (appt) => {
    if (appt.cancelled) return {
      label: "Cancelled",
      textColor: "text-red-500",
      bg: "bg-red-50",
      border: "border-red-200",
      dot: "bg-red-400",
      accent: "bg-red-500",
    };
    if (appt.isCompleted) return {
      label: "Completed",
      textColor: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      dot: "bg-emerald-400",
      accent: "bg-emerald-500",
    };
    if (appt.payment) return {
      label: "Paid",
      textColor: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-200",
      dot: "bg-sky-400",
      accent: "bg-sky-500",
    };
    return {
      label: "Upcoming",
      textColor: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      dot: "bg-amber-400",
      accent: "bg-[#e36e2a]",
    };
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-800">My Appointments</h1>
        <div className="mt-1.5 w-10 h-0.5 bg-[#e36e2a] rounded-full" />
        <p className="mt-1.5 text-sm text-neutral-400">
          {appointments.length} booking{appointments.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Empty state */}
      {appointments.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-neutral-300">
          <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <p className="text-sm">No appointments booked yet.</p>
        </div>
      )}

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {appointments.slice(0, 10).map((appt, index) => {
          const status = getStatus(appt);
          const sp = appt.spData;

          return (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 ${appt.cancelled ? "opacity-70" : ""}`}
            >
              {/* Left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${status.accent}`} />

              <div className="flex flex-col sm:flex-row gap-4 pl-5 pr-4 py-4">

                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    className="w-20 h-24 object-cover rounded-xl bg-orange-100"
                    src={`${import.meta.env.VITE_API_URL.replace('/api', '')}/${sp.image.replace(/\\\/g, "/")}`}
                    alt={sp.name}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  {/* Name + badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <p className="text-base font-semibold text-neutral-900">{sp.name}</p>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${status.bg} ${status.textColor} ${status.border}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                      {status.label}
                    </span>
                  </div>

                  {/* Speciality */}
                  <p className="text-xs font-medium tracking-widest uppercase text-[#e36e2a] mb-3">
                    {sp.speciality}
                  </p>

                  {/* Meta grid */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
                    <div>
                      <p className="text-neutral-400 uppercase tracking-wider text-[10px] font-semibold mb-0.5">Date & Time</p>
                      <p className="text-neutral-700">{slotDateFormat(appt.slotDate)} · {appt.slotTime}</p>
                    </div>
                    <div>
                      <p className="text-neutral-400 uppercase tracking-wider text-[10px] font-semibold mb-0.5">Location</p>
                      <p className="text-neutral-700">{sp.municipality}, {sp.city}</p>
                    </div>
                    <div>
                      <p className="text-neutral-400 uppercase tracking-wider text-[10px] font-semibold mb-0.5">Experience</p>
                      <p className="text-neutral-700">{sp.yearsOfExperience} yrs · {sp.completedProjects} projects</p>
                    </div>
                    <div>
                      <p className="text-neutral-400 uppercase tracking-wider text-[10px] font-semibold mb-0.5">Contact</p>
                      <p className="text-neutral-700">{sp.phone}</p>
                    </div>
                  </div>

                  {/* Skill chips */}
                  {sp.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {sp.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-100 font-medium"
                        >
                          {skill.replace(/"/g, "")}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:min-w-[120px] border-t sm:border-t-0 border-neutral-100 pt-3 sm:pt-0">
                  {/* Fee */}
                  <div className="text-right">
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Service Fee</p>
                    <p className="text-lg font-semibold text-neutral-800">Rs. {appt.amount}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex sm:flex-col gap-2">
                    {!appt.cancelled && !appt.isCompleted && (
                      <>
                        <button className="text-xs px-4 py-2 rounded-full bg-[#e36e2a] text-white font-medium hover:bg-[#c95c20] transition-colors duration-150 shadow-sm hover:shadow">
                          Pay Online
                        </button>
                        <button
                          className="text-xs px-4 py-2 rounded-full border border-neutral-200 text-neutral-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors duration-150"
                          onClick={() => cancelAppointment(appt._id)}
                        >
                          Cancel
                        </button>
                      </>
                    )}

                    {appt.cancelled && (
                      <span className="text-xs px-3 py-1.5 rounded-full bg-red-50 text-red-400 border border-red-200 cursor-default">
                        Cancelled
                      </span>
                    )}

                    {appt.isCompleted && !appt.cancelled && (
                      <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-default">
                        ✓ Completed
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyAppointments;