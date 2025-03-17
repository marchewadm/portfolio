export type BaseLink = {
  href?: string;
  title?: string;
  target?: "_blank" | "_self";
};

export type BaseSection = {
  heading: string;
  headingId: string;
};

export type BaseFormLabel = {
  fieldId: string;
};

export type BaseButtonVariant = BaseLink & {
  variant?: "primary" | "secondary";
};

export type Illustration = {
  illustration: string;
};

export type PortfolioWork = {
  projectIndex: number;
  title: string;
  subtitle: string;
  description: string;
  path: string;
  image: string;
  alt: string;
  technologies: Array<{
    name: string;
    homepageUrl: string;
  }>;
  demoUrl?: string;
  sourceCodeUrl?: string;
};

export type IconName = {
  iconName: string;
};

export type ImageCaption = {
  src: string;
  alt: string;
  caption: string;
};
