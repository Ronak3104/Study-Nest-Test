const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Student',
    feedback:
      'StudyNest made learning simple and organized. The dashboard, progress tracking, and certificates feel very professional.'
  },
  {
    name: 'Amit Verma',
    role: 'Learner',
    feedback:
      'I loved the clean course structure and YouTube-based lessons. It was easy to follow and complete assignments.'
  },
  {
    name: 'Sneha Kulkarni',
    role: 'MCA Student',
    feedback:
      'The platform is smooth, modern, and perfect for online learning. Admin and course management features are excellent.'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">What Learners Say</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Feedback from students who experienced structured and engaging digital learning.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-slate-700 leading-7">“{item.feedback}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;