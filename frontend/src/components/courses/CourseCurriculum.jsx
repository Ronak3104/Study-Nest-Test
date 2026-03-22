import { PlayCircle } from 'lucide-react';

const CourseCurriculum = ({ lessons = [] }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-900">Course Curriculum</h3>
      <div className="mt-6 space-y-3">
        {lessons.map((lesson, index) => (
          <div
            key={lesson._id || index}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-center gap-3">
              <PlayCircle size={20} className="text-brand-600" />
              <div>
                <p className="font-medium text-slate-900">{lesson.title}</p>
                <p className="text-sm text-slate-500">{lesson.description}</p>
              </div>
            </div>
            <span className="text-sm text-slate-500">{lesson.duration || 'N/A'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;