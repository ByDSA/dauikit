/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig( {
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // Por si fuera tsx, para parsearlo y se pueda importar como index
      name: "dauikit",

      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
    outDir: "build",
  },
  plugins: [react()],
} );
