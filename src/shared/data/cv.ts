import type { IconName } from "../components/icons";

const firstName = "Sergii";
const lastName = "Kryvenko";
const title = "Senior Product Engineer";
const specialty = "Frontend-first · React, Next.js & TypeScript";

export const personalInfo = {
  name: `${firstName} ${lastName}`,
  firstName,
  lastName,
  initials: `${firstName[0]}${lastName[0]}`,
  title,
  specialty,
  /** Under the name on the About profile card. */
  headline: `${title} · ${specialty}`,
  /** The footer's availability line; empty hides it. */
  openTo: "Open to senior product engineering and frontend lead roles. Let's talk.",
  phone: "+38 097 711 55 44",
  email: "kyvenko.sergiy@gmail.com",
  linkedin: "https://www.linkedin.com/in/kryvenkosergiy/",
  github: "https://github.com/KryvenkoSergiy",
  upwork: "https://www.upwork.com/freelancers/~01708ddddf4796be2b",
  portfolio: "https://kryvenkosergiy.github.io/cv/",
  location: "Ukraine",
  /** Checked against the timeline dates by cv.test.ts; also in index.html. */
  yearsOfExperience: "12",
  linkedinDisplay: "linkedin.com/in/kryvenkosergiy",
  githubDisplay: "github.com/KryvenkoSergiy",
  upworkDisplay: "upwork.com/freelancers/~01708…",
  portfolioDisplay: "kryvenkosergiy.github.io/cv",
  pdfFilename: "Senior_Product_Engineer_Kryvenko_CV.pdf",
};

export const about = [
  `I'm a frontend-first product engineer with ${personalInfo.yearsOfExperience} years of building web products people use every day. I don't just close tickets: I work with founders, product managers and designers to decide what's worth building, build it in React and Next.js, ship it, and check whether it actually helped users and the business.`,
  `Most recently I led the rebuild of Opinion Stage's core editor, moving a 10-year-old legacy codebase to a modern React architecture, made the whole platform noticeably faster, and added AI features that cut the team's manual work by more than half. Before that I built products for a career platform with 100k+ monthly users, where my hiring charts grew paid subscriptions by 25%, as well as a learning platform, a crypto exchange and a cloud gaming platform.`,
  `I've led teams of 4-8 engineers and I'm comfortable owning a feature end to end, including the backend (Node.js, Supabase) when it needs one. I care about interfaces that are fast, accessible and polished, and about shipping work that moves the numbers.`,
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

export const skillsSubtitle = `${personalInfo.yearsOfExperience} years building products: frontend, performance and design systems`;

/**
 * The Skills page, top to bottom: core stack, specialization, delivery and
 * leadership, and what I've worked with beyond that. The PDF prints only the
 * first two tiers, through `pdfSkillCategories`, so the CV stays on two pages.
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
    note: "Product, design systems, performance, AI",
    groups: [
      {
        category: "Product & Experimentation",
        icon: "cursor",
        skills: [
          "Product Analytics",
          "A/B Testing",
          "Feature Flags",
          "MVP Scoping & Prototyping",
        ],
      },
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
        category: "Backend & CMS (Basic)",
        icon: "globe",
        skills: ["Node.js", "NestJS", "Supabase", "Neon", "Redis", "Payload CMS", "Strapi"],
      },
      {
        category: "Graphics & Animation",
        icon: "sparkle",
        skills: ["Framer Motion", "GSAP", "Canvas API", "WebGL", "Three.js", "React Three Fiber"],
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
export const pdfSkillCategories = skillTiers.slice(0, 2).flatMap(t => t.groups);

/** Highlighted on the Skills page. Exact names from `skillTiers`; cv.test.ts checks. */
export const keySkills = [
  "React",
  "Next.js",
  "TypeScript",
  "TanStack Query (React Query)",
  "Redux Toolkit",
  "Zustand",
  "Tailwind CSS",
  "Product Analytics",
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
   * Never set for `google-stadia`: Stadia shut down in January 2023 (pinned by cv.test.ts).
   */
  url?: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  /** Held alongside another role; tagged "Part-time" next to the dates (not in Earlier work). */
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
      "Led the widget editor's migration off a 10-year-old jQuery/Rails codebase onto React, rebuilt from the ground up as modular micro-frontends that scale with the product. Features now ship faster, with fewer regressions and a smaller bundle.",
      "Built the design system and rebuilt the whole product UI on it, prioritizing flows by product analytics and user data.",
      "Shipped AI-assisted content creation with OpenAI GPT and Google Gemini, cutting manual processing time by 60%.",
      "Raised Lighthouse performance from 67-75 to 90+ by fixing LCP, CLS and INP. The widgets load inside customers' own pages, so their speed is our customers' speed.",
      "Made the embeddable widget fully WCAG 2.1 AA compliant, so customers with accessibility obligations can embed it as is.",
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
      "Built an AI-powered warehouse inventory system that suggests the optimal place for each product, tracks restocking and turns warehouse data into clear analytics dashboards.",
      "Built an AI content assistant for social media on OpenAI GPT: it spots trends, analyzes the user's current account and turns both into content ideas, recommendations and analytics.",
      "Ran a full Core Web Vitals and accessibility audit of a client product and fixed every finding: LCP 10s → 1.8s, CLS 0.25 → 0, Lighthouse from the 60s to 95 (performance) and 100 (accessibility).",
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
      "Led a team of 4 frontend engineers on a personalized learning platform and built both sides of it: course search, filtering and recommendations for learners, and an analytics dashboard for course owners, lifting course enrollments by 25%.",
      "Built the data layer on TanStack Query with caching, prefetching and optimistic updates, cutting perceived load times on data-heavy views by up to 40%.",
      "Made every course page indexable with prerender.io and set up technical SEO (meta tags, sitemaps, structured data), growing organic traffic by 40%.",
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
      "Led a team of 8 engineers on the React frontend of a cross-chain DEX aggregating swaps across 5+ blockchains in real time.",
      "Shipped multi-chain portfolio analytics and a card-to-crypto on-ramp via Ramp, so newcomers buy and track crypto in one app.",
      "Unified 3 separately deployed apps (React and Blazor) under one design system, so swap, portfolio and on-ramp feel like one product.",
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
      "Built job search, the employer dashboard and the job offer flow in React and MobX for Africa's leading career platform (100k+ monthly active users).",
      "Cut initial load time by 30%+ for mobile users on 2G/3G networks with code splitting and a custom server-side cache for SSR pages.",
      "Built interactive hiring-market charts for employers (Canvas API, React Spring) that lifted paid subscription purchases by 25%.",
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
      "Migrated a medical education platform from client-side React to Next.js for full SEO support, fixing its indexing and lifting Lighthouse performance from 50 to 93-95; finer-grained caching cut hosting costs by 20%.",
      "Built an interactive module turning patient medical records into 3D clinical scenes, making complex cases easier to grasp.",
      "Delivered full WCAG 2.1 AA compliance, a core requirement of the project, confirmed by an independent accessibility audit.",
    ],
    teamSize: 7,
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Three.js",
      "React Three Fiber",
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
      "Built a React dashboard overlay on Google Stadia's live 4K/60fps game stream that feels like part of the game even on slow connections, with input latency under 100ms.",
      "Built a network diagnostics module that reads WebRTC connection stats (RTT, jitter, packet loss), predicts connection dips with heuristics and steps stream quality down ahead of time, so players notice far less lag.",
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
  { id: "opinion-stage", title: "10-year-old legacy editor, rebuilt in React" },
  { id: "upwork", title: "AI inventory system for warehouses" },
  { id: "fuzu", title: "Job search and hiring for 100k+ monthly users" },
];

