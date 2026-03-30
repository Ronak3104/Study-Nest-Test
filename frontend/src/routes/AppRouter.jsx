import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import RoleBasedRoute from "./RoleBasedRoute";

// Public Pages
import HomePage from "../pages/public/HomePage";
import AboutPage from "../pages/public/AboutPage";
import CoursesPage from "../pages/public/CoursesPage";
import CourseDetailsPage from "../pages/public/CourseDetailsPage";
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";
import ForgotPasswordPage from "../pages/public/ForgotPasswordPage";
import NotFoundPage from "../pages/public/NotFoundPage";

// Student Pages
import StudentDashboardPage from "../pages/student/StudentDashboardPage";
import MyCoursesPage from "../pages/student/MyCoursesPage";
import CourseLearnPage from "../pages/student/CourseLearnPage";
import AssignmentsPage from "../pages/student/AssignmentsPage";
import QuizzesPage from "../pages/student/QuizzesPage";
import ResultsPage from "../pages/student/ResultsPage";
import CertificatesPage from "../pages/student/CertificatesPage";
import ProfilePage from "../pages/student/ProfilePage";
import ReviewsPage from "../pages/student/ReviewsPage";

// Instructor Pages
import InstructorDashboardPage from "../pages/instructor/InstructorDashboardPage";
import ManageCoursesPage from "../pages/instructor/ManageCoursesPage";
import ManageAssignmentsPage from "../pages/instructor/ManageAssignmentsPage";
import ManageQuizzesPage from "../pages/instructor/ManageQuizzesPage";
import StudentSubmissionsPage from "../pages/instructor/StudentSubmissionsPage";

// Admin Pages
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";
import AdminCoursesPage from "../pages/admin/AdminCoursesPage";
import AdminCertificatesPage from "../pages/admin/AdminCertificatesPage";
import AdminAnalyticsPage from "../pages/admin/AdminAnalyticsPage";
import AdminSettingsPage from "../pages/admin/AdminSettingsPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />

        {/* Auth Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        {/* Protected Student Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<StudentDashboardPage />} />
          <Route path="/my-courses" element={<MyCoursesPage />} />
          <Route path="/learn/:id" element={<CourseLearnPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Route>

        {/* Instructor Routes */}
        <Route element={<RoleBasedRoute allowedRoles={["teacher"]} />}>
          <Route
            path="/instructor/dashboard"
            element={<InstructorDashboardPage />}
          />
          <Route path="/instructor/courses" element={<ManageCoursesPage />} />
          <Route
            path="/instructor/assignments"
            element={<ManageAssignmentsPage />}
          />
          <Route path="/instructor/quizzes" element={<ManageQuizzesPage />} />
          <Route
            path="/instructor/submissions"
            element={<StudentSubmissionsPage />}
          />
        </Route>

        {/* Admin Routes */}
        <Route element={<RoleBasedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/courses" element={<AdminCoursesPage />} />
          <Route
            path="/admin/certificates"
            element={<AdminCertificatesPage />}
          />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/settings" element={<AdminSettingsPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
