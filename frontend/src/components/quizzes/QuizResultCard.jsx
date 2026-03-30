export default function QuizResultCard({ score, total }) {
  const percentage = Math.round((score / total) * 100);
  return (
    <div className="bg-card p-8 rounded-3xl text-center">
      <h2 className="text-5xl font-bold text-success">{percentage}%</h2>
      <p className="text-2xl mt-4">
        You scored {score} out of {total}
      </p>
    </div>
  );
}
