import Button from '../common/Button';
import RatingStars from './RatingStars';

const EnrollmentCard = ({ course, onEnroll, enrolled = false, loading = false }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">Instructor</p>
      <p className="mt-1 text-lg font-semibold text-slate-900">
        {course?.instructor?.name || 'Unknown'}
      </p>

      <div className="mt-4">
        <RatingStars rating={course?.averageRating || 0} />
      </div>

      <div className="mt-6 border-t border-slate-200 pt-6">
        <p className="text-3xl font-bold text-slate-900">
          {course?.price === 0 ? 'Free' : `₹${course?.price}`}
        </p>
        <p className="mt-2 text-sm text-slate-500">{course?.duration || 'N/A'} duration</p>
      </div>

      <Button className="mt-6 w-full" onClick={onEnroll} disabled={loading || enrolled}>
        {enrolled ? 'Already Enrolled' : loading ? 'Processing...' : 'Enroll Now'}
      </Button>
    </div>
  );
};

export default EnrollmentCard;