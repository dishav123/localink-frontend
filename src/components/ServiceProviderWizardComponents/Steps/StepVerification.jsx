// ServiceProviderWizard/steps/StepVerification.jsx

import { useState, useRef } from "react";
import { CheckCircle2, FileCheck } from "lucide-react";

export function StepVerification({ data, update }) {
  const fileInputRef = useRef(null);
  const fields = [
    {
      label: "Full Name",
      value: `${data.firstName || ""} ${data.lastName || ""}`.trim() || "—",
    },
    { label: "Email", value: data.email || "—" },
    { label: "Phone", value: data.phone || "—" },
    { label: "Date of Birth", value: data.dateOfBirth || "—" },
    { label: "Gender", value: data.gender || "—" },
    { label: "Marital Status", value: data.maritalStatus || "—" },
    { label: "Nationality", value: data.nationality || "—" },
    { label: "District", value: data.permanentDistrict || "—" },
    { label: "Municipality", value: data.permanentMunicipality || "—" },
    { label: "Ward", value: data.permanentWard || "—" },
    { label: "Primary Service", value: data.primarySkill || "—" },
    { label: "Experience (yrs)", value: data.yearsOfExperience || "—" },
  ];
  const [documentImage, setDocumentImage] = useState(null);

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleDocumentImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocumentImage(file);
      update("documentImage", file);
    } else {
      update("documentImage", null);
    }
    console.log("Selected document image:", file);
  };

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-amber-800">
            Review your information
          </p>
          <p className="text-xs text-amber-700 mt-0.5">
            Please confirm the details below are correct. If anything looks wrong, go
            back and edit.
          </p>
        </div>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-2 gap-px bg-stone-200 rounded-2xl overflow-hidden border border-stone-200">
        {fields.map(({ label, value }) => (
          <div key={label} className="bg-white px-5 py-3.5">
            <p className="text-xs text-stone-400 font-medium mb-0.5">{label}</p>
            <p className="text-sm font-semibold text-stone-800 truncate">{value}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      {(data.selectedSkills || []).length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            Selected Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {(data.selectedSkills || []).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Document preview */}
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
          Uploaded Documents
        </p>
        <div className="flex gap-3">
          <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 flex-1">
            <FileCheck className="w-8 h-8 text-emerald-500 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-stone-700">
                Citizenship Document
              </p>
              <input ref={fileInputRef} type="file" className="mt-2" hidden onChange={handleDocumentImageChange}/>
              <button className="text-xs text-amber-600 hover:text-amber-700 font-medium border px-2 py-1 rounded-full mt-2"
              onClick={handleEditClick}>Edit</button>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto" />
          </div>
        </div>
        {data.citizenshipNo && (
          <div className="mt-3 bg-stone-50 border border-stone-200 rounded-xl p-4">
            <p className="text-xs text-stone-400 mb-1">Citizenship Number</p>
            <p className="text-sm font-semibold text-stone-700">
              {data.citizenshipNo}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}