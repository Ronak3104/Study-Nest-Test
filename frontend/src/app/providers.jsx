// src/app/providers.jsx
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store";

export default function Providers({ children }) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1e2937",
            color: "#fff",
            borderRadius: "16px",
          },
        }}
      />
    </>
  );
}
