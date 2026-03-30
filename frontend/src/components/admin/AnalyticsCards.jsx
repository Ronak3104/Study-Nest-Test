export default function AnalyticsCards({ data }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-card p-6 rounded-3xl">
        <h4 className="text-sm uppercase tracking-widest">Total Revenue</h4>
        <p className="text-5xl font-bold text-success mt-2">
          ₹{data.revenue || "0"}
        </p>
      </div>
      <div className="bg-card p-6 rounded-3xl">
        <h4 className="text-sm uppercase tracking-widest">
          Avg. Course Rating
        </h4>
        <p className="text-5xl font-bold text-primary mt-2">
          {data.avgRating || "4.8"}
        </p>
      </div>
    </div>
  );
}
