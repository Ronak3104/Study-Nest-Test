import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl font-bold text-brand-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">Page Not Found</h2>
        <p className="mt-4 text-slate-600">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;