const QuizCard = ({ quiz }) => {
  return (
    <div className="bg-card p-6 rounded-3xl hover:shadow-lg transition-all border border-gray-200">
      <h4 className="font-semibold text-xl mb-2">{quiz.title}</h4>
      <p className="text-gray-400 line-clamp-2 mb-4">{quiz.description || 'Multiple choice quiz with ' + quiz.questions.length + ' questions'}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{quiz.questions.length} questions</span>
        <span className="font-medium text-emerald-600">
          Max score: {quiz.maxScore || 100} points
        </span>
      </div>
    </div>
  );
};

export default QuizCard;
