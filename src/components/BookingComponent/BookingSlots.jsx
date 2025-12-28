import { useEffect, useState } from "react";

function BookingSlots({ onSlotSelect }) {
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [spSlots, setSpSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const getAvailableSlots = async () => {
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
          currentDate.getHours() > 8 ? currentDate.getHours() + 1 : 8
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(8, 0, 0, 0);
      }

      let timeSlots = [];

      while (currentDate < endDateTime) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setSpSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, []);

  useEffect(() => {
    if (slotTime && onSlotSelect) {
      onSlotSelect({
        date: spSlots[slotIndex]?.[0]?.datetime,
        time: slotTime,
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
