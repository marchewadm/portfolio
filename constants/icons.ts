export const UI_ICON_PROVIDER = "tabler" as const;

export const TECH_ICON_PROVIDER = "logos" as const;

export const TECH_CATEGORIES = [
  {
    category: "Programming Languages",
    icons: [
      { name: "python", label: "Python", url: "https://www.python.org/" },
      { name: "javascript", label: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "typescript-icon", label: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "php-alt", label: "PHP", url: "https://www.php.net/" },
    ],
  },
  {
    category: "Web Basics",
    icons: [
      { name: "html-5", label: "HTML5", url: "https://html.spec.whatwg.org/" },
      { name: "css-3", label: "CSS3", url: "https://www.w3.org/TR/css/" },
    ],
  },
  {
    category: "Preprocessors",
    icons: [
      { name: "sass", label: "Sass", url: "https://sass-lang.com/" },
    ],
  },
  {
    category: "Frameworks",
    icons: [
      { name: "vue", label: "Vue.js", url: "https://vuejs.org/" },
      { name: "nuxt-icon", label: "Nuxt.js", url: "https://nuxt.com/" },
      { name: "express", label: "Express.js", url: "https://expressjs.com/" },
      { name: "fastapi-icon", label: "FastAPI", url: "https://fastapi.tiangolo.com/" },
      { name: "laravel", label: "Laravel", url: "https://laravel.com/" },
      { name: "tailwindcss-icon", label: "Tailwind CSS", url: "https://tailwindcss.com/" },
    ],
  },
  {
    category: "Libraries",
    icons: [
      { name: "vueuse", label: "VueUse", url: "https://vueuse.org/" },
      { name: "pinia", label: "Pinia", url: "https://pinia.vuejs.org/" },
      { name: "socket-io", label: "Socket.IO", url: "https://socket.io/" },
    ],
  },
  {
    category: "Databases",
    icons: [
      { name: "postgresql", label: "PostgreSQL", url: "https://www.postgresql.org/" },
      { name: "mysql-icon", label: "MySQL", url: "https://www.mysql.com/" },
      { name: "mongodb-icon", label: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "redis", label: "Redis", url: "https://redis.io/" },
    ],
  },
  {
    category: "Infrastructure",
    icons: [
      { name: "aws", label: "AWS", url: "https://aws.amazon.com/" },
      { name: "docker-icon", label: "Docker", url: "https://www.docker.com/" },
    ],
  },
  {
    category: "Testing",
    icons: [
      { name: "vitest", label: "Vitest", url: "https://vitest.dev/" },
      { name: "cypress-icon", label: "Cypress", url: "https://www.cypress.io/" },
    ],
  },
  {
    category: "Operating Systems",
    icons: [
      { name: "linux-tux", label: "Linux", url: "https://kernel.org/" },
      { name: "fedora", label: "Fedora", url: "https://fedoraproject.org/" },
      { name: "ubuntu", label: "Ubuntu", url: "https://ubuntu.com/" },
      { name: "microsoft-windows-icon", label: "Windows", url: "https://www.microsoft.com/en-us/windows/" },
    ],
  },
  {
    category: "Tools",
    icons: [
      { name: "pycharm", label: "PyCharm", url: "https://www.jetbrains.com/pycharm/" },
      { name: "webstorm", label: "WebStorm", url: "https://www.jetbrains.com/webstorm/" },
      { name: "phpstorm", label: "PhpStorm", url: "https://www.jetbrains.com/phpstorm/" },
      { name: "visual-studio-code", label: "VS Code", url: "https://code.visualstudio.com/" },
      { name: "git-icon", label: "Git", url: "https://git-scm.com/" },
      { name: "figma", label: "Figma", url: "https://www.figma.com/" },
    ],
  },
] as const;
