export const storage = {
  getToken: () => localStorage.getItem('studynest_token'),

  setToken: (token) => {
    localStorage.setItem('studynest_token', token);
  },

  removeToken: () => {
    localStorage.removeItem('studynest_token');
  },

  getUser: () => {
    const user = localStorage.getItem('studynest_user');
    return user ? JSON.parse(user) : null;
  },

  setUser: (user) => {
    localStorage.setItem('studynest_user', JSON.stringify(user));
  },

  removeUser: () => {
    localStorage.removeItem('studynest_user');
  },

  clearAuth: () => {
    localStorage.removeItem('studynest_token');
    localStorage.removeItem('studynest_user');
  }
};