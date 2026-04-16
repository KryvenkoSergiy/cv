export const personalInfo = {
  name: "Sergii Kryvenko",
  firstName: "Sergii",
  lastName: "Kryvenko",
  title: "Senior Frontend Engineer",
  roles: ["Senior Frontend Engineer", "Frontend Architect", "React Tech Lead"],
  phone: "+38 097 711 55 44",
  email: "kyvenko.sergiy@gmail.com",
  linkedin: "https://www.linkedin.com/in/kryvenkosergiy/",
  github: "https://github.com/KryvenkoSergiy",
  upwork: "https://www.upwork.com/freelancers/~01708ddddf4796be2b",
  portfolio: "https://kryvenkosergiy.github.io/cv/",
  location: "Ukraine",
  yearsOfExperience: "10+",
  // Short display labels (for PDF, footer, etc.)
  linkedinDisplay: "linkedin.com/in/kryvenkosergiy",
  githubDisplay: "github.com/KryvenkoSergiy",
  upworkDisplay: "upwork.com/freelancers/~01708…",
  portfolioDisplay: "kryvenkosergiy.github.io/cv",
  pdfFilename: "Senior_Frontend_Engineer_Kryvenko_CV.pdf",
};

export const about = [
  `Senior Frontend Engineer and Tech Lead with 10+ years architecting scalable SaaS web applications using React, TypeScript, and Next.js. Specialized in production-grade UI systems, component libraries, design systems, and end-to-end product delivery for SaaS, B2B, and B2C platforms at scale.`,
  `Deep expertise in frontend architecture, state management, and data-layer design using Redux Toolkit, TanStack Query, GraphQL, and REST APIs — building high-performance applications optimized for Core Web Vitals, WCAG accessibility, and SEO. Experienced lead mentoring teams of 4-14 engineers, driving technical direction, and shipping business-critical features in Agile environments.`,
];

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "⚛️",
    color: "purple",
    skills: [
      "React",
      "Next.js",
      "Next.js App Router",
      "React Native",
      "Flutter",
    ],
  },
  {
    category: "Languages",
    icon: "💻",
    color: "blue",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "State & Data",
    icon: "🔄",
    color: "cyan",
    skills: [
      "React Query (TanStack Query)",
      "Redux Toolkit",
      "Zustand",
      "MobX",
      "Redux",
      "GraphQL",
      "Apollo Client",
      "REST APIs",
    ],
  },
  {
    category: "Styling & UI",
    icon: "🎨",
    color: "pink",
    skills: [
      "Tailwind CSS",
      "shadcn/ui",
      "Design Systems",
      "CSS Modules",
      "Responsive Web Design",
      "Web Accessibility (WCAG)",
    ],
  },
  {
    category: "Build & Delivery",
    icon: "🛠️",
    color: "orange",
    skills: [
      "Webpack",
      "Vite",
      "Storybook",
      "Vercel",
      "GitHub Actions",
      "CI/CD",
      "Code Splitting",
      "Git",
    ],
  },
  {
    category: "Architecture & Engineering",
    icon: "🧠",
    color: "green",
    skills: [
      "System Design",
      "Scalable Frontend Architecture",
      "Performance Optimization",
      "Component Architecture",
      "Design Patterns",
      "Code Review",
      "Technical Mentoring",
      "Agile / Scrum",
    ],
  },
  {
    category: "Graphics & Animation",
    icon: "✨",
    color: "fuchsia",
    skills: [
      "Canvas API",
      "WebGL",
      "React Three Fiber",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    category: "Testing",
    icon: "🧪",
    color: "red",
    skills: [
      "React Testing Library",
      "Cypress",
      "Jest",
      "End-to-End Testing",
      "Test-Driven Development (TDD)",
    ],
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  client?: string;
  startDate: string;
  endDate: string;
  current?: boolean;
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
      "Architected a scalable React application from scratch using feature-based architecture, reusable components, and modular state management for a SaaS widget builder platform.",
      "Replaced a legacy content editor with a modern React-based solution, improving performance, maintainability, and workflow usability across the platform.",
      "Improved Core Web Vitals (LCP, CLS, INP) and adopted WCAG 2.1 AA accessibility standards across multiple product surfaces.",
      "Integrated AI/LLM capabilities using OpenAI GPT and Google Gemini APIs, automating content workflows and reducing manual processing time by 60%.",
    ],
    teamSize: 6,
    technologies: [
      "React",
      "TypeScript",
      "React Query (TanStack Query)",
      "SCSS",
      "Storybook",
      "React Testing Library",
      "Gemini / GPT AI",
      "Framer Motion",
      "Zustand",
      "Paypal",
    ],
    highlight: "SaaS Platform",
  },
  {
    id: "upwork",
    role: "Senior Frontend Engineer / Tech Lead",
    company: "Upwork",
    startDate: "Jan 2023",
    endDate: "Mar 2025",
    description: [
      "Spearheaded React and TypeScript frontend solutions as a freelance Tech Lead across 5+ client engagements over 2 years.",
      "Released AI-powered SaaS platforms, warehouse management systems, and data visualization tools — owning architecture decisions, stakeholder communication, and delivery timelines independently.",
      "Incorporated AI features using OpenAI GPT and Google Gemini, automating workflows and enhancing user experience across multiple client products.",
    ],
    teamSize: 4,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "React Query (TanStack Query)",
      "Tailwind CSS",
      "Storybook",
      "React Testing Library",
      "Leonardo / GPT AI / Google Gemini",
      "Strapi / Supabase",
      "Paypal / Stripe",
      "Vercel",
      "GitHub Actions",
    ],
    highlight: "AI Platform",
  },
  {
    id: "evrlearn",
    role: "Senior Frontend Engineer / Lead",
    company: "Syndicode",
    client: "Evrlearn",
    startDate: "Dec 2021",
    endDate: "Jan 2024",
    description: [
      "Led React and TypeScript frontend development for a personalized edtech learning discovery platform.",
      "Designed advanced search, filtering, and recommendation systems processing 10k+ course catalog entries with fast, responsive UX at scale.",
      "Optimized query performance with React Query, reducing perceived load times by up to 40% across data-heavy views.",
    ],
    teamSize: 4,
    technologies: [
      "TypeScript",
      "React",
      "React Query (TanStack Query)",
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
    description: [
      "Engineered the React frontend for a cross-chain DEX with real-time swap aggregation across 5+ blockchain protocols.",
      "Shipped multi-chain portfolio analytics and the platform's first fiat on-ramp integration, expanding payment coverage by 100%.",
      "Unified the UI experience across 3 independently deployed platform surfaces (React, Blazor).",
    ],
    teamSize: 14,
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
    id: "medyoucate",
    role: "Frontend Engineer",
    company: "Syndicode",
    client: "MedYouCate",
    startDate: "Nov 2021",
    endDate: "Mar 2022",
    description: [
      "Introduced SSR with Next.js on a medical education platform, improving SEO and content delivery speed by 35%.",
      "Created interactive medical case studies using React and refactored the platform to meet WCAG 2.1 AA accessibility standards.",
    ],
    teamSize: 7,
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit",
      "React Query (TanStack Query)",
      "Storybook",
      "Git",
    ],
    highlight: "MedTech",
  },
  {
    id: "fuzu",
    role: "Frontend Engineer",
    company: "Syndicode",
    client: "Fuzu — Africa's #1 Career Platform",
    startDate: "Apr 2020",
    endDate: "Oct 2022",
    description: [
      "Scaled the React and MobX UI for Africa's leading career platform serving 100k+ monthly active users.",
      "Reduced initial load times by 30%+ in low-bandwidth (2G/3G) environments for mobile users across B2B and B2C surfaces.",
      "Built real-time data visualization using React Spring and Canvas API for interactive career insights and job market trends.",
    ],
    teamSize: 7,
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "MobX",
      "React Query (TanStack Query)",
      "React Spring",
      "Jest",
      "Enzyme",
      "Storybook",
      "Git",
    ],
    highlight: "African Scale",
  },
  {
    id: "google-stadia",
    role: "Frontend Engineer (Contract)",
    company: "Google",
    client: "Google Stadia",
    startDate: "Jun 2019",
    endDate: "Jan 2020",
    description: [
      "Built performance-critical React UI for Google Stadia's cloud gaming platform.",
      "Delivered real-time game streaming interfaces at 4K/60fps with sub-100ms input latency under strict SLAs.",
      "Tuned React rendering pipelines and applied code-splitting to meet demanding performance requirements for a global gaming audience.",
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
    highlight: "Google",
  },
  {
    id: "appclose",
    role: "Frontend Engineer",
    company: "AppClose / Casetack",
    startDate: "Jan 2018",
    endDate: "Dec 2019",
    description: [
      "Shipped 10+ core features for a React-based co-parenting app, building shared calendars, real-time messaging, and collaborative task flows across 3+ user roles.",
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
      "Owned frontend delivery for an on-demand B2B logistics platform, building real-time dispatch and tracking interfaces used by 50+ operators daily.",
      "Added route optimization features using Canvas API and GSAP, improving operational efficiency for logistics operators.",
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
      "Developed reusable JavaScript/jQuery UI components and interactive booking calculators for a microservices moving platform, maintaining consistency across 5+ independently deployed services.",
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
      "Coded Canvas API and AngularJS interactive map features for World of Tanks, serving 4.5M+ players with real-time territory control and statistics.",
    ],
    teamSize: 7,
    technologies: ["JavaScript", "AngularJS", "Canvas API", "HTML", "CSS/SCSS"],
    highlight: "Wargaming",
  },
  {
    id: "settle",
    role: "Frontend Developer",
    company: "BIG DIG",
    client: "Settle",
    startDate: "Mar 2015",
    endDate: "Sep 2015",
    description: [
      "Launched mobile-first payment and loyalty reward interfaces for a fintech startup, delivering contactless payment flows, real-time transaction status, and rewards UX.",
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
      "Crafted modular JavaScript/jQuery components for Visa's global cardholder loyalty platform serving millions across 30+ countries, covering reward browsing, redemption, and partner offer flows.",
    ],
    teamSize: 15,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS/SCSS"],
    highlight: "Visa",
  },
  {
    id: "datagroup",
    role: "Frontend Developer",
    company: "Coderoom",
    client: "Data Group",
    startDate: "Sep 2014",
    endDate: "Dec 2014",
    description: [
      "Produced JavaScript/jQuery admin dashboards and real-time data visualization tools for internal analytics platforms, serving 20+ analysts.",
    ],
    teamSize: 20,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS/SCSS"],
    highlight: "Data Analytics",
  },
];

