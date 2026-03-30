import DashboardLayout from "../../components/layout/DashboardLayout";
import SubmissionList from "../../components/assignments/SubmissionList";

export default function StudentSubmissionsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Student Submissions</h1>
      <SubmissionList submissions={[]} />
    </DashboardLayout>
  );
}
