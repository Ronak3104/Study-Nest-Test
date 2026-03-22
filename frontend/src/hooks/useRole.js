import useAuth from './useAuth';

const useRole = () => {
  const { user } = useAuth();

  return {
    role: user?.role || null,
    isStudent: user?.role === 'student',
    isInstructor: user?.role === 'instructor',
    isAdmin: user?.role === 'admin'
  };
};

export default useRole;