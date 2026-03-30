import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function DemographicsCharts({ roleDistribution = [] }) {
  const COLORS = ["#6366f1", "#a855f7", "#10b981"];

  return (
    <div className="bg-card p-6 rounded-3xl">
      <h3 className="font-semibold mb-6">User Role Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={roleDistribution}
            dataKey="count"
            nameKey="_id"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {roleDistribution.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
