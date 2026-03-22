import { Search } from 'lucide-react';

const CourseSearch = ({ value, onChange }) => {
  return (
    <div className="relative">
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search courses by title or keyword..."
        className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
      />
    </div>
  );
};

export default CourseSearch;