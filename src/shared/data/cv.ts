import type { IconName } from "../components/icons";

const firstName = "Sergii";
const lastName = "Kryvenko";
const title = "Senior Frontend Engineer";
const specialty = "Design Systems & Web Performance Architect";

export const personalInfo = {
  name: `${firstName} ${lastName}`,
  firstName,
  lastName,
  initials: `${firstName[0]}${lastName[0]}`,
  title,
  specialty,
  /** Profile card and PDF header. */
  headline: `${title} · ${specialty}`,
  /** Drives the hero badge, the footer line and `available:` in the code card. */
  available: true,
  phone: "+38 097 711 55 44",
  email: "kyvenko.sergiy@gmail.com",
  linkedin: "https://www.linkedin.com/in/kryvenkosergiy/",
  github: "https://github.com/KryvenkoSergiy",
  upwork: "https://www.upwork.com/freelancers/~01708ddddf4796be2b",
  portfolio: "https://kryvenkosergiy.github.io/cv/",
  location: "Ukraine",
  /** Both checked against the timeline dates by cv.test.ts. */
  yearsOfExperience: "12",
  reactYears: "8+",
  // Short display labels (for PDF, footer, etc.)
  linkedinDisplay: "linkedin.com/in/kryvenkosergiy",
  githubDisplay: "github.com/KryvenkoSergiy",
  upworkDisplay: "upwork.com/freelancers/~01708…",
  portfolioDisplay: "kryvenkosergiy.github.io/cv",
  pdfFilename: "Senior_Frontend_Engineer_Kryvenko_CV.pdf",
};

export const about = [
  `I'm a senior frontend engineer and tech lead focused on design systems and web performance, with ${personalInfo.yearsOfExperience} years in frontend, ${personalInfo.reactYears} of them in React. Two projects I point to first: Google Stadia, where I built React UI for a platform streaming games at 4K/60fps, and Fuzu, Africa's leading career platform, at 100k+ monthly active users.`,
  `Underneath that sits architecture and data flow: TanStack Query, Redux Toolkit, GraphQL and REST, wired so the UI stays predictable as an app grows. I measure the result on Core Web Vitals and WCAG 2.1 AA, and I document components in Storybook so the next engineer doesn't have to guess.`,
  `Lately, a lot of that work involves AI. I've put OpenAI GPT and Google Gemini into live content workflows, which cut manual processing time by 60%. I lead teams of 4-8 engineers, set technical direction, and stay close enough to the code to review it.`,
];

export interface SkillCategory {
  category: string;
  icon: IconName;
  skills: string[];
}

export interface SkillTier {
  label: string;
  note?: string;
  groups: SkillCategory[];
}

/**
 * The Skills page, top to bottom: what I use daily, what the headline claims,
 * how it ships, and what I've worked with beyond that. The PDF prints the same
 * groups in the same order through `skillCategories`.
 */
