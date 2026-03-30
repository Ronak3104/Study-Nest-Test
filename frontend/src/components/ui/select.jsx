// Shadcn UI Select component - simplified placeholder
// In full project, use shadcn/ui select

const Select = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const SelectContent = ({ children }) => <div>{children}</div>;
const SelectItem = ({ children }) => <div>{children}</div>;
const SelectTrigger = ({ children }) => <div>{children}</div>;
const SelectValue = ({ children }) => <div>{children}</div>;

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
