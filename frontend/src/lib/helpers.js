export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const truncateText = (text = '', maxLength = 120) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

export const generateInitials = (name = '') => {
  const parts = name.trim().split(' ').filter(Boolean);

  if (parts.length === 0) return 'U';
  if (parts.length === 1) return parts[0][0].toUpperCase();

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
};