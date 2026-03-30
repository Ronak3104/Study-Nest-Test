export default function LessonList({ lessons }) {
  return (
    <div className="space-y-4">
      {lessons.map((lesson, i) => (
        <div
          key={lesson._id}
          className="flex items-center gap-4 bg-card p-4 rounded-2xl"
        >
          <span className="text-primary font-bold">{i + 1}</span>
          <div className="flex-1">
            <p className="font-medium">{lesson.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
