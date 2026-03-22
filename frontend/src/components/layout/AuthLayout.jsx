const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-soft lg:grid-cols-2">
        <div className="hidden bg-brand-600 p-10 text-white lg:block">
          <h1 className="text-4xl font-bold">StudyNest</h1>
          <p className="mt-4 text-brand-100">
            Smart Learning, Simplified. Learn with a modern and professional LMS experience.
          </p>
          <div className="mt-10 rounded-2xl bg-white/10 p-6">
            <p className="text-sm leading-7 text-brand-50">
              Access courses, assignments, quizzes, progress tracking, and certificates — all in one place.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
            {subtitle ? <p className="mt-2 text-sm text-slate-600">{subtitle}</p> : null}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;