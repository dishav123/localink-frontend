import { useState, useRef, useCallback } from "react";
import {
  Camera,
  Scan,
  Pencil,
  X,
  CheckCircle2,
  AlertCircle,
  User,
  Upload,
} from "lucide-react";
import { Field } from "../UI/Field";
import { Input } from "../UI/Input";
import { Textarea } from "../UI/TextArea";
import { PillToggle } from "../UI/PillToggle";
import { uploadAndProcessDocument } from "../api";
import { GENDER_OPTIONS, MARITAL_STATUS_OPTIONS } from "../Constant";

export function StepPersonal({ data, update, errors }) {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [scanError, setScanError] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const fileRef = useRef();

  const handleImageUpload = useCallback(
    async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setScanError("");
      setScanning(true);

      try {
        await uploadAndProcessDocument(file, update);
        setScanned(true);
      } catch (error) {
        console.error("OCR Error:", error);
        setScanError(
          error.message || "Failed to process document. Please try again.",
        );
      } finally {
        setScanning(false);
      }
    },
    [update],
  );

  const handleProfileImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      update("profileImage", file);
    } else {
      update("profileImage", null);
    }
    console.log("Selected profile image:", file);
  };

  return (
    <div className="space-y-8">
      {/* OCR Banner */}
      <div
        className={`rounded-2xl border-2 border-dashed p-5 transition-all duration-500 cursor-pointer
        ${
          scanned
            ? "border-emerald-400 bg-emerald-50"
            : scanError
              ? "border-red-400 bg-red-50"
              : "border-amber-300 bg-amber-50 hover:border-amber-400"
        }`}
        onClick={() => !scanned && !scanning && fileRef.current?.click()}
      >
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept="image/jpeg,image/jpg,image/png"
          onChange={handleImageUpload}
        />
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
            ${
              scanned
                ? "bg-emerald-100 text-emerald-600"
                : scanError
                  ? "bg-red-100 text-red-600"
                  : "bg-amber-100 text-amber-600"
            }`}
          >
            {scanned ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : scanError ? (
              <AlertCircle className="w-6 h-6" />
            ) : (
              <Scan className="w-6 h-6" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            {scanning ? (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-amber-700">
                  Scanning document…
                </p>
                <div className="h-1.5 bg-amber-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full animate-pulse"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            ) : scanError ? (
              <>
                <p className="text-sm font-semibold text-red-700">
                  Upload failed
                </p>
                <p className="text-xs text-red-600">{scanError}</p>
              </>
            ) : scanned ? (
              <>
                <p className="text-sm font-semibold text-emerald-700">
                  Document scanned successfully
                </p>
                <p className="text-xs text-emerald-600">
                  Fields auto-filled — review and edit as needed
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-semibold text-amber-700">
                  Upload citizenship / ID document
                </p>
                <p className="text-xs text-amber-600">
                  Our AI will extract and fill your details automatically,
                </p>
                <p className="text-xs text-amber-600">
                  Recent citizenship documents need the backside uploaded for
                  accuracy, with the option to edit fields after scanning.
                </p>
              </>
            )}
          </div>
          {!scanned && !scanning && (
            <div className="flex-shrink-0">
              <div className="flex items-center gap-1.5 bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                <Camera className="w-3.5 h-3.5" />
                Scan ID
              </div>
            </div>
          )}
          {scanned && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setScanned(false);
                setScanError("");
              }}
              className="flex-shrink-0 p-1.5 rounded-lg hover:bg-emerald-100 text-emerald-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Name row */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="First Name" required error={errors.firstName}>
          <div className="relative">
            <Input
              value={data.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              placeholder="Arjun"
              className={errors.fullName ? "border-red-300 bg-red-50" : ""}
            />
            {scanned && data.firstName && (
              <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-amber-400" />
            )}
          </div>
        </Field>
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Email Address" required error={errors.email}>
          <Input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="arjun@example.com"
            className={errors.email ? "border-red-300 bg-red-50" : ""}
          />
        </Field>
        <Field label="Phone Number" required error={errors.phone}>
          <Input
            type="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+977 98XXXXXXXX"
            className={errors.phone ? "border-red-300 bg-red-50" : ""}
          />
        </Field>
      </div>

      {/* DOB + Nationality */}
      <div className="grid grid-cols-2 gap-4">
        <Field label="Date of Birth" required error={errors.dateOfBirth}>
          <Input
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => update("dateOfBirth", e.target.value)}
            className={errors.dateOfBirth ? "border-red-300 bg-red-50" : ""}
          />
        </Field>
        <Field label="Nationality" required error={errors.nationality}>
          <Input
            value={data.nationality}
            onChange={(e) => update("nationality", e.target.value)}
            placeholder="Nepali"
            className={errors.nationality ? "border-red-300 bg-red-50" : ""}
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Citizenship Number" required error={errors.citizenshipNo}>
          <Input
            value={data.citizenshipNo}
            onChange={(e) => update("citizenshipNo", e.target.value)}
            placeholder="12-34-56-7890"
            className={errors.citizenshipNo ? "border-red-300 bg-red-50" : ""}
          />
        </Field>
        </div>

      {/* Gender + Marital */}
      <div className="grid grid-cols-2 gap-6">
        <Field label="Gender" required error={errors.gender}>
          <PillToggle
            options={GENDER_OPTIONS}
            value={data.gender}
            onChange={(v) => update("gender", v)}
          />
        </Field>
        <Field label="Marital Status" required error={errors.maritalStatus}>
          <PillToggle
            options={MARITAL_STATUS_OPTIONS}
            value={data.maritalStatus}
            onChange={(v) => update("maritalStatus", v)}
          />
        </Field>
      </div>

      {/* Address (auto-filled section) */}
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
          Permanent Address
        </p>
        <div className="grid grid-cols-3 gap-3">
          <Field label="District">
            <Input
              value={data.permanentDistrict}
              onChange={(e) => update("permanentDistrict", e.target.value)}
              placeholder="Lalitpur"
            />
          </Field>
          <Field label="Municipality">
            <Input
              value={data.permanentMunicipality}
              onChange={(e) => update("permanentMunicipality", e.target.value)}
              placeholder="Municipality"
            />
          </Field>
          <Field label="Ward No.">
            <Input
              type="number"
              value={data.permanentWard}
              onChange={(e) => update("permanentWard", e.target.value)}
              placeholder="9"
            />
          </Field>
        </div>
        <Input
          value={data.permanentTole}
          onChange={(e) => update("permanentTole", e.target.value)}
          placeholder="Tole / Street address"
        />
      </div>

      {/* Bio */}
      <Field label="Short Bio">
        <Textarea
          value={data.bio}
          onChange={(e) => update("bio", e.target.value)}
          rows={3}
          placeholder="Tell us a little about yourself…"
        />
      </Field>

      {/* Profile picture */}
      <Field label="Profile Photo">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-stone-100 border-2 border-dashed border-stone-300 flex items-center justify-center text-stone-400">
            {data.profileImage? (
              <img
                src={URL.createObjectURL(data.profileImage)}
                className="w-20 h-18 rounded-2xl object-cover"
              />
            ):
            (
            <User className="w-7 h-7" />
            )}
          </div>
          <label className="flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 bg-white text-sm text-stone-600 hover:border-amber-400 hover:text-amber-600 cursor-pointer transition-all">
            <Upload className="w-4 h-4" />
            Upload photo
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleProfileImageChange(e)}
            />
          </label>
        </div>
      </Field>
    </div>
  );
}
