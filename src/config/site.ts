export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite.js",
  description:
    "The React Framework for Production. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Integrations",
      href: "/integrations",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
};
