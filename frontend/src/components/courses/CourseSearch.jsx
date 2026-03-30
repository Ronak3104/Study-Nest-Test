import { Search } from "lucide-react";

export default function CourseSearch({ onSearch }) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search courses..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-12 pr-6 py-4 bg-card border border-gray-600 rounded-3xl focus:border-primary outline-none"
      />
    </div>
  );
}