export const education = {
  degree: "Master of Computer Engineering",
  field: "Information Technology and Programming",
  university: "Ivan Ogienka Kamianets-Podilsky National University",
  period: "2009 - 2014",
};

export const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Delivered", value: "30+" },
  { label: "Engineers Led", value: "14" },
  { label: "Technologies", value: "40+" },
];

export const heroDescription = `${personalInfo.yearsOfExperience} years building scalable and high-performance web applications. Specialized in React and modern frontend architecture, with a focus on performance, user experience, and leading engineering teams to deliver impactful products.`;

export const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "TanStack Query",
  "Tailwind CSS",
  "GraphQL",
  "Redux",
  "React Native",
];

export const coreExpertise = [
  {
    title: "React Ecosystem",
    desc: "React, Next.js, and React Native — building scalable UI architectures from reusable components to production-grade applications.",
    color: "from-purple-500 to-violet-400",
  },
  {
    title: "JavaScript / TypeScript",
    desc: "Modern JavaScript and TypeScript at scale — advanced typing, architectural patterns, and runtime performance optimization.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Team & Tech Leadership",
    desc: "Led and mentored engineering teams of 4-14 engineers across startups, scale-ups, and Google, driving architecture and delivery.",
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "Performance Optimization",
    desc: "Improving Core Web Vitals through code splitting, lazy loading, rendering optimization, and real-time UI performance tuning.",
    color: "from-orange-500 to-amber-400",
  },
];

