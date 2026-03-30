export default function ProgressBar({ progress = 0, showLabel = true }) {
  return (
    <div className="space-y-2">
      <div className="h-3 bg-gray-700 rounded-3xl overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-success transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-400">Progress</span>
          <span className="text-white">{Math.round(progress)}%</span>
        </div>
      )}
    </div>
  );
}
