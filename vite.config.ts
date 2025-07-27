import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig(() => ({ // Removed `mode` from destructuring as it's no longer used for componentTagger
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // componentTagger() and its conditional inclusion have been removed
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));