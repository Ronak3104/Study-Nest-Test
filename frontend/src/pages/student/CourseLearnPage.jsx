import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import CourseVideoPlayer from '../../components/courses/CourseVideoPlayer';
import LessonList from '../../components/courses/LessonList';
import Loader from '../../components/common/Loader';
import ErrorState from '../../components/common/ErrorState';
import { getCourseById } from '../../api/courseApi';

const CourseLearnPage = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await getCourseById(courseId);
        setCourseData(response.data);
        setActiveLesson(response.data?.lessons?.[0] || null);
      } catch {
        setCourseData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  if (loading) {
    return (
      <DashboardLayout>
        <Loader text="Loading course..." />
      </DashboardLayout>
    );
  }

  if (!courseData) {
    return (
      <DashboardLayout>
        <ErrorState description="Unable to load course lessons." />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <h1 className="mb-6 text-3xl font-bold text-slate-900">{courseData.course.title}</h1>
          {activeLesson ? (
            <CourseVideoPlayer youtubeUrl={activeLesson.youtubeUrl} />
          ) : (
            <ErrorState description="No lesson selected." />
          )}
        </div>

        <LessonList
          lessons={courseData.lessons || []}
          activeLessonId={activeLesson?._id}
          onSelectLesson={setActiveLesson}
        />
      </div>
    </DashboardLayout>
  );
};

export default CourseLearnPage;