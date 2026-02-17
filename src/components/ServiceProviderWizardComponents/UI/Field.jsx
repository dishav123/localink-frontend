// ServiceProviderWizard/ui/Field.jsx

import { AlertCircle } from "lucide-react";

export function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-widest text-stone-500 flex items-center gap-1">
        {label}
        {required && <span className="text-amber-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
}