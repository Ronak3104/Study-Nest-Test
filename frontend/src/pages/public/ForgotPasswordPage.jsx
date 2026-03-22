import AuthLayout from '../../components/layout/AuthLayout';
import ForgotPasswordForm from '../../components/auth/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <AuthLayout title="Forgot Password" subtitle="Recover access to your account">
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;