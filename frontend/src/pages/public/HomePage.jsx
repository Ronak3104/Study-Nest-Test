import HeroSection from "../../components/home/HeroSection";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import Testimonials from "../../components/home/Testimonials";
import StatsSection from "../../components/home/StatsSection";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function HomePage() {
  // In real app you would fetch featured courses here
  const featuredCourses = []; // Will be populated via API in final version

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedCourses courses={featuredCourses} />
      <Testimonials />
      <StatsSection />
      <Footer />
    </>
  );
}
