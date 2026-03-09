// ServiceProviderWizard/useWizardForm.js

import api from "../../api/axios";
import { useState } from "react";

const INITIAL_FORM_STATE = {
  // Personal Details
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  nationality: "",
  gender: "",
  maritalStatus: "",
  bio: "",
  permanentDistrict: "",
  permanentMunicipality: "",
  permanentWard: "",
  permanentTole: "",
  citizenshipNo: "",
  rawOcrText: "",

  // Skills & Experience
  selectedSkills: [],
  primarySkill: "",
  experienceLevel: "",
  yearsOfExperience: "",
  certifications: "",
  hourlyRate: "",
  availability: "",
  experienceEntries: [],

  // Terms
  agreedToTerms: false,
  agreedToPrivacy: false,
  agreedToConduct: false,
};

export const useWizardForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user updates it
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "Required";
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Required";
    }
    if (!form.dateOfBirth) {
      newErrors.dateOfBirth = "Required";
    }
    if (!form.nationality.trim()) {
      newErrors.nationality = "Required";
    }
    if (!form.gender) {
      newErrors.gender = "Please select";
    }
    if (!form.maritalStatus) {
      newErrors.maritalStatus = "Please select";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateCurrentStep = () => {
    if (step === 1) {
      return validateStep1();
    }
    // Add validation for other steps if needed
    return true;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep((prev) => prev + 1);
      setErrors({});
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const canSubmit = () => {
    return form.agreedToTerms && form.agreedToPrivacy && form.agreedToConduct;
  };

  const handleSubmit = async () => {
    if (canSubmit()) {
      setSubmitted(true);
      const fd = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (key === "profileImage") {
          fd.append("profileImage", value);
        } else if (key === "selectedSkills" || key === "experienceEntries") {
          // Convert arrays to JSON strings for FormData
          fd.append(key, JSON.stringify(value));
        } else {
          fd.append(key, value);
        }
      });

      api.post("sp-onboarding/become-provider", fd)
        .then((response) => {
          console.log("Registration successful:", response.data);
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        });
        console.log("Form data submitted:", form);
    }
  };

  return {
    step,
    form,
    errors,
    submitted,
    updateField,
    nextStep,
    prevStep,
    canSubmit: canSubmit(),
    handleSubmit,
  };
};
