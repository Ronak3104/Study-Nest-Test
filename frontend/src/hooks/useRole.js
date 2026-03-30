import { useAuth } from "../context/AuthContext";

export default function useRole() {
  const { user } = useAuth();
  return {
    isAdmin: user?.role === "admin",
    isTeacher: user?.role === "teacher",
    isStudent: user?.role === "student",
  };
}
