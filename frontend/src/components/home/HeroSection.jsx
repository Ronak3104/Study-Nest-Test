import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-slate-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700">
            StudyNest — Smart Learning, Simplified
          </span>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Learn Smarter with a Professional LMS Built for Students
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore structured courses, video-based lessons, assignments, quizzes,
            progress tracking, and certificates — all in one modern platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/register">
              <Button size="lg" className="gap-2">
                Start Learning
                <ArrowRight size={18} />
              </Button>
            </Link>

            <Link to="/courses">
              <Button variant="secondary" size="lg">
                Browse Courses
              </Button>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <BookOpen className="mb-3 text-brand-600" size={22} />
              <p className="font-semibold text-slate-900">Structured Courses</p>
              <p className="mt-1 text-sm text-slate-600">Well-organized curriculum and lessons</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <GraduationCap className="mb-3 text-brand-600" size={22} />
              <p className="font-semibold text-slate-900">Certificates</p>
              <p className="mt-1 text-sm text-slate-600">Earn certificates on completion</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <ShieldCheck className="mb-3 text-brand-600" size={22} />
              <p className="font-semibold text-slate-900">Secure Access</p>
              <p className="mt-1 text-sm text-slate-600">Role-based access for all users</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="rounded-3xl bg-slate-900 p-6 text-white">
              <div className="grid gap-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-slate-300">Current Progress</p>
                  <p className="mt-2 text-3xl font-bold">78%</p>
                  <div className="mt-4 h-3 rounded-full bg-white/20">
                    <div className="h-3 w-[78%] rounded-full bg-brand-500" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Courses Enrolled</p>
                    <p className="mt-2 text-2xl font-bold">12</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-300">Certificates Earned</p>
                    <p className="mt-2 text-2xl font-bold">4</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-slate-300">Upcoming Assignment</p>
                  <p className="mt-2 font-semibold">React Project Submission</p>
                  <p className="mt-1 text-sm text-slate-300">Due in 2 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;