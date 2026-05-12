import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import { intlayer, intlayerProxy } from "vite-intlayer";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), intlayer(), intlayerProxy(), visualizer({
    emitFile: true,
    filename: "stats.html",
  }), tailwindcss()],
  preview: {
    allowedHosts: ["0.0.0.0", "localhost", "127.0.0.1", "l6j8d401tdqnr1y80i62nepe.95.216.220.168.sslip.io",".simonschreck.de"],
  }
});