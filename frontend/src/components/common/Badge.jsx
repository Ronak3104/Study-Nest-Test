export default function Badge({ children, color = "primary" }) {
  const colors = {
    primary: "bg-primary text-white",
    success: "bg-success text-white",
    accent: "bg-accent text-white",
  };
  return (
    <span
      className={`px-4 py-1 text-xs font-semibold rounded-full ${colors[color]}`}
    >
      {children}
    </span>
  );
}
