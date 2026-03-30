import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";
import Button from "../common/Button";
import Input from "../common/Input";
import { UserPlus } from "lucide-react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("📤 Sending data to backend:", form);

      await registerUser(form);

      toast.success("✅ Account created successfully! Please login now.");
      navigate("/login");
    } catch (err) {
      const serverMessage =
        err.response?.data?.message ||
        err.message ||
        "Registration failed. Please try again.";

      console.error("❌ Registration failed:", err.response?.data || err);
      toast.error(serverMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card p-8 rounded-3xl shadow-2xl max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password (minimum 6 characters)"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <Button
          variant="primary"
          className="w-full py-3 text-lg"
          disabled={loading}
        >
          {loading ? (
            "Creating Account..."
          ) : (
            <>
              Register <UserPlus size={20} />
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 text-center text-gray-400">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Login here
        </Link>
      </div>
    </div>
  );
}
