import RatingStars from "./RatingStars";

export default function ReviewList({ reviews }) {
  return (
    <div className="space-y-8">
      {reviews.map((review) => (
        <div key={review._id} className="bg-card p-6 rounded-3xl">
          <RatingStars rating={review.rating} />
          <p className="mt-4 text-gray-300">{review.comment}</p>
          <p className="text-sm text-gray-400 mt-4">- {review.user?.name}</p>
        </div>
      ))}
    </div>
  );
}
