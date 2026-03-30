import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <p className="text-3xl mt-4">Page Not Found</p>
        <Link
          to="/"
          className="mt-10 inline-block bg-primary text-white px-10 py-4 rounded-3xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
