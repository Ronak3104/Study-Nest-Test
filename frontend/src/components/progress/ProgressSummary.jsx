import ProgressBar from './ProgressBar';

const ProgressSummary = ({ progress }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Progress Summary</h3>

      <div className="mt-6">
        <ProgressBar value={progress?.percentage || 0} />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Completed Lessons</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {progress?.completedLessons?.length || 0}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Completed Assignments</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {progress?.completedAssignments?.length || 0}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Completed Quizzes</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            {progress?.completedQuizzes?.length || 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;