import DashboardLayout from '../../components/layout/DashboardLayout';
import SubmissionList from '../../components/assignments/SubmissionList';

const StudentSubmissionsPage = () => {
  const submissions = [
    {
      _id: '1',
      assignmentId: { title: 'React UI Assignment' },
      fileUrl: 'https://example.com/demo.pdf',
      submittedAt: new Date(),
      marks: 9
    }
  ];

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Student Submissions</h1>
      <SubmissionList submissions={submissions} />
    </DashboardLayout>
  );
};

export default StudentSubmissionsPage;