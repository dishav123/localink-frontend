import ReviewCard, { sampleReviews } from "./ReviewCard";
export default function ReviewSection() {
  return (
    <div className="py-16 px-4">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-medium">Customer Reviews</h1>
          <p className="text-neutral-600 text-sm">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sampleReviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}

