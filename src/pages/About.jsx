import { assets } from "../assets/assets";

function About() {
  return (
    <div className="px-4 md:px-10">

      {/* About Intro */}
      <div className="flex flex-col md:flex-row gap-10 items-start my-10">
        <div className="rounded-2xl overflow-hidden w-full md:w-1/5 hidden md:block">
          <img src={assets.AboutPage2} alt="About Loca-link" />
        </div>

        <div className="flex flex-col gap-y-5 text-gray-600 rounded-2xl px-2 md:px-5 py-3 text-sm md:text-base w-full md:w-4/5">
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">About Us</h1>
          <p className="text-gray-500 mt-1 text-sm">Building meaningful solutions that empower everyday users</p>
        </div>
          <p>
            Loca-link is a web-based platform designed to modernize the way people
            find and book home service providers in Nepal.
          </p>
          <p>
            It offers a secure, location-based service booking solution using
            OpenStreetMap (OSM), allowing users to find verified providers nearby,
            check availability, and book services easily.
          </p>
          <p>
            To ensure transparency and trust, all service providers go through a
            verification process and receive verified badges upon approval.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-6 py-8 bg-[#e36e2a] rounded-2xl text-white text-center">
        <div>
          <p className="text-3xl md:text-4xl font-semibold">95%</p>
          <p className="text-sm leading-4 text-gray-200">
            Customer Satisfaction
          </p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-semibold">300+</p>
          <p className="text-sm leading-4 text-gray-200">
            Bookings Completed
          </p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-semibold">100+</p>
          <p className="text-sm leading-4 text-gray-200">
            Service Providers
          </p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-semibold">100+</p>
          <p className="text-sm leading-4 text-gray-200">
            Verified Professionals
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-12 px-2 md:px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 text-2xl md:text-4xl font-medium">
            Strengthening Local Connections Through Technology
          </div>
          <div className="w-full md:w-1/2 text-sm text-gray-500">
            Our goal is to replace unreliable word-of-mouth booking with a
            technology-driven, transparent, and trustworthy platform.
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {[
            {
              title: "Location-Based Service Discovery",
              desc: "Find nearby service providers quickly based on your location.",
              highlight: true,
            },
            {
              title: "Manage Bookings & Build Credibility",
              desc: "Providers manage bookings and build trust through reviews.",
            },
            {
              title: "User-Friendly Booking Experience",
              desc: "Book services easily through a simple and intuitive interface.",
            },
            {
              title: "Scalable Digital Solution",
              desc: "Designed to grow with increasing users and services.",
            },
            {
              title: "Secure and Verified Platform",
              desc: "Only verified providers operate, ensuring safety and trust.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-lg px-4 py-4 flex flex-col gap-y-2 ${
                item.highlight
                  ? "bg-[#e36e2a] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-orange-300"></div>
              <p className="text-lg font-medium mt-3">{item.title}</p>
              <p className="text-sm leading-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
