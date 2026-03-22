import DashboardLayout from '../../components/layout/DashboardLayout';
import QuizCard from '../../components/quizzes/QuizCard';

const ManageQuizzesPage = () => {
  const quizzes = [
    {
      _id: '1',
      title: 'React Basics Quiz',
      questions: [1, 2, 3]
    }
  ];

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Manage Quizzes</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz._id} quiz={quiz} onStart={() => {}} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ManageQuizzesPage;