import { HelpCircle } from 'lucide-react';
import Button from '../common/Button';

const QuizCard = ({ quiz, onStart }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700">
        <HelpCircle size={22} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{quiz.title}</h3>
      <p className="mt-2 text-sm text-slate-500">{quiz.questions?.length || 0} questions</p>
      <Button className="mt-6" onClick={() => onStart?.(quiz)}>
        Start Quiz
      </Button>
    </div>
  );
};

export default QuizCard;