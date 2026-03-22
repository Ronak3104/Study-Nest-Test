import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-slate-900">About StudyNest</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            StudyNest is a Learning Management System designed to simplify digital learning.
            It enables students to enroll in courses, access lessons, submit assignments,
            take quizzes, track their progress, and earn certificates.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-3 text-slate-600">
                To provide a centralized, user-friendly, and structured learning platform
                for modern education.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Our Vision</h2>
              <p className="mt-3 text-slate-600">
                To create a scalable and professional LMS that enhances access,
                engagement, and academic performance.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;