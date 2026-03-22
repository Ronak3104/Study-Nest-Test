export const getToken = () => {
  return localStorage.getItem('studynest_token');
};

export const setToken = (token) => {
  localStorage.setItem('studynest_token', token);
};

export const removeToken = () => {
  localStorage.removeItem('studynest_token');
};

export const parseJwt = (token) => {
  try {
    if (!token) return null;

    const base64Payload = token.split('.')[1];
    const decodedPayload = atob(base64Payload);
    return JSON.parse(decodedPayload);
  } catch (error) {
    return null;
  }
};

export const isTokenExpired = (token) => {
  const decoded = parseJwt(token);

  if (!decoded || !decoded.exp) return true;

  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};