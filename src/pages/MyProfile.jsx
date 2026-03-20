import { useState } from "react";
import { assets } from "../assets/assets";

const DEFAULT_USER = {
  name:         "",
  email:        "",
  phoneNum:     "",       
  bio:          "",       
  gender:       "",       
  image:        assets.profile_pic,
  country:      "Nepal", // schema: default "Nepal"
  province:     "",
  city:         "",
  municipality: "",
  wardNo:       "",
};

function InputField({ label, value, onChange, type = "text", editable, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      {editable ? (
        // If custom input (e.g. select) is passed as children, render that
        children || (
          <input
            type={type}
            value={value}
            onChange={onChange}
            className="text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#e36e2a] focus:border-transparent transition-all"
          />
        )
      ) : (
        <p className="text-sm text-gray-800 py-2">
          {value || <span className="text-gray-400 italic">Not provided</span>}
        </p>
      )}
    </div>
  );
}

function EditButton({ editing, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#e36e2a] text-[#e36e2a] text-sm font-medium hover:bg-[#e36e2a] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#e36e2a] focus:ring-offset-2"
    >
      {editing ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Save
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Edit
        </>
      )}
    </button>
  );
}

function SectionCard({ title, editing, onToggle, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6 hover:shadow-md transition-shadow duration-300">
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h2>
          <EditButton editing={editing} onToggle={onToggle} />
        </div>
        {children}
      </div>
    </div>
  );
}

function MyProfile() {
  const [userData, setUserData] = useState(DEFAULT_USER);

  // Which sections are in edit mode
  const [editSections, setEditSections] = useState({
    profile:  false,
    personal: false,
    address:  false,
  });

  function toggleEdit(section) {
    setEditSections((prev) => ({ ...prev, [section]: !prev[section] }));
    // TODO: when toggling off (saving), call your API here
  }

  function update(field) {
    return (e) => setUserData((prev) => ({ ...prev, [field]: e.target.value }));
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">My Profile</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage your personal information and preferences.
          </p>
        </div>

        {/* ── Profile card ─────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6 hover:shadow-md transition-shadow duration-300">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

              {/* Avatar */}
              <div className="relative group flex-shrink-0">
                <img
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-orange-100"
                  src={userData.image || assets.profile_pic}
                  alt={userData.name}
                />
                {/* Camera button only shown in edit mode */}
                {editSections.profile && (
                  <button className="absolute bottom-0 right-0 bg-[#e36e2a] text-white rounded-full p-2 shadow-lg hover:bg-[#c85c1c] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Name + email + verified badge */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h2 className="text-xl font-semibold text-gray-900 truncate">
                    {userData.name || "Your Name"}
                  </h2>
                  {/* Verified badge — driven by isVerified from schema */}
                  {userData.isVerified && (
                    <span className="flex items-center gap-1 text-xs bg-green-50 text-green-600 border border-green-200 rounded-full px-2 py-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{userData.email}</p>
                {userData.bio && (
                  <p className="text-sm text-gray-600 mt-2 italic">"{userData.bio}"</p>
                )}
              </div>

              {/* Edit button */}
              <div className="self-start sm:self-center">
                <EditButton
                  editing={editSections.profile}
                  onToggle={() => toggleEdit("profile")}
                />
              </div>
            </div>

            {/* Editable profile fields */}
            {editSections.profile && (
              <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField label="Display Name" value={userData.name}
                  onChange={update("name")} editable />
                <InputField label="Bio (max 300 chars)" value={userData.bio}
                  onChange={update("bio")} editable />
              </div>
            )}
          </div>
        </div>

        {/* ── Personal information ─────────────────────────────────────────── */}
        <SectionCard
          title="Personal Information"
          editing={editSections.personal}
          onToggle={() => toggleEdit("personal")}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <InputField label="Full Name" value={userData.name}
              onChange={update("name")} editable={editSections.personal} />

            <InputField label="Email Address" value={userData.email}
              type="email" onChange={update("email")} editable={editSections.personal} />

            {/* phoneNum — schema field name */}
            <InputField label="Phone Number" value={userData.phoneNum}
              type="tel" onChange={update("phoneNum")} editable={editSections.personal} />

            {/* Gender — schema: enum ["male", "female", "other"] */}
            <InputField
              label="Gender"
              value={userData.gender}
              onChange={update("gender")}
              editable={editSections.personal}
            >
              {editSections.personal && (
                <select
                  value={userData.gender}
                  onChange={update("gender")}
                  className="text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#e36e2a] focus:border-transparent transition-all w-full"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              )}
            </InputField>

          </div>
        </SectionCard>

        {/* ── Address information ──────────────────────────────────────────── */}
        <SectionCard
          title="Address Information"
          editing={editSections.address}
          onToggle={() => toggleEdit("address")}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Country — schema: default "Nepal" */}
            <InputField label="Country" value={userData.country}
              onChange={update("country")} editable={editSections.address} />

            {/* Province — schema field */}
            <InputField label="Province" value={userData.province}
              onChange={update("province")} editable={editSections.address} />

            {/* City — schema field */}
            <InputField label="City" value={userData.city}
              onChange={update("city")} editable={editSections.address} />

            {/* Municipality — schema field */}
            <InputField label="Municipality / VDC" value={userData.municipality}
              onChange={update("municipality")} editable={editSections.address} />

            {/* Ward No — schema field */}
            <InputField label="Ward No." value={userData.wardNo}
              onChange={update("wardNo")} editable={editSections.address} />

          </div>
        </SectionCard>

      </div>
    </div>
  );
}

export default MyProfile;