import DashboardLayout from '../../components/layout/DashboardLayout';
import ReviewList from '../../components/courses/ReviewList';
import AddReviewForm from '../../components/courses/AddReviewForm';

const ReviewsPage = () => {
  const demoReviews = [
    {
      _id: '1',
      rating: 5,
      comment: 'Great course and excellent teaching style.',
      userId: { name: 'Demo Student' }
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Reviews</h1>
          <p className="mt-2 text-slate-600">Manage your course feedback and reviews.</p>
        </div>

        <ReviewList reviews={demoReviews} />
        <AddReviewForm onSubmit={(data) => console.log(data)} />
      </div>
    </DashboardLayout>
  );
};

export default ReviewsPage;