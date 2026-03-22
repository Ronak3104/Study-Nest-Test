export const formatDate = (date) => {
  if (!date) return 'N/A';

  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};

export const formatDateTime = (date) => {
  if (!date) return 'N/A';

  return new Date(date).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getRelativeDate = (date) => {
  if (!date) return 'N/A';

  const now = new Date();
  const target = new Date(date);
  const diffInMs = target - now;
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Tomorrow';
  if (diffInDays > 1) return `In ${diffInDays} days`;
  if (diffInDays === -1) return 'Yesterday';

  return `${Math.abs(diffInDays)} days ago`;
};