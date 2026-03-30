import { cn } from "../../lib/utils";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-indigo-700",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    success: "bg-success text-white hover:bg-emerald-700",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
