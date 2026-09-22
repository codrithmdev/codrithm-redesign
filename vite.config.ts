import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => ({
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    react(),
    tailwindcss(),
    nitro({ preset: mode === "spaceship" ? "node-server" : "vercel" }),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      "lucide-react": fileURLToPath(new URL("./src/components/icons.tsx", import.meta.url)),
    },
  },
  build: { target: "es2022", cssMinify: true },
}));
