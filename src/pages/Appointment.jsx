import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedSP from "../components/AppointmentPageComponent/RelatedSP";

function MyAppointment() {
  const { povId } = useParams();
  const { serviceProviders } = useContext(AppContext);
  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [servicePovInfo, setServicePovInfo] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [spSlots, setSpSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

 const getAvailableSlots = async () => {
  setSpSlots([]);

  let today = new Date();
  let startIndex = 0;

  if (today.getHours() >= 21) {
    startIndex = 1;
  }

  for (let i = startIndex; i < startIndex + 7; i++) {
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    let endDateTime = new Date(today);
    endDateTime.setDate(today.getDate() + i);
    endDateTime.setHours(18, 0, 0, 0);

    // Set start time
    if (today.getDate()===currentDate.getDate()) {
      // Only for today
      currentDate.setHours(
        currentDate.getHours() > 8 ? currentDate.getHours() + 1 : 8
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

      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime,
      });

      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    setSpSlots((prev) => [...prev, timeSlots]);
  }
};


  useEffect(() => {
    const spInfo = serviceProviders.find((sp) => sp._id === povId);
    setServicePovInfo(spInfo);
  }, [povId, serviceProviders]);

  useEffect(() => {
    getAvailableSlots();
  }, [servicePovInfo]);

  useEffect(() => {
    // console.log(spSlots);
  }, [spSlots]);

  if (!servicePovInfo) return null;

  return (
    <div>
      <div className="w-full flex flex-col md:flex-row gap-6 p-4">
        {/* IMAGE SECTION */}
        <div className="md:w-1/4 w-full flex-1 flex items-start p-4 bg-[#e36e2a] rounded-lg">
          <div className="w-62 h-80">
            <img
              className="w-full h-full object-cover rounded-lg shadow-sm"
              src={servicePovInfo.image}
              alt={servicePovInfo.name}
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col md:w-3/4 w-full gap-4 border border-gray-300 p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold">{servicePovInfo.name}</p>
            <img className="w-5 h-5" src={assets.verifiedIcon} alt="verified" />
          </div>

          <div className="flex flex-wrap gap-3 items-center text-gray-600">
            <p className="text-base">
              {servicePovInfo.speciality} — {servicePovInfo.masterIn}
            </p>
            <span className="border rounded-full px-3 py-1 text-sm bg-gray-100">
              {servicePovInfo.experience}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 font-medium text-gray-800 text-lg">
              About <img className="w-4 h-4" src={assets.InfoIcon} alt="info" />
            </p>

            <p
              className={`text-gray-600 leading-relaxed transition-all duration-300 ${
                isExpanded ? "" : "line-clamp-4"
              }`}
            >
              {servicePovInfo.description}
            </p>

            {servicePovInfo.description.length > 120 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className=" text-[#e36e2a] text-sm font-medium hover:underline w-fit"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          <div className="flex gap-2 text-lg md:text-xl">
            <span className="text-gray-600">Hourly Fees:</span>
            <span className="font-semibold">
              Rs. {servicePovInfo.fees} / hour
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-600">Location: </span>
            <span className="text-md flex gap-x-1">
              <img
                className="text-gray-600 w-4"
                src={assets.LocationPinIcon}
                alt=""
              />{" "}
              {servicePovInfo.address.line1}
            </span>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="sm:ml-80 sm:pl-4 mt-4 font-medium text-gray-600">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {
            spSlots.length && spSlots.map((items,index)=>{
              return(
                <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-[#e36e2a] text-white':'border border-gray-200'}`} key={index}>
                  <p>{items[0] && dayOfWeek[items[0].datetime.getDay()]}</p>
                  <p>{items[0] && items[0].datetime.getDate()}</p>
                </div>
              )
            })
          }
        </div>

        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {
            spSlots.length && spSlots[slotIndex].map((item,index)=>{
              console.log(item)
              return(
                <p key={index} onClick={()=>setSlotTime(item.time)} className={`text-sm font-light shrink-0 px-5 py-2 rounded-full cursor-pointer  ${item.time===slotTime?'bg-[#e36e2a] text-white':'border border-gray-200 '} `} >{item.time}</p>
              )
            })
          }
          
        </div>

        <button className="bg-[#e36e2a] text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:bg-[#c35d22]" >Book An Appointment</button>
      </div>

      {/* Listing related service provider */}
      <RelatedSP spId={povId} speciality={servicePovInfo.speciality}/>
    </div>
  );
}

export default MyAppointment;
