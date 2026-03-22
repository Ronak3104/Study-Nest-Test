import { CalendarCheck2 } from 'lucide-react';

const AttendanceCard = ({ totalAttended = 0, totalLessons = 0 }) => {
  const percentage = totalLessons ? Math.round((totalAttended / totalLessons) * 100) : 0;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700">
        <CalendarCheck2 size={22} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">Attendance</h3>
      <p className="mt-2 text-sm text-slate-600">
        {totalAttended} of {totalLessons} lessons attended
      </p>
      <p className="mt-4 text-3xl font-bold text-slate-900">{percentage}%</p>
    </div>
  );
};

export default AttendanceCard;