import DashboardLayout from "../../components/layout/DashboardLayout";
import AddReviewForm from "../../components/courses/AddReviewForm";

export default function ReviewsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">My Reviews</h1>
      <AddReviewForm onSubmit={() => {}} />
    </DashboardLayout>
  );
}
