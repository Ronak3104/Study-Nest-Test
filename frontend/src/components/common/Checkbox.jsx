export default function Checkbox({
  label,
  checked,
  onChange,
  className = "",
  ...props
}) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 accent-primary bg-card border border-gray-600 rounded-lg focus:ring-primary"
        {...props}
      />
      {label && <span className="text-gray-300">{label}</span>}
    </label>
  );
}
