import { AlertCircle } from "lucide-react";

export default function ErrorState({
  message = "Something went wrong",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="bg-red-500/10 text-red-400 p-4 rounded-3xl mb-6">
        <AlertCircle size={48} />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-2">Oops!</h3>
      <p className="text-gray-400 max-w-xs">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-8 px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-2xl transition"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
