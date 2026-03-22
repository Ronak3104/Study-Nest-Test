import RatingStars from './RatingStars';

const ReviewList = ({ reviews = [] }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-900">Reviews & Ratings</h3>

      <div className="mt-6 space-y-5">
        {reviews.length === 0 ? (
          <p className="text-sm text-slate-500">No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="rounded-2xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-900">
                  {review.userId?.name || 'Anonymous'}
                </p>
                <RatingStars rating={review.rating || 0} />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewList;