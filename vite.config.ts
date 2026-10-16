import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

const PRERENDERED_ROUTES = [
  "/",
  "/services",
  "/services/ai-automation",
  "/services/software-development",
  "/services/ai-machine-learning",
  "/services/websites-wordpress",
  "/services/graphic-design-branding",
  "/work",
  "/about",
  "/community",
  "/contact",
];

export default defineConfig({
  plugins: [
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
      pages: PRERENDERED_ROUTES.map((path) => ({ path })),
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: false,
        autoSubfolderIndex: true,
        crawlLinks: true,
        failOnError: true,
        retryCount: 0,
      },
    }),
    react(),
    tailwindcss(),
  ],
});
