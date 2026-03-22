const QuizQuestion = ({ question, index, selectedAnswer, onChange }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <p className="text-sm font-medium text-brand-700">Question {index + 1}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{question.question}</h3>

      <div className="mt-5 space-y-3">
        {question.options?.map((option, optionIndex) => (
          <label
            key={optionIndex}
            className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${
              selectedAnswer === optionIndex
                ? 'border-brand-500 bg-brand-50'
                : 'border-slate-200 hover:bg-slate-50'
            }`}
          >
            <input
              type="radio"
              name={`question-${index}`}
              checked={selectedAnswer === optionIndex}
              onChange={() => onChange(index, optionIndex)}
            />
            <span className="text-sm text-slate-700">
              {option.text || option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;