export const values = [
  {
    emoji: "⚡",
    title: "Performance First",
    desc: "Focused on fast load times, Core Web Vitals, and smooth, responsive user interactions.",
  },
  {
    emoji: "🤝",
    title: "Team Empowerment",
    desc: "Building strong teams through mentoring, ownership, and clear communication.",
  },
  {
    emoji: "🎨",
    title: "User Experience & Quality",
    desc: "Delivering polished, consistent interfaces with strong attention to detail.",
  },
  {
    emoji: "📐",
    title: "Scalable Architecture",
    desc: "Designing maintainable, scalable systems that support long-term growth.",
  },
  {
    emoji: "🌐",
    title: "Cross-Browser Compatibility",
    desc: "Ensuring consistent, reliable experiences across all major browsers and devices.",
  },
];

export const careerHighlights = [
  {
    gradient: "from-purple-500 to-violet-400",
    label: "Architecture",
    title: "Frontend Architecture",
    points: [
      "Architected modular React and TypeScript frontend systems and led system design decisions across 10+ products, enabling parallel team delivery without cross-team dependencies",
      "Owned and evolved Storybook-based design systems adopted across multiple product teams, improving UI consistency and developer velocity",
      "Defined component architecture standards and code review practices that scaled with team and product growth",
    ],
  },
  {
    gradient: "from-blue-500 to-cyan-400",
    label: "Leadership",
    title: "Team & Tech Leadership",
    points: [
      "Managed and mentored cross-functional engineering teams of 4–14 engineers across startups, scale-ups, and Google",
      "Established code review culture, onboarding processes, and engineering quality standards from the ground up",
      "Served as primary technical decision-maker on frontend architecture, tooling selection, and cross-team delivery",
    ],
  },
  {
    gradient: "from-pink-500 to-rose-400",
    label: "Strategy",
    title: "Technical Strategy",
    points: [
      "Shipped production-grade AI features (GPT-4, Gemini, Leonardo AI) into live SaaS products and internal developer workflows",
      "Achieved 4K/60fps real-time streaming UI at Google Stadia with sub-100ms input latency under strict SLAs",
      "Introduced React Query, Storybook, and CI/CD practices that measurably improved developer experience and delivery velocity",
    ],
  },
];
