export default function CourseFilters({ onFilter }) {
  return (
    <div className="flex gap-4 flex-wrap">
      <button
        onClick={() => onFilter("all")}
        className="px-6 py-3 bg-card rounded-2xl hover:bg-primary hover:text-white"
      >
        All
      </button>
      <button
        onClick={() => onFilter("paid")}
        className="px-6 py-3 bg-card rounded-2xl hover:bg-primary hover:text-white"
      >
        Paid
      </button>
      <button
        onClick={() => onFilter("free")}
        className="px-6 py-3 bg-card rounded-2xl hover:bg-primary hover:text-white"
      >
        Free
      </button>
    </div>
  );
}
