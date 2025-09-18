import { COLORS } from "./constants/colors";

export default defineNuxtConfig({
  site: {
    name: "Dawid Merchwa",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      titleTemplate: "%s %separator Dawid Merchwa",
      templateParams: {
        separator: "·",
      },
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
      ],
    },
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: "remove",
      },
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxtjs/cloudinary",
    "nuxt-particles",
    "radix-vue/nuxt",
    "nuxt-svgo",
    "@vueuse/nuxt",
    "@vee-validate/nuxt",
    "@formkit/auto-animate/nuxt",
    "@pinia/nuxt",
    "nuxt-aos",
    "@vite-pwa/nuxt",
  ],
  imports: {
    dirs: ["constants/*"],
  },
  fonts: {
    defaults: {
      weights: [300, 400, 500],
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
            "fade-in": {
              from: {
                opacity: "0",
                filter: "blur(1rem)",
              },
              to: {
                opacity: "1",
                filter: "blur(0)",
              },
            },
            "hide": {
              from: {
                opacity: "1",
              },
              to: {
                opacity: "0",
              },
            },
            "slideIn": {
              from: {
                transform: "translateX(calc(100% + var(--viewport-padding)))",
              },
              to: {
                transform: "translateX(0)",
              },
            },
            "swipeOut": {
              from: {
                transform: "translateX(var(--radix-toast-swipe-end-x))",
              },
              to: {
                transform: "translateX(calc(100% + var(--viewport-padding)))",
              },
            },
          },
          animation: {
            "slide-down": "slide-down 0.3s ease-out",
            "slide-up": "slide-up 0.3s ease-out",
            "bounce-right": "bounce-right 1.5s ease-in-out",
            "fade-in": "fade-in 0.3s forwards",
            "hide": "hide 100ms ease-in",
            "slideIn": "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            "swipeOut": "swipeOut 100ms ease-out",
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
  veeValidate: {
    autoImports: true,
  },
  aos: {
    once: true,
    offset: 0,
    duration: 600,
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      lang: "en",
      name: "marchewa.dev",
      short_name: "marchewa.dev",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      start_url: "/",
      display: "standalone",
      orientation: "any",
      theme_color: "#ffffff",
      background_color: "#ffffff",
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.destination === "image" || /\.(?:png|jpe?g|gif|webp|svg)$/.test(request.url),
          handler: "CacheFirst",
          options: {
            cacheName: "images-cache",
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 7 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === "document",
          handler: "NetworkFirst",
          options: {
            cacheName: "pages-cache",
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 7 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === "font",
          handler: "CacheFirst",
          options: {
            cacheName: "fonts-cache",
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === "style" || request.destination === "script",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "assets-cache",
          },
        },
      ],
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "catppuccin-latte",
          langs: [
            "ts",
            "python",
            "vue",
            "php",
            "json",
          ],
        },
      },
    },
  },
});
