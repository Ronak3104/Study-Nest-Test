// Simplified Popover for date picker
const Popover = ({ children, trigger, content }) => {
  return (
    <div className="relative">
      {trigger}
      <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg z-50 p-4 border">
        {content}
      </div>
    </div>
  );
};

const PopoverContent = ({ children }) => children;
const PopoverTrigger = ({ children, asChild }) => children;

export { Popover, PopoverContent, PopoverTrigger };
