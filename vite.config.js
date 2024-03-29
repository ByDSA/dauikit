/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import { glob } from "glob";
import { extname, relative } from "node:path";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { viteStaticCopy } from "vite-plugin-static-copy";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const inputSourceFiles = Object.fromEntries(
  glob.sync("src/**/*.{ts,tsx}").map(file => {
    const ext = extname(file);
    const isCodeFile = ext === ".ts" || ext === ".tsx";
    // The name of the entry point
    // src/nested/foo.ts becomes nested/foo
    const relativePath = relative("src", file.slice(0, file.length - (isCodeFile ? ext.length : 0)));

    return [
      relativePath,
      // The absolute path to the entry file
      // src/nested/foo.ts becomes /project/src/nested/foo.ts
      file,
    ];} ),
);

export default defineConfig( {
  build: {
    lib: {
      entry: inputSourceFiles,
      formats: ["es"],
      name: "index",
    },
    rollupOptions: {
      input: inputSourceFiles,
      external: ["react", "react/jsx-runtime"],
    },
    output: {
      treeshake: true,
      entryFileNames: "[name].js",
      assetFileNames: "assets/[name].[ext]",
    },
    minify: true,
    outDir: "build",
  },
  plugins: [
    react(),
    libInjectCss(),
    dts( {
      include: ["src"],
    } ),
    svgr( {
      include: "**/*.svg?react",
    } ), // Import SVGs as React components
    tsconfigPaths(),
    viteStaticCopy( {
      targets: [
        {
          src: path.resolve(__dirname, "./src/styles"),
          dest: "./",
        },
        {
          src: path.resolve(__dirname, "./src/public"),
          dest: "./",
        },
      ],
    } ),
  ],
} );
