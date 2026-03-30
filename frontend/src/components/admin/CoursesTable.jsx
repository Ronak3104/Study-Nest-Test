export default function CoursesTable({ courses }) {
  return (
    <div className="bg-card rounded-3xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left p-6">Course Title</th>
            <th className="text-left p-6">Instructor</th>
            <th className="text-left p-6">Price</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id} className="border-b border-gray-700">
              <td className="p-6">{course.title}</td>
              <td className="p-6 text-gray-400">{course.instructor?.name}</td>
              <td className="p-6">₹{course.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
