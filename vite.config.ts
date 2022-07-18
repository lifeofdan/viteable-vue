/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      port: 24678
    }
  },
  plugins: [vue()],
  test: {
    include: ["./tests/unit/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"],
    },
  },
});
