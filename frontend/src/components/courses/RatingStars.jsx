import { Star } from 'lucide-react';

const RatingStars = ({ rating = 0 }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          size={16}
          className={value <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}
        />
      ))}
      <span className="ml-2 text-sm text-slate-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;