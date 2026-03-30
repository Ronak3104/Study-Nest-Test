export default function Textarea({ label, ...props }) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <textarea
        className="w-full px-4 py-3 bg-card border border-gray-600 rounded-xl focus:outline-none focus:border-primary text-white"
        {...props}
      />
    </div>
  );
}
