import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Smart Learning,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Simplified</span>.
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90">Master skills with interactive courses, live tracking & instant certificates.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Link to="/courses" className="px-12 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all">Browse Courses</Link>
          <Link to="/register" className="px-12 py-4 border-2 border-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">Get Started Free</Link>
        </div>
      </div>
    </section>
  );
}
