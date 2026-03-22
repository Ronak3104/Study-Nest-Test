import AuthProvider from '../context/AuthContext';
import ThemeProvider from '../context/ThemeContext';

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;