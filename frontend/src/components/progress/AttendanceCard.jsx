import { Calendar } from "lucide-react";

export default function AttendanceCard({ attendanceData = [] }) {
  const presentCount = attendanceData.filter(
    (a) => a.status === "present",
  ).length;
  const total = attendanceData.length || 1;
  const percentage = Math.round((presentCount / total) * 100);

  return (
    <div className="bg-card p-6 rounded-3xl">
      <div className="flex items-center gap-3 mb-4">
        <Calendar size={24} className="text-success" />
        <h3 className="font-semibold text-lg">Attendance</h3>
      </div>
      <div className="text-center">
        <div className="text-6xl font-bold text-success">{percentage}%</div>
        <p className="text-gray-400 text-sm mt-1">
          {presentCount} / {total} days present
        </p>
      </div>
    </div>
  );
}
