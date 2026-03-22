import DashboardLayout from '../../components/layout/DashboardLayout';
import ProgressSummary from '../../components/progress/ProgressSummary';
import AttendanceCard from '../../components/progress/AttendanceCard';
import AssignmentCard from '../../components/assignments/AssignmentCard';
import QuizCard from '../../components/quizzes/QuizCard';
import useAuth from '../../hooks/useAuth';

const StudentDashboardPage = () => {
  const { user } = useAuth();

  const demoProgress = {
    percentage: 72,
    completedLessons: [1, 2, 3],
    completedAssignments: [1],
    completedQuizzes: [1]
  };

  const demoAssignment = {
    title: 'React UI Assignment',
    description: 'Build a responsive UI using React and Tailwind CSS.',
    dueDate: new Date()
  };

  const demoQuiz = {
    title: 'React Basics Quiz',
    questions: [1, 2, 3, 4]
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome, {user?.name}</h1>
          <p className="mt-2 text-slate-600">
            Continue your learning journey and track your progress.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <ProgressSummary progress={demoProgress} />
          <AttendanceCard totalAttended={8} totalLessons={10} />
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <AssignmentCard assignment={demoAssignment} />
          <QuizCard quiz={demoQuiz} onStart={() => alert('Navigate to quiz page')} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboardPage;