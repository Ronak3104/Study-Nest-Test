import { useEffect, useMemo, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import CourseCard from '../../components/courses/CourseCard';
import CourseSearch from '../../components/courses/CourseSearch';
import CourseFilters from '../../components/courses/CourseFilters';
import Loader from '../../components/common/Loader';
import EmptyState from '../../components/common/EmptyState';
import ErrorState from '../../components/common/ErrorState';
import { getAllCourses } from '../../api/courseApi';
import useDebounce from '../../hooks/useDebounce';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    level: '',
    price: ''
  });
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 400);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await getAllCourses();
        setCourses(response.data || []);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        course.description?.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesCategory = filters.category ? course.category === filters.category : true;
      const matchesLevel = filters.level ? course.level === filters.level : true;
      const matchesPrice =
        filters.price === 'free'
          ? course.price === 0
          : filters.price === 'paid'
          ? course.price > 0
          : true;

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });
  }, [courses, filters, debouncedSearch]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Explore Courses</h1>
          <p className="mt-3 text-slate-600">
            Browse all available courses and start learning with a structured experience.
          </p>
        </div>

        <div className="space-y-4">
          <CourseSearch value={search} onChange={(e) => setSearch(e.target.value)} />
          <CourseFilters filters={filters} setFilters={setFilters} />
        </div>

        <div className="mt-10">
          {loading ? (
            <Loader text="Loading courses..." />
          ) : error ? (
            <ErrorState description={error} />
          ) : filteredCourses.length === 0 ? (
            <EmptyState title="No courses found" description="Try changing your filters or search term." />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoursesPage;