// ServiceProviderWizard/ui/Textarea.jsx

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-800
        placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400
        transition-all duration-200 resize-none ${className}`}
    />
  );
}