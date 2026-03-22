const Loader = ({ text = 'Loading...' }) => {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-brand-600" />
      <p className="text-sm text-slate-600">{text}</p>
    </div>
  );
};

export default Loader;