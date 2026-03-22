import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import AssignmentCard from '../../components/assignments/AssignmentCard';
import AssignmentSubmissionForm from '../../components/assignments/AssignmentSubmissionForm';
import SubmissionList from '../../components/assignments/SubmissionList';
import Loader from '../../components/common/Loader';
import { getAssignmentsByCourse, submitAssignment } from '../../api/assignmentApi';

const AssignmentsPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [submissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        // Replace with selected/enrolled course ID when implementing real flow
        const response = await getAssignmentsByCourse('demo-course-id').catch(() => ({ data: [] }));
        setAssignments(response.data || []);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  const handleSubmit = async (payload) => {
    try {
      if (!assignments[0]?._id) {
        alert('No assignment available to submit.');
        return;
      }

      await submitAssignment(assignments[0]._id, payload);
      alert('Assignment submitted successfully');
    } catch (error) {
      alert(error.response?.data?.message || 'Submission failed');
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-900">Assignments</h1>
      <p className="mt-2 text-slate-600">Manage your assignment submissions.</p>

      <div className="mt-8 space-y-6">
        {loading ? (
          <Loader text="Loading assignments..." />
        ) : (
          assignments.map((assignment) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))
        )}

        <AssignmentSubmissionForm onSubmit={handleSubmit} />
        <SubmissionList submissions={submissions} />
      </div>
    </DashboardLayout>
  );
};

export default AssignmentsPage;