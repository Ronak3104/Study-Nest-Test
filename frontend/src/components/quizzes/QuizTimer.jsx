import { useEffect, useState } from 'react';

const QuizTimer = ({ durationInSeconds = 600, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
      Time Left: {minutes}:{String(seconds).padStart(2, '0')}
    </div>
  );
};

export default QuizTimer;