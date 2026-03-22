const Drawer = ({ isOpen, title, children, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform bg-white shadow-soft transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between border-b border-slate-200 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Drawer;