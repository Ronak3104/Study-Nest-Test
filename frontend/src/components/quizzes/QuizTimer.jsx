import { useState, useEffect } from "react";

export default function QuizTimer({ duration, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [duration, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-2xl font-mono bg-red-500/10 text-red-400 px-6 py-3 rounded-2xl">
      {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}
