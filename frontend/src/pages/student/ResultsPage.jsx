import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Loader from '../../components/common/Loader';
import ErrorState from '../../components/common/ErrorState';
import { getCourseResult } from '../../api/quizApi';

const ResultsPage = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await getCourseResult('demo-course-id').catch(() => ({ data: null }));
        setResult(response.data);
      } catch {
        setResult(null);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-slate-900">Results</h1>
      <p className="mt-2 text-slate-600">Track your performance in quizzes and assignments.</p>

      <div className="mt-8">
        {loading ? (
          <Loader text="Loading results..." />
        ) : result ? (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Assignment Score</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">{result.assignmentScore || 0}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Quiz Score</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">{result.quizScore || 0}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Total Score</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">{result.totalScore || 0}</p>
            </div>
          </div>
        ) : (
          <ErrorState description="No results available yet." />
        )}
      </div>
    </DashboardLayout>
  );
};

export default ResultsPage;