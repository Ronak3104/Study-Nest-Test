import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import QuizCard from '../../components/quizzes/QuizCard';
import QuizQuestion from '../../components/quizzes/QuizQuestion';
import QuizTimer from '../../components/quizzes/QuizTimer';
import QuizResultCard from '../../components/quizzes/QuizResultCard';
import Button from '../../components/common/Button';
import { getQuizzesByCourse, attemptQuiz } from '../../api/quizApi';

const QuizzesPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await getQuizzesByCourse('demo-course-id').catch(() => ({ data: [] }));
        setQuizzes(response.data || []);
      } catch {
        setQuizzes([]);
      }
    };

    fetchQuizzes();
  }, []);

  const handleAnswerChange = (questionIndex, selectedAnswerIndex) => {
    setAnswers((prev) => {
      const filtered = prev.filter((item) => item.questionIndex !== questionIndex);
      return [...filtered, { questionIndex, selectedAnswerIndex }];
    });
  };

  const handleSubmitQuiz = async () => {
    try {
      if (!activeQuiz?._id) return;
      const response = await attemptQuiz(activeQuiz._id, { answers });
      setResult(response.data);
    } catch (error) {
      alert(error.response?.data?.message || 'Quiz submission failed');
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-900">Quizzes</h1>
      <p className="mt-2 text-slate-600">Attempt quizzes and check your performance.</p>

      {!activeQuiz ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz._id} quiz={quiz} onStart={setActiveQuiz} />
          ))}
        </div>
      ) : (
        <div className="mt-8 space-y-6">
          <QuizTimer durationInSeconds={300} onComplete={handleSubmitQuiz} />

          {activeQuiz.questions?.map((question, index) => (
            <QuizQuestion
              key={index}
              question={question}
              index={index}
              selectedAnswer={
                answers.find((item) => item.questionIndex === index)?.selectedAnswerIndex
              }
              onChange={handleAnswerChange}
            />
          ))}

          <Button onClick={handleSubmitQuiz}>Submit Quiz</Button>

          {result ? <QuizResultCard result={result} /> : null}
        </div>
      )}
    </DashboardLayout>
  );
};

export default QuizzesPage;