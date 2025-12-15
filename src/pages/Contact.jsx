import { assets } from "../assets/assets";

function Contact() {
  return (
    <div className="flex flex-col gap-10">

      {/* HERO SECTION */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        {/* Background Image */}
        <img
          src={assets.ContactHero} // add image in assets
          alt="Contact"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 gap-4">
          <p className="text-2xl md:text-4xl font-semibold text-[#e36e2a]">
            CONTACT US
          </p>
          <p className="text-lg md:text-2xl font-medium text-white">
            We’re Here to Help
          </p>
          <p className="max-w-xl text-sm md:text-base text-gray-200">
            Need expert home services? Contact us anytime or leave your details and we’ll reach out.
          </p>
        </div>
      </div>

      {/* CONTACT INFO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 py-8 text-gray-600">

        {/* VISIT */}
        <div className="flex flex-col items-center gap-y-3 text-center p-6 rounded-2xl shadow-sm">
          <img className="w-16 md:w-20" src={assets.Home_icon} alt="" />
          <p className="text-xl font-medium">VISIT US</p>
          <p className="text-sm text-gray-500">
            Visit our office for direct assistance and service consultation.
          </p>
          <p className="font-semibold text-[#e36e2a]">
            Lubhu, Lalitpur-44600
          </p>
        </div>

        {/* CALL */}
        <div className="flex flex-col items-center gap-y-3 text-center p-6 rounded-2xl shadow-sm">
          <img className="w-16 md:w-20" src={assets.Phone_icon} alt="" />
          <p className="text-xl font-medium">CALL US</p>
          <p className="text-sm text-gray-500">
            Speak directly with our support team for quick help.
          </p>
          <p className="font-semibold text-[#e36e2a]">
            +977-987456123 / 01-5580203
          </p>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col items-center gap-y-3 text-center p-6 rounded-2xl shadow-sm">
          <img className="w-16 md:w-20" src={assets.Email_icon} alt="" />
          <p className="text-xl font-medium">EMAIL US</p>
          <p className="text-sm text-gray-500">
            Drop us an email and we’ll get back to you soon.
          </p>
          <p className="font-semibold text-[#e36e2a]">
            info@localink.com
          </p>
        </div>

      </div>
    </div>
  );
}

export default Contact;