export const skillTiers: SkillTier[] = [
  {
    label: "Core stack",
    note: "Daily tools",
    groups: [
      {
        category: "Languages & Frameworks",
        icon: "atom",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "React Server Components",
          "HTML5",
          "CSS3",
        ],
      },
      {
        category: "State & Data",
        icon: "database",
        skills: [
          "TanStack Query (React Query)",
          "Redux Toolkit",
          "Zustand",
          "MobX",
          "GraphQL",
          "Apollo Client",
          "REST APIs",
          "WebSockets",
          "React Hook Form",
          "Zod",
        ],
      },
      {
        category: "Styling & UI",
        icon: "palette",
        skills: [
          "Tailwind CSS",
          "shadcn/ui",
          "SCSS",
          "CSS Modules",
          "Responsive Web Design",
          "Cross-Browser Compatibility",
          "Internationalization (i18n)",
        ],
      },
    ],
  },
  {
    label: "Specialization",
    note: "Design systems, performance, AI",
    groups: [
      {
        category: "Design Systems & Architecture",
        icon: "layers",
        skills: [
          "Design Systems",
          "Storybook",
          "Component Architecture",
          "Micro-frontends",
          "Module Federation",
          "Scalable Frontend Architecture",
          "System Design",
          "Design Patterns",
        ],
      },
      {
        category: "Performance & Accessibility",
        icon: "gauge",
        skills: [
          "Core Web Vitals",
          "Lighthouse",
          "Code Splitting",
          "SSR / Prerendering",
          "CDN Optimization",
          "PWA / Service Workers",
          "Web Accessibility (WCAG 2.1 AA)",
          "axe",
          "Screen Reader Testing",
        ],
      },
      {
        // The name is pinned by cv.test.ts.
        category: "AI & LLM",
        icon: "cpu",
        skills: [
          "OpenAI GPT",
          "Google Gemini",
          "Claude (Anthropic)",
          "Vercel AI SDK",
          "LLM API Integration",
          "AI Content Workflows",
          "RAG (Retrieval-Augmented Generation)",
          "Model Context Protocol (MCP)",
          "Streaming AI Interfaces",
        ],
      },
    ],
  },
  {
    label: "Delivery & leadership",
    groups: [
      {
        category: "Testing",
        icon: "beaker",
        skills: [
          "React Testing Library",
          "Jest",
          "Cypress",
          "Playwright",
          "Storybook Interaction Tests",
          "Chromatic",
          "End-to-End Testing",
          "Test-Driven Development (TDD)",
        ],
      },
      {
        category: "Build, CI/CD & Release",
        icon: "package",
        skills: [
          "Vite",
          "Webpack",
          "ESLint / Prettier",
          "Monorepos (Turborepo, Nx)",
          "GitHub Actions",
          "Vercel",
          "Git",
          "Sentry",
          "Feature Flags",
          "A/B Testing",
        ],
      },
      {
        category: "Team & Process",
        icon: "users",
        skills: ["Code Review", "Technical Mentoring", "Agile / Scrum"],
      },
    ],
  },
  {
    label: "Also worked with",
    groups: [
      {
        // The level lives in the category name so the site and the PDF both say it.
        category: "Backend & CMS (Basic)",
        icon: "globe",
        skills: ["Node.js", "NestJS", "Supabase", "Neon", "Redis", "Payload CMS", "Strapi"],
      },
      {
        category: "Graphics & Animation",
        icon: "sparkle",
        skills: ["Framer Motion", "GSAP", "Canvas API", "WebGL", "React Three Fiber"],
      },
      {
        category: "Mobile & Payments",
        icon: "phone",
        skills: ["React Native", "Flutter", "Stripe", "PayPal"],
      },
    ],
  },
];

export const skillCategories = skillTiers.flatMap(t => t.groups);

/** Highlighted on the Skills page. Exact names from `skillTiers`; cv.test.ts checks. */
export const keySkills = [
  "React",
  "Next.js",
  "TypeScript",
  "TanStack Query (React Query)",
  "Redux Toolkit",
  "Zustand",
  "Tailwind CSS",
  "Design Systems",
  "Storybook",
  "Core Web Vitals",
  "Web Accessibility (WCAG 2.1 AA)",
  "OpenAI GPT",
  "Google Gemini",
  "Claude (Anthropic)",
  "React Testing Library",
  "Code Review",
  "Technical Mentoring",
  "Framer Motion",
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  /**
   * Live product URL — the thing that was built, i.e. `client ?? company`.
   * Omitted where the product no longer exists: `google-stadia` has none
   * because Google shut Stadia down in January 2023. Pinned by cv.test.ts.
   */
  url?: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  /** Held alongside another role; shown as a "Part-time" tag wherever dates are. */
  partTime?: boolean;
  description: string[];
  teamSize: number;
  technologies: string[];
  highlight?: string;
}

