export default function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && <p className="text-gray-400 mt-2 text-lg">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
