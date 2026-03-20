// ReviewCard.jsx
// Redesigned to match Localink's orange (#e36e2a) brand identity.
//
// Props:
//   quote      — the review text
//   authorName — reviewer's full name
//   authorRole — e.g. "Hired a Plumber"
//   rating     — number 1–5

// ── Sample reviews to use on landing page / homepage ──────────────────────
// Import and map over this wherever you display testimonials.
export const sampleReviews = [
  {
    quote:
      "Called a plumber through Localink at 8pm and he arrived within the hour. Fixed our burst pipe quickly and cleanly. Couldn't believe how smooth the whole process was.",
    authorName: "Anil Shrestha",
    authorRole: "Hired a Plumber",
    rating: 5,
  },
  {
    quote:
      "The carpenter built our modular kitchen exactly the way we imagined it. He was punctual, polite, and the finish quality is outstanding. Will definitely use Localink again.",
    authorName: "Priya Maharjan",
    authorRole: "Hired a Carpenter",
    rating: 5,
  },
  {
    quote:
      "Had a complete house rewiring done through Localink. The electrician was certified, explained every step, and the whole job was done in two days without any disruption.",
    authorName: "Sagar Bajracharya",
    authorRole: "Hired an Electrician",
    rating: 4,
  },
  
];

// ── Star rating display ────────────────────────────────────────────────────
function StarRating({ rating = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating) ? "text-[#e36e2a]" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ── ReviewCard component ───────────────────────────────────────────────────
export default function ReviewCard({
  quote,
  authorName,
  authorRole,
  rating = 5,
}) {
  // Auto-derive 2-letter initials from name — e.g. "Anil Shrestha" → "AS"
  const initials = authorName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#e36e2a]/40 hover:shadow-md transition-all duration-200 h-full">

      {/* Orange left accent bar — appears on hover */}
      <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#e36e2a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      {/* Star rating */}
      <StarRating rating={rating} />

      {/* Quote with large decorative open-quote */}
      <div className="relative flex-1">
        <span className="absolute -top-2 -left-1 text-5xl text-[#e36e2a]/15 font-serif leading-none select-none">
          "
        </span>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-3 pl-2">
          {quote}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#e36e2a] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-semibold tracking-wide">
            {initials}
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <p className="text-sm font-semibold text-gray-800 truncate">{authorName}</p>
          <p className="text-xs text-gray-400">{authorRole}</p>
        </div>
      </div>
    </div>
  );
}