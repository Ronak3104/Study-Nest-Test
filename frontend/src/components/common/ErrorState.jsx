const ErrorState = ({ title = 'Something went wrong', description = 'Please try again later.' }) => {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <h3 className="text-lg font-semibold text-red-700">{title}</h3>
      <p className="mt-2 text-sm text-red-600">{description}</p>
    </div>
  );
};

export default ErrorState;