export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-10">
          <img src="/logo.png" alt="StudyNest" className="h-12" />
        </div>
        {children}
      </div>
    </div>
  );
}
