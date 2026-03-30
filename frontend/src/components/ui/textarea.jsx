const Textarea = ({ className, ...props }) => (
  <textarea 
    className={`flex min-h-[80px] w-full rounded-xl border border-gray-200 bg-transparent px-4 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`} 
    {...props} 
  />
);

export { Textarea };
