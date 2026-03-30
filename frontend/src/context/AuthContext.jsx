import { createContext, useContext } from "react";
import { useAuthStore } from "../app/store";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const store = useAuthStore();
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
