import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileForm from '../../components/profile/ProfileForm';
import EnrolledCoursesList from '../../components/profile/EnrolledCoursesList';
import { getMyProfile, updateMyProfile } from '../../api/userApi';
import { getAllCourses } from '../../api/courseApi';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const [profileRes, coursesRes] = await Promise.all([
          getMyProfile(),
          getAllCourses().catch(() => ({ data: [] }))
        ]);

        setUser(profileRes.data);
        setCourses(coursesRes.data || []);
      } catch {
        setUser(null);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleUpdateProfile = async (payload) => {
    try {
      const response = await updateMyProfile(payload);
      setUser(response.data);
      alert('Profile updated successfully');
    } catch (error) {
      alert(error.response?.data?.message || 'Profile update failed');
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-slate-600">Loading profile...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ProfileHeader user={user} />
        <ProfileForm user={user} onSubmit={handleUpdateProfile} />
        <EnrolledCoursesList courses={courses} />
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;