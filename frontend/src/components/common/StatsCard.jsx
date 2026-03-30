const StatsCard = ({ title, value, icon, trend = null }) => {
  return (
    <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-xl border border-white/30 hover:shadow-2xl transition-all hover:-translate-y-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
          {trend && (
            <p className="text-sm text-emerald-600 mt-1 font-medium">
              +12% from last month
            </p>
          )}
        </div>
        <div className="text-4xl opacity-75 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
