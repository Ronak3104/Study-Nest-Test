import { useState } from "react";
import Button from "../common/Button";
import RatingStars from "./RatingStars";
import Textarea from "../common/Textarea";

export default function AddReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-8 rounded-3xl">
      <h3 className="text-2xl font-semibold mb-6">Leave a Review</h3>
      <RatingStars rating={rating} />
      <div className="flex gap-1 mt-2">
        {[1, 2, 3, 4, 5].map((r) => (
          <button key={r} type="button" onClick={() => setRating(r)}>
            <Star
              size={28}
              className={
                r <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-600"
              }
            />
          </button>
        ))}
      </div>
      <Textarea
        label="Your Review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
      />
      <Button type="submit" className="w-full mt-6">
        Submit Review
      </Button>
    </form>
  );
}
