import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Loader from '../../components/common/Loader';
import EmptyState from '../../components/common/EmptyState';
import CourseCard from '../../components/courses/CourseCard';
import { getAllCourses } from '../../api/courseApi';

const MyCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        setCourses(response.data || []);
      } catch {
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-slate-900">My Courses</h1>
        <p className="mt-2 text-slate-600">View and continue your enrolled courses.</p>
      </div>

      <div className="mt-8">
        {loading ? (
          <Loader text="Loading courses..." />
        ) : courses.length === 0 ? (
          <EmptyState title="No enrolled courses yet" />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyCoursesPage;