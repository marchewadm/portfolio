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
    "@nuxt/content",
    "nuxt-particles",
    "radix-vue/nuxt",
    "nuxt-svgo",
    "@vueuse/nuxt",
  ],
  imports: {
    dirs: ["constants/*"],
  },
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
            "xs-above": "0px -3px 10px 0px rgba(102, 102, 102, 25%)",
            "xs-below": "0px 3px 10px 0px rgba(102, 102, 102, 25%)",
          },
          keyframes: {
            "slide-down": {
              from: {
                height: "0",
              },
              to: {
                height: "var(--radix-accordion-content-height)",
              },
            },
            "slide-up": {
              from: {
                height: "var(--radix-accordion-content-height)",
              },
              to: {
                height: "0",
              },
            },
            "bounce-right": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateX(0)",
              },
              "40%": {
                transform: "translateX(15px)",
              },
              "60%": {
                transform: "translateX(7.5px)",
              },
            },
          },
          animation: {
            "slide-down": "slide-down 0.3s ease-out",
            "slide-up": "slide-up 0.3s ease-out",
            "bounce-right": "bounce-right 1.5s ease-in-out",
          },
        },
        fontFamily: {
          custom: ["Inter", "sans-serif"],
        },
      },
    },
  },
  css: ["@/assets/css/index.css"],
  particles: {
    mode: "slim",
  },
  svgo: {
    autoImportPath: "./assets/svg/",
  },
});