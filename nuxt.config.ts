import { COLORS } from "./constants/colors";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  fonts: {
    defaults: {
      weights: [100, 300, 400, 500],
      styles: ["normal"],
    },
    families: [{ name: "Inter", provider: "google" }],
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: COLORS,
          boxShadow: {
            xs: "0px -3px 10px 0px rgba(102, 102, 102, 25%)",
          },
        },
        fontFamily: {
          custom: ["Inter", "sans-serif"],
        },
      },
    },
  },
  css: ["@/assets/css/index.css"],
});
