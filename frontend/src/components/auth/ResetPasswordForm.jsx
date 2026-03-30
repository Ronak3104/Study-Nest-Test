import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import toast from "react-hot-toast";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
      return toast.error("Passwords don't match");
    // TODO: Add reset API later
    toast.success("Password reset successful!");
  };

  return (
    <div className="bg-card p-8 rounded-3xl">
      <h2 className="text-3xl font-bold mb-8">Reset Password</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="primary" className="w-full">
          Reset Password
        </Button>
      </form>
    </div>
  );
}
