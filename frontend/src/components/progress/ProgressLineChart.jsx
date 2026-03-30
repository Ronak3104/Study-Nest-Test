import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ProgressLineChart({ data = [] }) {
  // data example: [{ day: 'Mon', progress: 45 }, ...]
  return (
    <div className="bg-card p-6 rounded-3xl">
      <h3 className="font-semibold mb-6">Learning Progress Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="day" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="progress"
            stroke="#6366f1"
            strokeWidth={4}
            dot={{ fill: "#a855f7", r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
