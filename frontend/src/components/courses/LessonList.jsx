import { PlayCircle } from 'lucide-react';

const LessonList = ({ lessons = [], activeLessonId, onSelectLesson }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Lessons</h3>
      <div className="space-y-2">
        {lessons.map((lesson) => (
          <button
            key={lesson._id}
            onClick={() => onSelectLesson(lesson)}
            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
              activeLessonId === lesson._id
                ? 'bg-brand-50 text-brand-700'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <PlayCircle size={18} />
            <div>
              <p className="font-medium">{lesson.title}</p>
              <p className="text-xs text-slate-500">{lesson.duration || 'N/A'}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LessonList;