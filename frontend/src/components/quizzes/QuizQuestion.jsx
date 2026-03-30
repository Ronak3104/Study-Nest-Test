export default function QuizQuestion({ question, selected, onSelect }) {
  return (
    <div className="bg-card p-8 rounded-3xl">
      <p className="text-2xl font-medium mb-8">{question.question}</p>
      <div className="space-y-4">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`w-full text-left p-5 rounded-2xl border-2 transition ${
              selected === i
                ? "border-primary bg-primary/10"
                : "border-gray-600 hover:border-primary"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
