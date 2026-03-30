export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'StudyNest transformed how I learn. The interactive quizzes and progress tracking are game-changers!',
      role: 'Software Engineer',
    },
    {
      name: 'Mike Chen',
      text: 'Best platform for teachers too. Easy to create assignments and track student progress in real-time.',
      role: 'Math Teacher',
    },
    {
      name: 'Emma Davis',
      text: 'Earned 3 certificates in a month. The instant certificates look professional and helped my resume.',
      role: 'Career Switcher',
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-gray-900">What Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">SJ</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
