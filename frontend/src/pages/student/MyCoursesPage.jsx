import DashboardLayout from "../../components/layout/DashboardLayout";
import EnrolledCoursesList from "../../components/profile/EnrolledCoursesList";

export default function MyCoursesPage() {
  // Fetch enrolled courses in real app
  return (
    <DashboardLayout>
      <EnrolledCoursesList courses={[]} />
    </DashboardLayout>
  );
}
