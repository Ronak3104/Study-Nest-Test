import { Link } from 'react-router-dom';
import { Clock3, Layers3, Users } from 'lucide-react';
import RatingStars from './RatingStars';
import Button from '../common/Button';

const CourseCard = ({ course }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="h-48 bg-gradient-to-br from-brand-100 to-slate-200" />
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {course.category || 'General'}
          </span>
          <span className="text-sm font-medium text-slate-500 capitalize">
            {course.level || 'beginner'}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {course.description}
        </p>

        <div className="mt-4">
          <RatingStars rating={course.averageRating || 0} />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            <span>{course.duration || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span>{course.totalEnrollments || 0}</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers3 size={16} />
            <span>{course.level || 'Basic'}</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-lg font-bold text-slate-900">
            {course.price === 0 ? 'Free' : `₹${course.price}`}
          </p>
          <Link to={`/courses/${course._id}`}>
            <Button>View Course</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;