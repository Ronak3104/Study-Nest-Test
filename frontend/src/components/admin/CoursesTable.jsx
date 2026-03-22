import Badge from '../common/Badge';

const CoursesTable = ({ courses = [] }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-6">
        <h3 className="text-xl font-semibold text-slate-900">Courses</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-sm text-slate-600">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Instructor</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id} className="border-t border-slate-200 text-sm">
                <td className="px-6 py-4 font-medium text-slate-900">{course.title}</td>
                <td className="px-6 py-4 text-slate-600">{course.category}</td>
                <td className="px-6 py-4 text-slate-600">{course.instructor?.name}</td>
                <td className="px-6 py-4 text-slate-600">
                  {course.price === 0 ? 'Free' : `₹${course.price}`}
                </td>
                <td className="px-6 py-4">
                  <Badge variant={course.isPublished ? 'success' : 'warning'}>
                    {course.isPublished ? 'Published' : 'Draft'}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesTable;