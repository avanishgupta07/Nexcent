export type LinkItem = { label: string; href: string };

export type HeroData = {
  title: string;
  highlight: string;
  description: string;
  cta: LinkItem;
  image: string;
  imageAlt: string;
};

export type SectionIntro = {
  title: string;
  description: string;
};

export type AudienceCard = {
  title: string;
  description: string;
  icon: string;
};

export type DetailSection = {
  title: string;
  description: string;
  cta: LinkItem;
  image: string;
  imageAlt: string;
};

export type BlogCard = {
  title: string;
  image: string;
  href: string;
  cta: string;
};

export type FooterColumn = {
  title: string;
  links: LinkItem[];
};

export const navigation: LinkItem[] = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#service" },
  { label: "Feature", href: "#feature" },
  { label: "Product", href: "#product" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "FAQ", href: "#faq" }
];

export const authLinks = {
  login: { label: "Login", href: "#login" },
  signup: { label: "Sign up", href: "#signup" }
};

export const hero: HeroData = {
  title: "Lessons and insights",
  highlight: "from 8 years",
  description: "Where to grow your business as a photographer: site or social media?",
  cta: { label: "Register", href: "#register" },
  image: "/images/hero-illustration.png",
  imageAlt: "Developer working beside a large code monitor"
};

export const clients: SectionIntro = {
  title: "Our Clients",
  description: "We have been working with some Fortune 500+ clients"
};

export const audience: SectionIntro = {
  title: "Manage your entire community in a single system",
  description: "Who is Nextcent suitable for?"
};

export const audienceCards: AudienceCard[] = [
  {
    title: "Membership Organisations",
    description: "Our membership management software provides full automation of membership renewals and payments",
    icon: "users"
  },
  {
    title: "National Associations",
    description: "Our membership management software provides full automation of membership renewals and payments",
    icon: "building"
  },
  {
    title: "Clubs And Groups",
    description: "Our membership management software provides full automation of membership renewals and payments",
    icon: "hands"
  }
];

export const detailSections: DetailSection[] = [
  {
    title: "How to design your site footer like we did",
    description: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa neque varius arcu, ac scelerisque elit erat a magna. Donec erat arcu, ultrices ut lorem vitae, molestie aliquam libero.",
    cta: { label: "Learn More", href: "#learn-more" },
    image: "/images/detail-illustration.png",
    imageAlt: "Person working with a mobile website interface"
  }
];

export const testimonial = {
  quote: "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus enim. Vivamus sit libero quam. Vivamus blandit ultrices porttitor.",
  name: "Tim Smith",
  organization: "British Dragon Boat Racing Association",
  image: "/images/testimonial.jpg",
  logosImage: "/images/client-logos.png"
};

export const blogIntro: SectionIntro = {
  title: "Caring is the new marketing",
  description: "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community is increasing their membership income and learn more."
};

export const blogCards: BlogCard[] = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: "/images/blog-1.jpg",
    href: "#blog-1",
    cta: "Readmore"
  },
  {
    title: "What are your safeguarding responsibilities, and how can you manage them?",
    image: "/images/blog-2.jpg",
    href: "#blog-2",
    cta: "Readmore"
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    image: "/images/blog-3.jpg",
    href: "#blog-3",
    cta: "Readmore"
  }
];

export const ctaBanner = {
  title: "Pellentesque suscipit fringilla libero eu.",
  button: { label: "Get a Demo", href: "#demo" }
};

export const footer = {
  copyright: ["Copyright © 2020 Nexcent ltd.", "All rights reserved"],
  columns: [
    {
      title: "Company",
      links: [
        { label: "About us", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Contact us", href: "#contact" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonial" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help center", href: "#help" },
        { label: "Terms of service", href: "#terms" },
        { label: "Legal", href: "#legal" },
        { label: "Privacy policy", href: "#privacy" },
        { label: "Status", href: "#status" }
      ]
    }
  ] as FooterColumn[],
  newsletterPlaceholder: "Your email address"
};
