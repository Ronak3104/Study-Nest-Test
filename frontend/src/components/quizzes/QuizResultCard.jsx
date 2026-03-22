import Badge from '../common/Badge';

const QuizResultCard = ({ result }) => {
  const passed = (result?.score || 0) > 0;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-900">Quiz Result</h3>
        <Badge variant={passed ? 'success' : 'warning'}>
          {passed ? 'Completed' : 'Pending'}
        </Badge>
      </div>

      <p className="mt-5 text-4xl font-bold text-slate-900">{result?.score || 0}</p>
      <p className="mt-2 text-sm text-slate-500">Your final quiz score</p>
    </div>
  );
};

export default QuizResultCard;