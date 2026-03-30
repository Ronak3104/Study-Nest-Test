import Button from "./Button";

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmText = "Yes, Proceed",
  cancelText = "Cancel",
  variant = "danger",
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-card w-full max-w-md mx-4 rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-8">{message}</p>

        <div className="flex gap-4">
          <Button variant="outline" onClick={onClose} className="flex-1">
            {cancelText}
          </Button>
          <Button
            variant={variant === "danger" ? "success" : "primary"} // danger uses red-ish but we keep success for confirm
            onClick={onConfirm}
            className="flex-1"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