export interface PortfolioItem {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  /** The live demo: its own repo and GitHub Pages site. */
  url: string;
}

/** The Work page: live demo sites, newest first. */
export const portfolio: PortfolioItem[] = [
  {
    id: "northvale",
    title: "The Keeper’s Log — a year at Northvale",
    summary: "A site for a fictional novel, told as 16 real-time WebGL scenes on one lake island: each scroll turns a chapter, the weather and seasons change on screen, and the island's people and animals appear in their chapters.",
    stack: ["React", "TypeScript", "three.js", "React Three Fiber", "GLSL", "GSAP", "Web Audio"],
    url: "https://kryvenkosergiy.github.io/northvale-demo-book/",
  },
];

/** Home's "How I work" strip, in order. */
export const howIWork = [
  { title: "Discover", desc: "Start from the problem: who the users are, what the data says, what the business needs to move." },
  { title: "Shape", desc: "Scope the smallest version worth shipping, together with product and design." },
  { title: "Build", desc: "React and Next.js on an architecture the next feature won't have to fight." },
  { title: "Ship", desc: "Release behind feature flags, roll out gradually and watch errors in production." },
  { title: "Measure", desc: "Check the analytics against the goal, then iterate or move on." },
];

/** Home's "Now" block. Bump `updated` whenever the list changes. */
export const now: { updated: string; items: { icon: IconName; title: string; desc: string }[] } = {
  updated: "Oct 2026",
  items: [
    {
      icon: "sparkle",
      title: "AI in marketplace operations",
      desc: "Exploring where AI pays off in marketplace processes like listings, search, support and moderation, and how to run it cheaply enough to be worth it.",
    },
    {
      icon: "cpu",
      title: "Custom MCP servers",
      desc: "Connecting AI agents to real product data and internal tools through the Model Context Protocol.",
    },
    {
      icon: "code",
      title: "Agents and skills for my dev workflow",
      desc: "Claude Code skills and sub-agents that take on code review, QA and refactors, so my time goes to product decisions.",
    },
    {
      icon: "beaker",
      title: "AI across the whole dev cycle",
      desc: "Exploring end-to-end AI development workflows, including agents that turn user bug reports into a found root cause and a fix opened for review.",
    },
  ],
};

/**
 * The last role shown in full, on the site and in the PDF. Older roles become
 * the compact "Earlier work" group (site) and a single linked line (PDF).
 */
export const lastFullExperienceId = "google-stadia";

/** Home's PDF-download banner copy. */
export const jokeBanners = {
  home: {
    emoji: "🤷",
    title: "Most CVs are PDFs.",
    joke: "I tried to keep this simple. Clearly failed",
    buttonLabel: "Download my “simple” PDF CV",
    loadingLabel: "Generating…",
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

export const heroDescription = "I take a product idea from rough problem to shipped, polished web app: shaping the scope with product and design, building it in React and Next.js, and making sure it's fast, accessible and easy to grow. Frontend-first, with the backend and AI features a product needs.";

/**
 * The hero's side card: what a team or client can bring me in to do.
 * `lead` is the highlighted phrase; `rest` reads as its quieter second line.
 */
export const bringMeInTo: { icon: IconName; lead: string; rest: string }[] = [
  { icon: "package", lead: "Ship an MVP", rest: "from idea to production" },
  { icon: "layers", lead: "Rebuild a legacy frontend", rest: "without stopping the product" },
  { icon: "gauge", lead: "Make a slow product fast", rest: "measured on Core Web Vitals" },
  { icon: "sparkle", lead: "Add AI features", rest: "to an existing product" },
  { icon: "palette", lead: "Set up a design system", rest: "the team actually uses" },
  { icon: "users", lead: "Lead an engineering team", rest: "and own delivery end to end" },
];
