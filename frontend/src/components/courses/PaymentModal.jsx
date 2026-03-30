import { useState } from "react";
import Modal from "../common/Modal";
import Button from "../common/Button";
import { createPaymentSession } from "../../api/paymentApi";
import toast from "react-hot-toast";

export default function PaymentModal({ isOpen, onClose, course }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const { data } = await createPaymentSession({
        courseId: course._id,
        price: course.price,
        courseName: course.title,
      });
      window.location.href = data.url; // Redirect to Stripe Checkout
    } catch (err) {
      toast.error("Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Complete Your Purchase">
      <div className="text-center">
        <h3 className="text-2xl font-bold">{course.title}</h3>
        <p className="text-5xl font-semibold my-6">₹{course.price}</p>
        <Button
          onClick={handlePayment}
          disabled={loading}
          className="w-full py-6 text-xl"
        >
          {loading ? "Redirecting to Stripe..." : "Pay Securely with Stripe"}
        </Button>
        <p className="text-xs text-gray-400 mt-8">
          🔒 Secured by Stripe • Instant access after payment
        </p>
      </div>
    </Modal>
  );
}
