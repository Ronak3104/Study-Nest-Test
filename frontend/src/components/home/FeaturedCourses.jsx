import CourseCard from '../courses/CourseCard';

const demoCourses = [
  {
    _id: '1',
    title: 'React for Beginners',
    description: 'Learn modern React from fundamentals to hooks and routing.',
    category: 'Web Development',
    level: 'beginner',
    duration: '6 weeks',
    price: 0,
    averageRating: 4.7,
    totalEnrollments: 320,
    instructor: { name: 'Demo Instructor' }
  },
  {
    _id: '2',
    title: 'Node.js and Express Masterclass',
    description: 'Build scalable backend APIs using Node.js, Express and MongoDB.',
    category: 'Backend Development',
    level: 'intermediate',
    duration: '8 weeks',
    price: 499,
    averageRating: 4.8,
    totalEnrollments: 280,
    instructor: { name: 'Demo Instructor' }
  },
  {
    _id: '3',
    title: 'MongoDB Atlas Complete Guide',
    description: 'Master MongoDB Atlas, schema design, CRUD, aggregation and indexing.',
    category: 'Database',
    level: 'beginner',
    duration: '4 weeks',
    price: 299,
    averageRating: 4.6,
    totalEnrollments: 210,
    instructor: { name: 'Demo Instructor' }
  }
];

const FeaturedCourses = ({ courses = demoCourses }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Featured Courses</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Start with handpicked courses designed to help you build practical skills with clarity and structure.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.slice(0, 3).map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;