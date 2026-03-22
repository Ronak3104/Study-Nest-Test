import AuthLayout from '../../components/layout/AuthLayout';
import RegisterForm from '../../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthLayout title="Create Your Account" subtitle="Join StudyNest and start learning today">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;