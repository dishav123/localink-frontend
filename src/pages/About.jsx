import { assets } from "../assets/assets";

const features = [
  {
    title: "Location-based service discovery",
    desc: "Find nearby service providers quickly based on your real-time location.",
    highlight: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e36e2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      </svg>
    ),
  },
  {
    title: "Manage bookings & build credibility",
    desc: "Providers manage bookings and earn trust through verified reviews.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e36e2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: "User-friendly booking experience",
    desc: "Book services easily through a simple, intuitive interface.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e36e2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    title: "Scalable digital solution",
    desc: "Designed to grow effortlessly with increasing users and services.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e36e2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Secure and verified platform",
    desc: "Only verified providers operate, ensuring safety and trust at every booking.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e36e2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const stats = [
  { num: "95%",  label: "Customer satisfaction" },
  { num: "300+", label: "Bookings completed" },
  { num: "100+", label: "Service providers" },
  { num: "100+", label: "Verified professionals" },
];

function About() {
  return (
    <div className="px-4 md:px-10 max-w-5xl mx-auto pb-16">

      {/* ── Hero ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center py-12 border-b border-gray-100">
        <div>
          <span className="inline-block bg-orange-50 text-[#993C1D] text-[11px] font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            About Loca-link
          </span>
          <h1 className="text-3xl sm:text-4xl font-medium leading-tight text-gray-900 mb-4">
            Connecting you to <span className="text-[#e36e2a]">trusted</span> local services
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Loca-link modernizes how people find and book home service providers in Nepal — with a secure,
            location-based platform using OpenStreetMap, verified providers, and a seamless booking experience.
          </p>
        </div>

        <div className="hidden sm:flex bg-orange-50 rounded-2xl aspect-[4/3] items-center justify-center overflow-hidden">
          <img src={assets.AboutPage2} alt="About Loca-link" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden my-10">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center py-6 px-4 text-center bg-white">
            <p className="text-3xl sm:text-4xl font-medium text-[#e36e2a] leading-none mb-1">{s.num}</p>
            <p className="text-xs text-gray-400 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── Mission ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-10 border-b border-gray-100 mb-10">
        <div>
          <p className="text-[11px] font-medium text-[#e36e2a] uppercase tracking-widest mb-2">Our mission</p>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-900 leading-snug">
            Strengthening local connections through technology
          </h2>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-gray-500 leading-relaxed">
            Our goal is to replace unreliable word-of-mouth booking with a technology-driven, transparent,
            and trustworthy platform — making quality home services accessible to everyone in Nepal.
          </p>
        </div>
      </div>

      {/* ── Features ── */}
      <div>
        <p className="text-[11px] font-medium text-[#e36e2a] uppercase tracking-widest mb-5">What we offer</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-5 flex flex-col gap-3 transition-colors ${
                f.highlight
                  ? "bg-[#e36e2a] border-[#e36e2a]"
                  : "bg-white border-gray-100 hover:border-[#e36e2a]"
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                f.highlight ? "bg-white/20" : "bg-orange-50"
              }`}>
                {f.icon}
              </div>
              <p className={`text-sm font-medium leading-snug ${f.highlight ? "text-white" : "text-gray-800"}`}>
                {f.title}
              </p>
              <p className={`text-xs leading-relaxed ${f.highlight ? "text-orange-100" : "text-gray-400"}`}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default About;