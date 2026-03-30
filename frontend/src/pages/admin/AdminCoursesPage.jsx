import DashboardLayout from "../../components/layout/DashboardLayout";
import CoursesTable from "../../components/admin/CoursesTable";

export default function AdminCoursesPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">All Courses</h1>
      <CoursesTable courses={[]} />
    </DashboardLayout>
  );
}
