import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Loader from '../../components/common/Loader';
import ErrorState from '../../components/common/ErrorState';
import CourseVideoPlayer from '../../components/courses/CourseVideoPlayer';
import CourseCurriculum from '../../components/courses/CourseCurriculum';
import LessonList from '../../components/courses/LessonList';
import EnrollmentCard from '../../components/courses/EnrollmentCard';
import ReviewList from '../../components/courses/ReviewList';
import AddReviewForm from '../../components/courses/AddReviewForm';
import { getCourseById } from '../../api/courseApi';
import { getCourseReviews, addReview } from '../../api/reviewApi';

const CourseDetailsPage = () => {
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const response = await getCourseById(courseId);
        setCourseData(response.data);
        if (response.data?.lessons?.length) {
          setActiveLesson(response.data.lessons[0]);
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch course details');
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await getCourseReviews(courseId);
        setReviews(response.data || []);
      } catch {
        setReviews([]);
      }
    };

    fetchCourse();
    fetchReviews();
  }, [courseId]);

  const handleEnroll = () => {
    alert('Connect enrollment API action here');
  };

  const handleReviewSubmit = async (payload) => {
    try {
      setReviewLoading(true);
      await addReview({
        courseId,
        ...payload
      });

      const response = await getCourseReviews(courseId);
      setReviews(response.data || []);
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to submit review');
    } finally {
      setReviewLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Loader text="Loading course details..." />
        <Footer />
      </div>
    );
  }

  if (error || !courseData) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <ErrorState description={error || 'Course not found'} />
        </main>
        <Footer />
      </div>
    );
  }

  const { course, lessons } = courseData;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-medium text-brand-600">{course.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">{course.title}</h1>
          <p className="mt-4 max-w-3xl text-slate-600">{course.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            {activeLesson?.youtubeUrl ? (
              <CourseVideoPlayer youtubeUrl={activeLesson.youtubeUrl} />
            ) : null}

            <CourseCurriculum lessons={lessons || []} />
            <ReviewList reviews={reviews} />
            <AddReviewForm onSubmit={handleReviewSubmit} loading={reviewLoading} />
          </div>

          <div className="space-y-6">
            <EnrollmentCard course={course} onEnroll={handleEnroll} />
            <LessonList
              lessons={lessons || []}
              activeLessonId={activeLesson?._id}
              onSelectLesson={setActiveLesson}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetailsPage;