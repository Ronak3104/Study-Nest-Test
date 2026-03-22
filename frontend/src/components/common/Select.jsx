const Select = ({ label, error, options = [], className = '', ...props }) => {
  return (
    <div className="w-full">
      {label ? (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      ) : null}
      <select
        className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
    </div>
  );
};

export default Select;