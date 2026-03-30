import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import { useAuthStore } from "../../app/store";
import Button from "../common/Button";
import Input from "../common/Input";
import { LogIn } from "lucide-react";
import toast from "react-hot-toast";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, setToken } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await loginUser({ email, password });
      setToken(data.token);
      setUser(data.user);
      toast.success("Welcome back to StudyNest!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Welcome Back
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button variant="primary" className="w-full" disabled={loading}>
          {loading ? (
            "Signing in..."
          ) : (
            <>
              Sign In <LogIn size={20} />
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 text-center text-gray-400">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary hover:underline">
          Register
        </Link>
      </div>
    </div>
  );
}
