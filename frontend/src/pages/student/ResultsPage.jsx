import DashboardLayout from "../../components/layout/DashboardLayout";
import QuizResultCard from "../../components/quizzes/QuizResultCard";

export default function ResultsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">My Results</h1>
      <QuizResultCard score={8} total={10} />
    </DashboardLayout>
  );
}
