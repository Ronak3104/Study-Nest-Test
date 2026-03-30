import { Star } from "lucide-react";

export default function RatingStars({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={24}
          className={
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
          }
        />
      ))}
    </div>
  );
}
