// ServiceProviderWizard/constants.js

import { User, Briefcase, FileCheck, ScrollText } from "lucide-react";
 const API_BASE_URL="http://localhost:3000/api";

export const STEPS = [
  { id: 1, label: "Personal Details", icon: User, sub: "Identity & contact" },
  { id: 2, label: "Skills", icon: Briefcase, sub: "Experience & expertise" },
  { id: 3, label: "Verification", icon: FileCheck, sub: "Review documents" },
  { id: 4, label: "Agreement", icon: ScrollText, sub: "Terms & conditions" },
];

export const SKILLS_LIST = [
  "Plumbing",
  "Electrical Work",
  "Carpentry",
  "Painting",
  "Cleaning Services",
  "AC Repair",
  "Masonry",
  "Welding",
  "Landscaping",
  "Interior Design",
  "Computer Repair",
  "Tutoring",
];

export const GENDER_OPTIONS = ["Male", "Female", "Other"];

export const MARITAL_STATUS_OPTIONS = ["Single", "Married", "Other"];

export const EXPERIENCE_LEVELS = ["Beginner", "Intermediate", "Expert"];

export const AVAILABILITY_OPTIONS = ["Full-time", "Part-time", "Weekends"];

export const TERMS_AGREEMENTS = [
  { key: "agreedToTerms", label: "I have read and agree to the Terms & Conditions" },
  { key: "agreedToPrivacy", label: "I agree to the Privacy Policy and data processing practices" },
  { key: "agreedToConduct", label: "I agree to uphold the Service Provider Code of Conduct" },
];

export const API_CONFIG = {
  OCR_ENDPOINT: `${API_BASE_URL}/ocr/run-ocr`,
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_FILE_TYPES: ["image/jpeg", "image/jpg", "image/png"],
};