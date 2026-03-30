// Simplified Dialog placeholder
const Dialog = ({ open, onOpenChange, children }) => {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'block' : 'hidden'}`}>
      {children}
    </div>
  );
};

const DialogContent = ({ children, className }) => (
  <div className={`bg-white rounded-2xl p-6 max-w-lg mx-auto mt-20 shadow-2xl max-h-[90vh] overflow-y-auto ${className}`}>
    {children}
  </div>
);

const DialogHeader = ({ children }) => <div className="mb-6">{children}</div>;
const DialogTitle = ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>;
const DialogTrigger = ({ children, asChild = false }) => (
  <button onClick={() => {}}>{children}</button>
);

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger };
