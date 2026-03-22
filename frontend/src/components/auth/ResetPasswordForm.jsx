import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const ResetPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    setMessage('Reset password endpoint can be connected once backend is ready.');
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input
        label="New Password"
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <Button type="submit" className="w-full">
        Reset Password
      </Button>

      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
};

export default ResetPasswordForm;