export default function FeaturedCourses({ courses }) {
  const placeholderCourses = [
    { id: 1, title: 'Complete JavaScript Mastery', instructor: 'John Doe', rating: 4.9 },
    { id: 2, title: 'Modern React & Next.js', instructor: 'Jane Smith', rating: 4.8 },
    { id: 3, title: 'Python for Data Science', instructor: 'Mike Johnson', rating: 4.9 },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {placeholderCourses.map(course => (
            <div key={course.id} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">JS</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
              <p className="text-gray-500 mb-6">by {course.instructor}</p>
              <div className="flex items-center gap-2 text-yellow-400">
                ★ {course.rating} (2,847)
              </div>
              <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
