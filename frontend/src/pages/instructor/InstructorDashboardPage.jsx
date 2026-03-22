import DashboardLayout from '../../components/layout/DashboardLayout';

const InstructorDashboardPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-900">Instructor Dashboard</h1>
      <p className="mt-2 text-slate-600">
        Manage your courses, assignments, quizzes, and student submissions.
      </p>
    </DashboardLayout>
  );
};

export default InstructorDashboardPage;