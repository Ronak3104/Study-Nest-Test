import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import CourseVideoPlayer from "../../components/courses/CourseVideoPlayer";
import CourseCurriculum from "../../components/courses/CourseCurriculum";
import EnrollmentCard from "../../components/courses/EnrollmentCard";
import ReviewList from "../../components/courses/ReviewList";
import AddReviewForm from "../../components/courses/AddReviewForm";
import PaymentModal from "../../components/courses/PaymentModal";
import { getCourseById } from "../../api/courseApi";
import Loader from "../../components/common/Loader";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    getCourseById(id).then((res) => {
      setCourse(res.data.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-12 gap-12">
        {/* Left Content */}
        <div className="md:col-span-8">
          <h1 className="text-4xl font-bold">{course.title}</h1>
          <p className="text-gray-400 mt-4">{course.description}</p>

          <div className="mt-12">
            <CourseVideoPlayer youtubeLink={course.lessons?.[0]?.youtubeLink} />
          </div>

          <div className="mt-16">
            <CourseCurriculum lessons={course.lessons || []} />
          </div>

          <div className="mt-16">
            <ReviewList reviews={[]} />
            <AddReviewForm onSubmit={() => {}} />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-4">
          <EnrollmentCard
            course={course}
            onEnroll={() => setShowPayment(true)}
          />
        </div>
      </div>

      <PaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        course={course}
      />
    </>
  );
}
