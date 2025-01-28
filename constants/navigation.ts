export const MAIN_NAVIGATION = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Blog", href: "/blog" },
  { text: "Selected Works", href: "/selected-works" },
] as const;

export const SOCIAL_NAVIGATION = [
  { text: "GitHub", href: "#", target: "_blank", iconName: "brand-github" },
  { text: "LinkedIn", href: "#", target: "_blank", iconName: "brand-linkedin" },
  { text: "Discord", href: "#", target: "_blank", iconName: "brand-discord" },
  { text: "Mail", href: "#", target: "_blank", iconName: "mail" },
] as const;

export const NAVIGATION_DATA = [
  {
    title: "General",
    links: [
      { text: "Home", href: "/", target: "_self" },
      { text: "About", href: "/about", target: "_self" },
      { text: "Sitemap", href: "#", target: "_blank" },
    ],
  },
  {
    title: "Professional",
    links: [
      { text: "Resume", href: "#", target: "_blank" },
      { text: "Selected Works", href: "/selected-works", target: "_self" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Blog", href: "/blog", target: "_self" },
      { text: "Contact", href: "#", target: "_self" },
    ],
  },
  {
    title: "Socials",
    links: [...SOCIAL_NAVIGATION],
  },
] as const;
