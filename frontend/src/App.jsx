import AppRouter from "./routes/AppRouter";
import Providers from "./app/providers";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Providers>
          <AppRouter />
        </Providers>
      </AuthProvider>
    </ThemeProvider>
  );
}
