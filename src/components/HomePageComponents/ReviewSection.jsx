import ReviewCard, { sampleReviews } from "./ReviewCard";

export default function ReviewSection() {
  return (
    <div className="max-h-screen m-10 ">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-medium">Customer Reviews</h1>
          <p className="text-neutral-600 text-sm">
            See what our customers have to say about their experience
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleReviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}
