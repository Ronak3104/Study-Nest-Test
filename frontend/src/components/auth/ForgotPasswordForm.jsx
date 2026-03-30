import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import toast from "react-hot-toast";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Add forgot password API later
    toast.success("Password reset link sent to your email!");
    setLoading(false);
  };

  return (
    <div className="bg-card p-8 rounded-3xl">
      <h2 className="text-3xl font-bold mb-2">Forgot Password?</h2>
      <p className="text-gray-400 mb-8">
        Enter your email and we'll send you a reset link.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button variant="primary" className="w-full mt-6" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
      </form>
    </div>
  );
}
