import CourseCard from "../courses/CourseCard";

export default function EnrolledCoursesList({ courses }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Enrolled Courses</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((enrollment) => (
          <CourseCard key={enrollment.course._id} course={enrollment.course} />
        ))}
      </div>
    </div>
  );
}
