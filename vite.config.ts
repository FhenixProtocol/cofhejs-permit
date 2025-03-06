/// <reference types="vitest" />

import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [wasm(), topLevelAwait()],
  test: {
    watch: false,
    include: [
      "test/**/*.test.ts",
      "test/**/*.test.js",
      "src/**/*.test.ts",
      "src/**/*.test.js",
    ],
    watchExclude: ["**/node_modules/**", "**/dist/**"],
    reporters: [
      "default",
      {
        async onWatcherRerun() {},
      },
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "json-summary"],
    },
  },
});
