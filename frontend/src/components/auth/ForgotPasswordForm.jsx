import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Forgot password endpoint can be connected later from backend.');
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button type="submit" className="w-full">
        Send Reset Link
      </Button>

      {message ? <p className="text-sm text-emerald-600">{message}</p> : null}
    </form>
  );
};

export default ForgotPasswordForm;