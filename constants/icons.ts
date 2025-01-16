export const UI_ICON_PROVIDER = "tabler" as const;

export const TECH_ICON_PROVIDER = "logos" as const;

export const TECH_CATEGORIES = [
  {
    category: "Programming Languages",
    icons: [
      { name: "python", label: "Python" },
      { name: "javascript", label: "JavaScript" },
      { name: "typescript-icon", label: "TypeScript" },
      { name: "php-alt", label: "PHP" },
    ],
  },
  {
    category: "Web Basics",
    icons: [
      { name: "html-5", label: "HTML5" },
      { name: "css-3", label: "CSS3" },
    ],
  },
  {
    category: "Preprocessors",
    icons: [
      { name: "sass", label: "Sass" },
    ],
  },
  {
    category: "Frameworks",
    icons: [
      { name: "vue", label: "Vue.js" },
      { name: "nuxt-icon", label: "Nuxt.js" },
      { name: "express", label: "Express.js" },
      { name: "fastapi-icon", label: "FastAPI" },
      { name: "django-icon", label: "Django" },
      { name: "laravel", label: "Laravel" },
    ],
  },
  {
    category: "Libraries",
    icons: [
      { name: "vueuse", label: "VueUse" },
      { name: "pinia", label: "Pinia" },
      { name: "socket-io", label: "Socket.IO" },
    ],
  },
  {
    category: "Databases",
    icons: [
      { name: "postgresql", label: "PostgreSQL" },
      { name: "mysql", label: "MySQL" },
      { name: "mongodb", label: "MongoDB" },
      { name: "redis", label: "Redis" },
    ],
  },
  {
    category: "Infrastructure",
    icons: [
      { name: "aws", label: "AWS" },
      { name: "docker-icon", label: "Docker" },
    ],
  },
  {
    category: "Testing",
    icons: [
      { name: "vitest", label: "Vitest" },
      { name: "cypress-icon", label: "Cypress" },
    ],
  },
  {
    category: "Operating Systems",
    icons: [
      { name: "linux-tux", label: "Linux" },
      { name: "fedora", label: "Fedora" },
      { name: "ubuntu", label: "Ubuntu" },
      { name: "microsoft-windows-icon", label: "Windows" },
    ],
  },
  {
    category: "Tools",
    icons: [
      { name: "pycharm", label: "PyCharm" },
      { name: "visual-studio-code", label: "Visual Studio Code" },
      { name: "git-icon", label: "Git" },
      { name: "github-copilot", label: "GitHub Copilot" },
      { name: "openai-icon", label: "ChatGPT" },
    ],
  },
] as const;
