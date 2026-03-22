import AuthLayout from '../../components/layout/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout title="Welcome Back" subtitle="Login to continue your learning journey">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;