import { X } from "lucide-react";

export default function Drawer({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed right-0 top-0 h-full w-96 bg-card border-l border-gray-700 shadow-2xl z-[60] transform transition-transform duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto h-[calc(100vh-73px)]">
          {children}
        </div>
      </div>
    </>
  );
}
