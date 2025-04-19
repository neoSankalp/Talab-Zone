import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "f88f-2401-4900-8843-76f8-51aa-e9ea-c578-d271.ngrok-free.app",
    ],
  },
});
