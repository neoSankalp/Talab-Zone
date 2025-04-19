import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "6e07-2401-4900-8843-d25-4488-b04a-9427-e370.ngrok-free.app",
    ],
  },
});
