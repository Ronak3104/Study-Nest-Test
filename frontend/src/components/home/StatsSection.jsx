export default function StatsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-6xl mx-auto text-center text-white">
        <div className="grid md:grid-cols-4 gap-12 items-center">
          <div>
            <div className="text-5xl font-bold mb-4">10K+</div>
            <div className="text-xl opacity-90">Happy Students</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-4">500+</div>
            <div className="text-xl opacity-90">Courses Live</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-4">50K+</div>
            <div className="text-xl opacity-90">Assignments Completed</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-4">4.9⭐</div>
            <div className="text-xl opacity-90">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
