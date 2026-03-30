export const handleApiError = (error) => {
  return (
    error.response?.data?.message || "Something went wrong. Please try again."
  );
};
