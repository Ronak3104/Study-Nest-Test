import DashboardLayout from "../../components/layout/DashboardLayout";
import QuizCard from "../../components/quizzes/QuizCard";

export default function QuizzesPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Quizzes</h1>
      <QuizCard quiz={{ title: "JavaScript Basics" }} />
    </DashboardLayout>
  );
}
