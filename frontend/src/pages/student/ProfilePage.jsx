// src/pages/student/ProfilePage.jsx
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileForm from "../../components/profile/ProfileForm";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import { useAuthStore } from "../../app/store";
import { getProfile } from "../../api/userApi";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { user, setUser, token } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        setError("You are not logged in");
        setLoading(false);
        return;
      }

      try {
        const { data } = await getProfile();
        setUser(data.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to load profile");
        toast.error("Session expired. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, setUser]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-96">
          <Loader />
        </div>
      </DashboardLayout>
    );
  }

  if (error || !user) {
    return (
      <DashboardLayout>
        <ErrorState
          message={error || "Unable to load profile"}
          onRetry={() => window.location.reload()}
        />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <ProfileHeader user={user} />
        <div className="mt-12 bg-card rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
          <ProfileForm
            user={user}
            onSave={(updatedData) => {
              setUser({ ...user, ...updatedData });
              toast.success("Profile updated successfully!");
            }}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
