// ServiceProviderWizard/steps/StepTerms.jsx

import { CheckCircle2 } from "lucide-react";
import { TERMS_AGREEMENTS } from "../Constant";

export function StepTerms({ data, update }) {
  return (
    <div className="space-y-6">
      <div className="h-64 overflow-y-auto bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4 text-sm text-stone-700 leading-relaxed scrollbar-thin scrollbar-thumb-stone-300">
        <p className="font-bold text-base text-stone-900">
          Service Provider Agreement
        </p>
        <p>
          By completing this registration, you confirm that all provided information
          is accurate and up-to-date.
        </p>

        <p className="font-semibold text-stone-800">1. Service Quality</p>
        <p>
          You agree to provide services with care, skill, and diligence. You will
          maintain professional standards and communicate clearly with clients at all
          times.
        </p>

        <p className="font-semibold text-stone-800">2. Background Verification</p>
        <p>
          You consent to background checks and verification of all credentials and
          identification documents provided during registration.
        </p>

        <p className="font-semibold text-stone-800">3. Platform Rules</p>
        <p>
          You will not engage in fraudulent activity, misrepresent your
          qualifications, or violate the rights of clients or the platform.
        </p>

        <p className="font-semibold text-stone-800">4. Liability</p>
        <p>
          You acknowledge personal responsibility for damages or disputes arising
          from services you deliver. The platform is not liable for your professional
          conduct.
        </p>

        <p className="font-semibold text-stone-800">5. Payment & Commission</p>
        <p>
          All payments will be processed per the platform's current fee schedule.
          Commission rates are disclosed in your provider dashboard.
        </p>

        <p className="font-semibold text-stone-800">6. Privacy</p>
        <p>
          Your personal data is handled in accordance with our Privacy Policy. We do
          not sell your data to third parties.
        </p>

        <p className="font-semibold text-stone-800">7. Termination</p>
        <p>
          The platform reserves the right to suspend or terminate accounts that
          violate these terms, with or without prior notice in cases of serious
          misconduct.
        </p>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        {TERMS_AGREEMENTS.map(({ key, label }) => (
          <label key={key} className="flex items-start gap-3 cursor-pointer group">
            <div
              className={`w-5 h-5 mt-0.5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all
              ${
                data[key]
                  ? "bg-amber-500 border-amber-500"
                  : "border-stone-300 group-hover:border-amber-300"
              }`}
              onClick={() => update(key, !data[key])}
            >
              {data[key] && <CheckCircle2 className="w-3 h-3 text-white" />}
              <input
                type="checkbox"
                className="sr-only"
                checked={!!data[key]}
                onChange={(e) => update(key, e.target.checked)}
              />
            </div>
            <span className="text-sm text-stone-700 leading-relaxed">{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}