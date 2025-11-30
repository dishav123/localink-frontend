import ReviewCard from "./ReviewCard";

export default function ReviewSection() {
  return (
    <div className="max-h-screen ">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-[#292929]">Customer Reviews</h1>
          <p className="text-neutral-600">See what our customers have to say about their experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <ReviewCard />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <ReviewCard />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  );
}
