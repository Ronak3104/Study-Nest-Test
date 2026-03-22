import { Link } from 'react-router-dom';

const EnrolledCoursesList = ({ courses = [] }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Enrolled Courses</h3>

      <div className="mt-5 space-y-4">
        {courses.length === 0 ? (
          <p className="text-sm text-slate-500">No enrolled courses found.</p>
        ) : (
          courses.map((item) => {
            const course = item.courseId || item;
            return (
              <div
                key={course._id}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
              >
                <div>
                  <p className="font-semibold text-slate-900">{course.title}</p>
                  <p className="text-sm text-slate-500">{course.category}</p>
                </div>
                <Link
                  to={`/courses/${course._id}`}
                  className="text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  View
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default EnrolledCoursesList;