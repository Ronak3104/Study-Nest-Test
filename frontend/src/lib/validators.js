export const isValidEmail = (email = '') => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPassword = (password = '') => {
  return password.length >= 6;
};

export const isRequired = (value) => {
  return value !== undefined && value !== null && String(value).trim() !== '';
};

export const isValidYouTubeUrl = (url = '') => {
  return /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/.test(url);
};

export const isValidUrl = (url = '') => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};