import Button from "../common/Button";

export default function EnrollmentCard({ course, onEnroll }) {
  return (
    <div className="bg-card p-8 rounded-3xl text-center">
      <h3 className="text-3xl font-bold">Enroll Now</h3>
      <p className="text-5xl font-semibold mt-4">₹{course.price || "Free"}</p>
      <Button onClick={onEnroll} className="mt-8 w-full text-xl py-6">
        Enroll in Course
      </Button>
    </div>
  );
}
