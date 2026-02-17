// ServiceProviderWizard/api.js

import { API_CONFIG } from "./Constant";


/**
 * Upload and process citizenship document with OCR
 * @param {File} file - The image file to process
 * @param {Function} updateField - Function to update form fields
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export const uploadAndProcessDocument = async (file, updateField) => {
  // Validate file type
  if (!API_CONFIG.ALLOWED_FILE_TYPES.includes(file.type)) {
    throw new Error("Please upload a valid image (JPG, PNG)");
  }

  // Validate file size
  if (file.size > API_CONFIG.MAX_FILE_SIZE) {
    throw new Error("File size must be less than 10MB");
  }

  // Create FormData and append the image
  const formData = new FormData();
  formData.append("document", file);

  // POST to backend OCR endpoint
  const response = await fetch(API_CONFIG.OCR_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`OCR failed: ${response.statusText}`);
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "OCR processing failed");
  }

  // Parse the improved text (JSON response from LLM)
  let extractedData;
  try {
    extractedData = JSON.parse(result.improvedText);
  } catch (parseError) {
    console.error("Failed to parse LLM response:", parseError);
    throw new Error("Failed to extract structured data from document");
  }

  // Map backend response to form fields
  // Backend returns: { fullName, gender, citizenshipNo, dob, address, phone }

  // Split fullName into firstName and lastName
  if (extractedData.fullName) {
    const nameParts = extractedData.fullName.trim().split(/\s+/);
    if (nameParts.length > 0) {
      updateField("firstName", nameParts[0]);
      if (nameParts.length > 1) {
        updateField("lastName", nameParts.slice(1).join(" "));
      }
    }
  }

  // Map other fields
  if (extractedData.gender) updateField("gender", extractedData.gender);
  if (extractedData.dob) updateField("dateOfBirth", extractedData.dob);
  if (extractedData.phone) updateField("phone", extractedData.phone);

  // Parse address into components
  if (extractedData.address) {
    const addressParts = extractedData.address.split(",").map((p) => p.trim());

    // Try to extract ward number
    const wardMatch = addressParts.find((p) => /ward\s*\d+/i.test(p));
    if (wardMatch) {
      const wardNum = wardMatch.match(/\d+/);
      if (wardNum) updateField("permanentWard", wardNum[0]);
    }

    // Try to extract district/municipality
    if (addressParts.length > 0) {
      updateField("permanentDistrict", addressParts[0]);
    }
    if (addressParts.length > 1) {
      updateField("permanentMunicipality", addressParts[1]);
    }

    // Store full address in tole field as fallback
    updateField("permanentTole", extractedData.address);
  }

  // Default nationality for Nepali citizenship
  updateField("nationality", "Nepali");

  // Store citizenship number if available
  if (extractedData.citizenshipNo) {
    updateField("citizenshipNo", extractedData.citizenshipNo);
  }

  // Store raw OCR text for reference
  if (result.rawText) {
    updateField("rawOcrText", result.rawText);
  }

  return { success: true };
};