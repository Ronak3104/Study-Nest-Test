import DashboardLayout from '../../components/layout/DashboardLayout';
import AssignmentCard from '../../components/assignments/AssignmentCard';

const ManageAssignmentsPage = () => {
  const assignments = [
    {
      _id: '1',
      title: 'Build a React Navbar',
      description: 'Create a responsive navbar component.',
      dueDate: new Date()
    }
  ];

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Manage Assignments</h1>
      <div className="space-y-6">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment._id} assignment={assignment} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ManageAssignmentsPage;