export const experiences: Experience[] = [
  {
    id: "opinion-stage",
    role: "Senior Frontend Engineer / Lead",
    company: "Opinion Stage",
    startDate: "Apr 2025",
    endDate: "Present",
    current: true,
    description: [
      "Led the migration of the widget editor from a legacy codebase to a new React architecture built on feature-based modules, reusable components and modular state management. Features now ship faster, with fewer bugs and a smaller bundle.",
      "Analyzed and improved Core Web Vitals (LCP, CLS, INP) across the platform, raising the Lighthouse performance score from 67-75 to 90+.",
      "Brought the embeddable end-user widget to full WCAG 2.1 AA compliance.",
      "Created the design system and rebuilt the entire product interface on it, guided by product analytics and user data.",
      "Integrated OpenAI GPT and Google Gemini into the content workflow, which cut manual processing time by 60%.",
    ],
    teamSize: 6,
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "SCSS",
      "Storybook",
      "React Testing Library",
      "OpenAI GPT / Google Gemini",
      "Framer Motion",
      "Zustand",
      "PayPal",
    ],
    highlight: "SaaS Platform",
  },
  {
    id: "upwork",
    role: "Senior Frontend Engineer / Tech Lead",
    company: "Freelance",
    client: "Upwork",
    startDate: "Jan 2023",
    endDate: "Mar 2025",
    description: [
      "Led React and TypeScript frontend work across 5+ client engagements over 2 years.",
      "Shipped AI SaaS platforms, warehouse management systems and data visualization tools, owning architecture decisions, stakeholder communication and delivery timelines.",
      "Cut a 10-second LCP on a client product to under 2 seconds by fixing an oversized image, render-blocking scripts and third-party code.",
      "Added AI features with OpenAI GPT and Google Gemini across several client products to automate manual work.",
    ],
    teamSize: 4,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "Storybook",
      "React Testing Library",
      "OpenAI GPT / Google Gemini / Leonardo AI",
      "Strapi / Supabase",
      "PayPal / Stripe",
      "Vercel",
      "GitHub Actions",
    ],
    highlight: "SaaS Products",
  },
  {
    id: "evrlearn",
    role: "Senior Frontend Engineer / Lead",
    company: "Syndicode",
    client: "Evrlearn",
    startDate: "Dec 2021",
    endDate: "Jan 2024",
    partTime: true,
    description: [
      "Led React and TypeScript frontend development for a personalized learning discovery platform.",
      "Designed the search, filtering and recommendation systems for the course catalog.",
      "Built the data layer on TanStack Query with caching, prefetching and optimistic updates. Perceived load times on data-heavy views dropped by up to 40%.",
      "Managed SEO for the single-page app with prerender.io, and improved Core Web Vitals across the platform.",
    ],
    teamSize: 4,
    technologies: [
      "TypeScript",
      "React",
      "TanStack Query",
      "GraphQL",
      'prerender.io',
      "Tailwind CSS",
      "Storybook",
      "React Testing Library",
      "Git",
    ],
    highlight: "EdTech",
  },
  {
    id: "clearcryptos",
    role: "Senior Frontend Engineer / Lead",
    company: "ClearCryptos",
    startDate: "Apr 2022",
    endDate: "Jan 2023",
    partTime: true,
    description: [
      "Led the React frontend for a cross-chain DEX with real-time swap aggregation across 5+ blockchain protocols.",
      "Shipped multi-chain portfolio analytics and a fiat on-ramp.",
      "Unified the UI across 3 independently deployed parts of the platform, built in React and Blazor.",
    ],
    teamSize: 8,
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Blazor",
      "Razor Components",
      "Web3.js",
      "WebSockets",
    ],
    highlight: "Crypto / DeFi",
  },
  {
    id: "fuzu",
    role: "Frontend Engineer",
    company: "Syndicode",
    client: "Fuzu",
    startDate: "Apr 2020",
    endDate: "Oct 2022",
    description: [
      "Developed the React and MobX UI for Africa's leading career platform, a high-load product with 100k+ monthly active users.",
      "Reduced initial load times by 30%+ for mobile users on 2G/3G networks across B2B and B2C surfaces, using code splitting and SSR caching.",
      "Created interactive Canvas API charts, animated with React Spring, for career insights and job market trends.",
    ],
    teamSize: 7,
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "MobX",
      "TanStack Query",
      "React Spring",
      "Canvas API",
      "Jest",
      "Enzyme",
      "Storybook",
      "Git",
    ],
    highlight: "Career Platform",
  },
  {
    id: "medyoucate",
    role: "Frontend Engineer",
    company: "Syndicode",
    client: "MedYouCate",
    startDate: "Nov 2021",
    endDate: "Mar 2022",
    description: [
      "Introduced SSR with Next.js on a medical education platform for SEO and faster content delivery, and raised its Lighthouse performance score from 50 to 93-95.",
      "Created interactive medical case studies in React.",
      "Refactored the platform to meet WCAG 2.1 AA.",
    ],
    teamSize: 7,
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit",
      "TanStack Query",
      "Storybook",
      "Git",
    ],
    highlight: "MedTech",
  },
  {
    id: "google-stadia",
    role: "Frontend Engineer (Contract)",
    company: "Google",
    client: "Google Stadia",
    startDate: "Jun 2019",
    endDate: "Jan 2020",
    partTime: true,
    description: [
      "Built performance-critical React interfaces for Google Stadia, a cloud gaming platform streaming games at 4K/60fps, where input latency had to stay under 100ms.",
      "Tuned React rendering and applied code splitting to cut unnecessary re-renders and the initial bundle size.",
    ],
    teamSize: 12,
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "React Three Fiber",
      "Canvas API",
      "React Motion",
      "React Testing Library",
      "Storybook",
      "Git",
    ],
    highlight: "Cloud Gaming",
  },
  {
    id: "appclose",
    role: "Frontend Engineer",
    company: "AppClose / Casetack",
    startDate: "Jan 2018",
    endDate: "Dec 2019",
    description: [
      "Shipped 10+ core features for a React co-parenting app: shared calendars, real-time messaging and collaborative task flows across 3+ user roles.",
    ],
    teamSize: 8,
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Redux Saga",
      "Canvas API",
      "React Motion",
      "Storybook",
      "Git",
    ],
    highlight: "Co-parenting App",
  },
  {
    id: "senden24",
    role: "Frontend Engineer",
    company: "Syndicode",
    client: "Senden 24 GmbH",
    startDate: "Jan 2017",
    endDate: "Dec 2018",
    description: [
      "Owned frontend delivery for an on-demand B2B logistics platform. The real-time dispatch and tracking interfaces I built were used by 50+ operators daily.",
      "Added route optimization built on Canvas API and GSAP, so dispatchers could plan runs in fewer steps.",
    ],
    teamSize: 4,
    technologies: [
      "JavaScript",
      "jQuery",
      "Canvas API",
      "GSAP",
      "HTML",
      "CSS/SCSS",
    ],
    highlight: "B2B Logistics",
  },
  {
    id: "movinga",
    role: "Frontend Engineer",
    company: "Syndicode",
    client: "Movinga",
    startDate: "Jan 2016",
    endDate: "Jul 2016",
    description: [
      "Created reusable JavaScript/jQuery UI components and interactive booking calculators for a moving platform, shared across 5+ independently deployed services.",
    ],
    teamSize: 5,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS/SCSS"],
    highlight: "B2C Logistics",
  },
  {
    id: "wargaming",
    role: "Frontend Developer",
    company: "Wargaming",
    startDate: "Sep 2015",
    endDate: "Mar 2016",
    description: [
      "Built the interactive World of Tanks map in AngularJS and Canvas API, showing real-time territory control and statistics for a high-load game with 4.5M+ players.",
    ],
    teamSize: 7,
    technologies: ["JavaScript", "AngularJS", "Canvas API", "HTML", "CSS/SCSS"],
    highlight: "Gaming",
  },
  {
    id: "settle",
    role: "Frontend Developer",
    company: "BIG DIG",
    client: "Settle",
    startDate: "Mar 2015",
    endDate: "Sep 2015",
    description: [
      "Delivered mobile-first payment and loyalty interfaces for a fintech startup: contactless payment flows, real-time transaction status and rewards UX.",
    ],
    teamSize: 5,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS/SCSS", "PayPal"],
    highlight: "Mobile Payments",
  },
  {
    id: "visa",
    role: "Frontend Developer",
    company: "Coderoom",
    client: "Visa GlobalBonus",
    startDate: "Oct 2014",
    endDate: "Feb 2015",
    description: [
      "Built modular JavaScript/jQuery components for reward browsing, redemption and partner offers on Visa's high-load cardholder loyalty platform, serving millions of users across 30+ countries.",
    ],
    teamSize: 15,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS/SCSS"],
    highlight: "Loyalty Platform",
  },
  {
    id: "datagroup",
    role: "Frontend Developer",
    company: "Coderoom",
    client: "Data Group",
    startDate: "Sep 2014",
    endDate: "Dec 2014",
    description: [
      "Developed JavaScript/jQuery admin dashboards and real-time data visualization for internal analytics platforms used by 20+ analysts.",
    ],
    teamSize: 20,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS/SCSS"],
    highlight: "Data Analytics",
  },
];

