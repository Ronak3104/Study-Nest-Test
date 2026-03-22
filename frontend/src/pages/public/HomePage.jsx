import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import HeroSection from '../../components/home/HeroSection';
import StatsSection from '../../components/home/StatsSection';
import FeaturedCourses from '../../components/home/FeaturedCourses';
import Testimonials from '../../components/home/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturedCourses />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;