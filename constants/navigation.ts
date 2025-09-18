export const MAIN_NAVIGATION = [
  {
    text: "Home",
    href: "/",
    title: "Visit the home page",
  },
  {
    text: "About",
    href: "/about",
    title: "Visit the about page",
  },
  {
    text: "Blog",
    href: "/blog",
    title: "Visit the blog page",
  },
  {
    text: "Selected Works",
    href: "/selected-works",
    title: "Visit the selected works page",
  },
] as const;

export const SOCIAL_NAVIGATION = [
  {
    text: "GitHub",
    userName: "@marchewadm",
    href: "https://github.com/marchewadm",
    target: "_blank",
    iconName: "brand-github",
    title: "Visit my GitHub profile in a new tab",
  },
  {
    text: "LinkedIn",
    userName: "@merchwadawid",
    href: "https://www.linkedin.com/in/merchwadawid",
    target: "_blank",
    iconName: "brand-linkedin",
    title: "Visit my LinkedIn profile in a new tab",
  },
  {
    text: "Mail",
    userName: "hello@marchewa.dev",
    href: "mailto:hello@marchewa.dev",
    target: "_blank",
    iconName: "mail",
    title: "Send me an email",
  },
] as const;

export const NAVIGATION_DATA = [
  {
    title: "General",
    links: [
      {
        text: "Home",
        href: "/",
        target: "_self",
        title: "Visit the home page",
      },
      {
        text: "About",
        href: "/about",
        target: "_self",
        title: "Visit the about page",
      },
      {
        text: "Sitemap",
        href: "/sitemap.xml",
        target: "_blank",
        title: "View the sitemap in a new tab",
      },
    ],
  },
  {
    title: "Professional",
    links: [
      {
        text: "Resume",
        href: "#",
        target: "_blank",
        title: "View my resume in a new tab",
      },
      {
        text: "Selected Works",
        href: "/selected-works",
        target: "_self",
        title: "Visit the selected works page",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        text: "Blog",
        href: "/blog",
        target: "_self",
        title: "Visit the blog page",
      },
      {
        text: "Contact",
        href: "/#section-home-contact",
        target: "_self",
        title: "Visit the contact section",
      },
    ],
  },
  {
    title: "Socials",
    links: [...SOCIAL_NAVIGATION],
  },
] as const;
