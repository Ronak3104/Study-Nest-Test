import { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import CoursesTable from '../../components/admin/CoursesTable';
import { getAllCourses } from '../../api/courseApi';

const AdminCoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        setCourses(response.data || []);
      } catch {
        setCourses([]);
      }
    };

    fetchCourses();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">Manage Courses</h1>
        <CoursesTable courses={courses} />
      </div>
    </AdminLayout>
  );
};

export default AdminCoursesPage;