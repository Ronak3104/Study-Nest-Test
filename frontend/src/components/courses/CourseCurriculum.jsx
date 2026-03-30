import LessonList from "./LessonList";

export default function CourseCurriculum({ lessons }) {
  return (
    <div>
      <h3 className="font-semibold text-2xl mb-6">Course Curriculum</h3>
      <LessonList lessons={lessons} />
    </div>
  );
}