/** Home's Featured Work cards: an `experiences` id and an outcome-first title. */
export const featuredWork = [
  { id: "opinion-stage", title: "Legacy editor to React architecture" },
  { id: "google-stadia", title: "React UI for 4K/60fps cloud gaming" },
  { id: "fuzu", title: "Career platform at 100k+ monthly users" },
];

/** Home's "Worked with" strip, in display order. Names come from `experiences`. */
export const workedWithIds = ["opinion-stage", "google-stadia", "wargaming", "visa", "fuzu"];

/**
 * The last role shown in full, on the site and in the PDF. Older roles become
 * the compact "Earlier work" group (site) and a single linked line (PDF).
 */
export const lastFullExperienceId = "google-stadia";

/**
 * PDF-download banner copy.
 *
 * Only `home` renders today — the same joke-plus-CTA on all four pages read as
 * repetitive, and on Experience it split the timeline between roles 3 and 4.
 * The other three are kept here so the copy isn't lost and re-enabling any of
 * them is a one-line change.
 */
export const jokeBanners = {
  home: {
    emoji: "🤷",
    title: "Most CVs are PDFs.",
    joke: "I tried to keep this simple. Clearly failed",
    buttonLabel: "Download my “simple” PDF CV",
    loadingLabel: "Generating…",
  },
  experience: {
    emoji: "😅",
    title: "Too much scrolling?",
    joke: "I compressed 10+ years into a PDF. The deleted scenes were better anyway.",
    buttonLabel: 'Download the "short" version',
    loadingLabel: "Compressing 10 years…",
  },
  skills: {
    emoji: "🤓",
    title: "Impressive, right?",
    joke: "40+ technologies. Still can't explain what I do at family dinners.",
    buttonLabel: "Bundle everything into PDF",
    loadingLabel: "Googling the rest…",
  },
  about: {
    emoji: "👀",
    title: "You made it to the About page.",
    joke: "Most people stop at the hero section. You're different. I like that.",
    buttonLabel: "Download PDF CV (you deserve it)",
    loadingLabel: "Preparing your reward…",
  },
};

