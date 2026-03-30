import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getMyCourses, createCourse } from '../../api/courseApi';
import { getRecentSubmissions } from '../../api/submissionApi';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatsCard from '../../components/common/StatsCard';
import AddCourseModal from '../../components/instructor/AddCourseModal';
import RecentSubmissionsTable from '../../components/instructor/RecentSubmissionsTable';
import RecentCoursesTable from '../../components/instructor/RecentCoursesTable';

const InstructorDashboardPage = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ courses: 0, assignments: 0, quizzes: 0, students: 0 });
  const [loading, setLoading] = useState(true);
  const [recentCourses, setRecentCourses] = useState([]);
  const [recentSubmissions, setRecentSubmissions] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [coursesRes, submissionsRes] = await Promise.all([
          getMyCourses(user.id),
          getRecentSubmissions()
        ]);
        
        const courses = coursesRes.data.data;
        const coursesCount = courses.length;
        setRecentCourses(courses.slice(0, 5));
        setRecentSubmissions(submissionsRes.data.data.slice(0, 5));
        
        // Update stats
        setStats({
          courses: coursesCount,
          assignments: 12, // TODO: fetch from analytics
          quizzes: 8,
          students: 156
        });
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchDashboardData();
  }, [user]);

  const handleCourseAdded = () => {
    // Refresh courses data
    getMyCourses(user.id).then(res => {
      const courses = res.data.data;
      setRecentCourses(courses.slice(0, 5));
      setStats(prev => ({ ...prev, courses: courses.length }));
    });
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p>Loading dashboard...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Welcome back, {user.name}</h1>
            <p className="text-xl text-gray-500 mt-1">Quick access to manage your courses and content</p>
          </div>
          <AddCourseModal onSuccess={handleCourseAdded} />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard title="Total Courses" value={stats.courses} icon="📚" />
          <StatsCard title="Assignments" value={stats.assignments} icon="📝" />
          <StatsCard title="Quizzes" value={stats.quizzes} icon="🧠" />
          <StatsCard title="Students" value={stats.students} icon="👥" />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/instructor/assignments" className="group p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-200 hover:shadow-2xl transition-all hover:scale-[1.02]">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">Manage Assignments</h3>
            <p className="text-gray-500">Create and manage assignments</p>
          </Link>
          <Link to="/instructor/quizzes" className="group p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-200 hover:shadow-2xl transition-all hover:scale-[1.02]">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Manage Quizzes</h3>
            <p className="text-gray-500">Create quizzes and track progress</p>
          </Link>
          <Link to="/instructor/courses" className="group p-8 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-200 hover:shadow-2xl transition-all hover:scale-[1.02]">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold mb-2">Manage Courses</h3>
            <p className="text-gray-500">Edit course content and enrollment</p>
          </Link>
        </div>

        {/* Grid: Recent Courses + Recent Submissions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Courses */}
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6">Recent Courses</h2>
            {recentCourses.length > 0 ? (
              <div className="space-y-4">
                {recentCourses.map((course) => (
                  <div key={course._id} className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-white">{course.title[0].toUpperCase()}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg truncate">{course.title}</h3>
                      <p className="text-sm text-gray-500 truncate">{course.enrollments?.length || 0} students</p>
                    </div>
                    <Link to={`/instructor/courses/${course._id}`} className="text-blue-600 hover:text-blue-700 font-medium">
                      Manage →
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-12">No courses yet. Create your first course!</p>
            )}
          </div>

          {/* Recent Submissions */}
          <RecentSubmissionsTable submissions={recentSubmissions} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstructorDashboardPage;
