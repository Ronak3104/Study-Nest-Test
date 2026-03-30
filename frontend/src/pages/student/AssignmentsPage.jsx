import DashboardLayout from "../../components/layout/DashboardLayout";
import AssignmentCard from "../../components/assignments/AssignmentCard";

export default function AssignmentsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Assignments</h1>
      <AssignmentCard
        assignment={{
          title: "React Project",
          description: "Build a full LMS UI",
        }}
      />
    </DashboardLayout>
  );
}