export const education = {
  degree: "Master of Computer Engineering",
  field: "Information Technology and Programming",
  university: "Kamianets-Podilskyi Ivan Ohiienko National University",
  period: "2009 - 2014",
};

export interface SpokenLanguage {
  language: string;
  /** CEFR band or "Native". */
  level: string;
}

export const spokenLanguages: SpokenLanguage[] = [
  { language: "English", level: "C1 · Advanced" },
  { language: "Ukrainian", level: "Native" },
];

const fullCut = experiences.findIndex(e => e.id === lastFullExperienceId) + 1;
export const recentExperiences = experiences.slice(0, fullCut);
export const earlierExperiences = experiences.slice(fullCut);

export const heroDescription = `${personalInfo.yearsOfExperience} years in frontend, ${personalInfo.reactYears} of them in React. I build React and Next.js products, from architecture and design systems to performance, accessibility and AI features, and lead the teams that ship them.`;

/**
 * The hero's Core Stack card: frontend first, a little backend last. Names
 * match `skillCategories`, and the list leads with React; cv.test.ts checks
 * both. Keep the count even — the card is a two-column grid.
 */
export const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "TanStack Query",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Supabase",
];

export const coreExpertise = [
  {
    title: "React Ecosystem",
    desc: "React, Next.js and React Native. I build UI architectures out of reusable components and take them to production.",
  },
  {
    title: "JavaScript / TypeScript",
    desc: "Modern JavaScript and TypeScript in large codebases: advanced typing, architectural patterns and runtime performance.",
  },
  {
    title: "Team & Tech Leadership",
    desc: "Led and mentored teams of 4-8 engineers across startups and scale-ups, and owned architecture and delivery.",
  },
  {
    title: "Performance Optimization",
    desc: "Core Web Vitals work: code splitting, lazy loading, render optimization and real-time UI tuning.",
  },
];

export const values: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "gauge",
    title: "Performance First",
    desc: "Fast load times, healthy Core Web Vitals, and interactions that respond immediately.",
  },
  {
    icon: "users",
    title: "Team Empowerment",
    desc: "Teams get strong through mentoring, real ownership and plain communication.",
  },
  {
    icon: "cursor",
    title: "User Experience & Quality",
    desc: "Interfaces that are consistent and finished, down to the details nobody asks about.",
  },
  {
    icon: "ruler",
    title: "Scalable Architecture",
    desc: "Systems that stay maintainable as they grow, rather than ones that need rewriting.",
  },
  {
    icon: "globe",
    title: "Cross-Browser Compatibility",
    desc: "The same experience across every major browser and device.",
  },
];
