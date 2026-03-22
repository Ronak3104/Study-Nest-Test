export const getErrorMessage = (error) => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }

  if (error?.message) {
    return error.message;
  }

  return 'Something went wrong. Please try again.';
};

export const getFieldErrors = (error) => {
  if (error?.response?.data?.errors) {
    return error.response.data.errors;
  }

  return null;
};

export const logError = (error, context = 'Application Error') => {
  console.error(`[${context}]`, error);
};