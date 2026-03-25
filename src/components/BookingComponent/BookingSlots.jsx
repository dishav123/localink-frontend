import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

function BookingSlots({ onSlotSelect, spData }) {
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [spSlots, setSpSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const getAvailableSlots = async () => {
    console.log(spData)
    setSpSlots([]);

    let today = new Date();
    let startIndex = 0;

    if (today.getHours() >= 22) {
      startIndex = 1;
    }

    for (let i = startIndex; i < startIndex + 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endDateTime = new Date(today);
      endDateTime.setDate(today.getDate() + i);
      endDateTime.setHours(18, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 8 ? currentDate.getHours() + 1 : 8,
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(8, 0, 0, 0);
      }

      let timeSlots = [];

      while (currentDate < endDateTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        const slotDate = day + "/" + month + "/" + year;

        const bookedTimes = (() => {
          const sb = spData?.slots_booked;
          if (!sb) return [];
          if (typeof sb.get === "function") return sb.get(slotDate) || [];
          if (typeof sb === "object") return sb[slotDate] || [];
          return [];
        })();

        const isSlotAvailable = !bookedTimes.includes(formattedTime);

        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setSpSlots((prev) => [...prev, timeSlots]);
    }
  };

useEffect(() => {
  if (spData) {
    getAvailableSlots();
  }
}, [spData]);

  useEffect(() => {
    if (slotTime && onSlotSelect) {
      const selected = spSlots[slotIndex]?.find(
        (item) => item.time === slotTime,
      );

      onSlotSelect({
        date: selected?.datetime,
        time: selected?.time,
      });
    }
  }, [slotTime]);

  return (
    <div className="font-medium text-gray-600">
      <p>Booking Slots</p>

      {/* Dates */}
      <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
        {spSlots.length &&
          spSlots.map((items, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer transition
                ${
                  slotIndex === index
                    ? "bg-[#e36e2a] text-white"
                    : "border border-gray-200"
                }`}
            >
              <p>{items[0] && dayOfWeek[items[0].datetime.getDay()]}</p>
              <p>{items[0] && items[0].datetime.getDate()}</p>
            </div>
          ))}
      </div>

      {/* Time */}
      <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
        {spSlots.length &&
          spSlots[slotIndex]?.map((item, index) => (
            <p
              key={index}
              onClick={() => setSlotTime(item.time)}
              className={`text-sm font-light shrink-0 px-5 py-2 rounded-full cursor-pointer transition
                ${
                  item.time === slotTime
                    ? "bg-[#e36e2a] text-white"
                    : "border border-gray-200"
                }`}
            >
              {item.time}
            </p>
          ))}
      </div>
    </div>
  );
}

export default BookingSlots;
