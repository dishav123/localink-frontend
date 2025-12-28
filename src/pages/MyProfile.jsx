import { useState } from "react";
import { assets } from "../assets/assets";

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Michal Rodriguez",
    email: "MichalRodriguez@gmail.com",
    location: "Los Angeles, California, USA",
    image: assets.profile_pic,
    contact: "123-456-7890",
    bio: "Live young and free!",
    gender: "Male",
    dob: "1990-01-01",
    address: "123 Sunset Blvd",
    city: "Los Angeles",
    state: "California",
    zipCode: "90001",
  });

  const [editSections, setEditSections] = useState({
    profile: false,
    personal: false,
    address: false,
  });

  const toggleEdit = (section) => {
    setEditSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const InputField = ({ label, value, onChange, type = "text", editable }) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      {editable ? (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="text-base text-gray-900 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#F3752B] focus:border-transparent transition-all"
        />
      ) : (
        <p className="text-base text-gray-900 py-2">{value}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Container with max width */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            My Profile
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your personal information and preferences
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6 hover:shadow-md transition-shadow duration-300">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              {/* Profile Image */}
              <div className="relative group">
                <img
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-gray-100 transition-transform duration-300 group-hover:scale-105"
                  src={userData.image}
                  alt={userData.name}
                />
                {editSections.profile && (
                  <button className="absolute bottom-0 right-0 bg-[#F3752B] text-white rounded-full p-2 shadow-lg hover:bg-[#d96322] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1 w-full sm:w-auto">
                <div className="space-y-3">
                  <InputField
                    label="Name"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    editable={editSections.profile}
                  />
                  <InputField
                    label="Email"
                    value={userData.email}
                    type="email"
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    editable={editSections.profile}
                  />
                  <InputField
                    label="Bio"
                    value={userData.bio}
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, bio: e.target.value }))
                    }
                    editable={editSections.profile}
                  />
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={() => toggleEdit("profile")}
                className="self-start sm:self-center flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#F3752B] text-[#F3752B] font-medium hover:bg-[#F3752B] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3752B] focus:ring-offset-2"
              >
                {editSections.profile ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Save</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>Edit</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6 hover:shadow-md transition-shadow duration-300">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Personal Information
              </h2>
              <button
                onClick={() => toggleEdit("personal")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#F3752B] text-[#F3752B] font-medium hover:bg-[#F3752B] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3752B] focus:ring-offset-2"
              >
                {editSections.personal ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Save</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>Edit</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
                editable={editSections.personal}
              />
              <InputField
                label="Email Address"
                value={userData.email}
                type="email"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                editable={editSections.personal}
              />
              <InputField
                label="Phone Number"
                value={userData.contact}
                type="tel"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, contact: e.target.value }))
                }
                editable={editSections.personal}
              />
              <InputField
                label="Gender"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                editable={editSections.personal}
              />
              <InputField
                label="Date of Birth"
                value={userData.dob}
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                editable={editSections.personal}
              />
              <InputField
                label="Bio"
                value={userData.bio}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, bio: e.target.value }))
                }
                editable={editSections.personal}
              />
            </div>
          </div>
        </div>

        {/* Address Information Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Address Information
              </h2>
              <button
                onClick={() => toggleEdit("address")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#F3752B] text-[#F3752B] font-medium hover:bg-[#F3752B] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3752B] focus:ring-offset-2"
              >
                {editSections.address ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Save</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>Edit</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <InputField
                  label="Street Address"
                  value={userData.address}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, address: e.target.value }))
                  }
                  editable={editSections.address}
                />
              </div>
              <InputField
                label="City"
                value={userData.city}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, city: e.target.value }))
                }
                editable={editSections.address}
              />
              <InputField
                label="State / Province"
                value={userData.state}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, state: e.target.value }))
                }
                editable={editSections.address}
              />
              <InputField
                label="ZIP / Postal Code"
                value={userData.zipCode}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, zipCode: e.target.value }))
                }
                editable={editSections.address}
              />
              <InputField
                label="Country"
                value="USA"
                onChange={() => {}}
                editable={editSections.address}
              />
            </div>
          </div>
        </div>

        {/* Delete Account Section */}
        <div className="mt-8 bg-red-50 rounded-2xl border border-red-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-red-900 mb-2">
              Delete Account
            </h3>
            <p className="text-sm text-red-700 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="px-5 py-2.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;