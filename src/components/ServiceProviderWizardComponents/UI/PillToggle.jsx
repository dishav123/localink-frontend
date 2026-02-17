// ServiceProviderWizard/ui/PillToggle.jsx

export function PillToggle({ options, value, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
            ${
              value === opt
                ? "bg-amber-500 border-amber-500 text-white shadow-sm shadow-amber-200"
                : "bg-white border-stone-200 text-stone-600 hover:border-amber-300 hover:text-amber-700"
            }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}