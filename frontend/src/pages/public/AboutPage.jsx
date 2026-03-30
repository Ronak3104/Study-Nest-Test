import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-center">About StudyNest</h1>
        <p className="mt-10 text-xl text-gray-300 text-center">
          A modern Learning Management System built for MCA students at D.Y.
          Patil University.
          <br />
          Smart learning, simplified.
        </p>
      </div>
      <Footer />
    </>
  );
}
