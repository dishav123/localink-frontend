import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function MyAppointments() {
  const { serviceProviders } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <p className="text-2xl font-semibold text-neutral-800 mb-5">
        My Appointments
      </p>

      <div className="flex flex-col gap-4">
        {serviceProviders.slice(0, 3).map((provider, index) => (
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
                src={provider.image}
                alt=""
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-sm text-neutral-700">
              <p className="text-base font-semibold text-neutral-900">
                {provider.name}
              </p>
              <p className="text-neutral-600">{provider.speciality}</p>

              <p className="text-neutral-800 font-medium mt-3">Address</p>
              <p className="text-xs text-neutral-600">
                {provider.address.line1}
              </p>
              <p className="text-xs text-neutral-600">
                {provider.address.line2}
              </p>

              <p className="text-xs mt-3">
                <span className="font-medium text-neutral-700">
                  Date & Time:
                </span>{" "}
                25, July, 2026
              </p>
            </div>

            {/* Actions */}
            <div className="flex sm:flex-col gap-2 sm:justify-end">
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
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointments;
