// ServiceProviderWizard/ui/Select.jsx

export function Select({ children, className = "", ...props }) {
  return (
    <select
      {...props}
      className={`w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-800
        focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400
        transition-all duration-200 appearance-none ${className}`}
    >
      {children}
    </select>
  );
}