import { Link } from "react-router-dom";
import Badge from "../common/Badge";

export default function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course._id}`} className="block group">
      <div className="bg-card rounded-3xl overflow-hidden transition hover:scale-105">
        <img
          src={course.thumbnail || "/images/placeholder.png"}
          alt={course.title}
          className="w-full h-52 object-cover"
        />
        <div className="p-6">
          <Badge color="accent">{course.duration}</Badge>
          <h3 className="font-bold text-xl mt-4 group-hover:text-primary">
            {course.title}
          </h3>
          <p className="text-gray-400 line-clamp-2 mt-2">
            {course.description}
          </p>
          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-semibold">
              ₹{course.price || "Free"}
            </span>
            <span className="text-sm text-gray-400">
              by {course.instructor?.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
