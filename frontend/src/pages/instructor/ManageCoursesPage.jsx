import DashboardLayout from '../../components/layout/DashboardLayout';
import CoursesTable from '../../components/admin/CoursesTable';

const ManageCoursesPage = () => {
  const demoCourses = [
    {
      _id: '1',
      title: 'React for Beginners',
      category: 'Web Development',
      instructor: { name: 'Instructor Demo' },
      price: 0,
      isPublished: true
    }
  ];

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Manage Courses</h1>
      <CoursesTable courses={demoCourses} />
    </DashboardLayout>
  );
};

export default ManageCoursesPage;