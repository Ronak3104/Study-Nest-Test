import { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import CourseCard from "../../components/courses/CourseCard";
import CourseSearch from "../../components/courses/CourseSearch";
import CourseFilters from "../../components/courses/CourseFilters";
import { getAllCourses } from "../../api/courseApi";
import Loader from "../../components/common/Loader";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getAllCourses().then((res) => {
      setCourses(res.data.data);
      setLoading(false);
    });
  }, []);

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (filter === "free") return matchesSearch && c.price === 0;
    if (filter === "paid") return matchesSearch && c.price > 0;
    return matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">All Courses</h1>
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <CourseSearch onSearch={setSearchTerm} />
          <CourseFilters onFilter={setFilter} />
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
