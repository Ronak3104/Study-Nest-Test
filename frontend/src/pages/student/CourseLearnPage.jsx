import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import CourseVideoPlayer from "../../components/courses/CourseVideoPlayer";
import ProgressBar from "../../components/progress/ProgressBar";

export default function CourseLearnPage() {
  const { id } = useParams();
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">Learning: Course {id}</h1>
      <CourseVideoPlayer youtubeLink="https://youtu.be/dQw4w9wgxcQ" />
      <div className="mt-12">
        <ProgressBar progress={65} />
      </div>
    </DashboardLayout>
  );
}
