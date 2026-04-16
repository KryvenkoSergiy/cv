export const personalInfo = {
  name: "Sergii Kryvenko",
  title: "Frontend Engineer",
  roles: ["Frontend Engineer", "React Specialist", "Team Lead", "Tech Lead"],
  phone: "+38 097 711 55 44",
  email: "kyvenko.sergiy@gmail.com",
  linkedin: "https://www.linkedin.com/in/kryvenkosergiy/",
  location: "Ukraine",
  yearsOfExperience: "10+",
};

export const about = [
  `Frontend Engineer with 10+ years building scalable web applications. Deep expertise in React and TypeScript - from component architecture and design systems to full product delivery.`,
  `Experienced in designing maintainable frontend systems, working with state and data layers such as Redux Toolkit, GraphQL, and TanStack Query. Focused on building predictable, performant applications with clear structure and long-term scalability.`,
  `As a lead, I drive technical decisions, mentor engineers, and foster a strong code review and engineering culture. I collaborate closely with product and design to deliver reliable, high-quality solutions that meet real business needs.`,
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
      "Next.js (SSR, SSG, App Router)",
      "React Native",
      "Flutter",
    ],
  },
  {
    category: "Languages",
    icon: "💻",
    color: "blue",
    skills: ["JavaScript (ES6+)", "TypeScript (advanced)", "HTML5", "CSS3"],
  },
  {
    category: "State & Data",
    icon: "🔄",
    color: "cyan",
    skills: [
      "TanStack Query",
      "Zustand",
      "Redux Toolkit",
      "MobX",
      "Redux",
      "GraphQL (Apollo / urql)",
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
      "Responsive & Adaptive Design",
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
      "CI/CD (GitHub Actions)",
      "Code Splitting",
    ],
  },
  {
    category: "Architecture & Engineering",
    icon: "🧠",
    color: "green",
    skills: [
      "Component Architecture",
      "Scalable Frontend Architecture",
      "Design Patterns",
      "Code Review & Mentoring",
    ],
  },
  {
    category: "Graphics & Animation",
    icon: "✨",
    color: "fuchsia",
    skills: [
      "Canvas",
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
      "Test-Driven Development",
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
  description: string;
  responsibilities: string;
  teamSize: number;
  technologies: string[];
  highlight?: string;
}

export const experiences: Experience[] = [
  {
    id: "opinion-stage",
    role: "Front-End Engineer | Lead",
    company: "Opinion Stage",
    startDate: "Apr 2025",
    endDate: "Present",
    current: true,
    description:
      "Leading the architecture and development of a highly extensible widget builder and internal design system, enabling scalable product growth and cross-team consistency. Driving technical direction, improving developer experience, and ensuring seamless integration across the platform ecosystem with a strong focus on performance, accessibility, and maintainability.",
    responsibilities:
      "Own frontend architecture and drive technical decisions for a modular widget builder using React and TypeScript. Design and evolve a scalable design system with Storybook, ensuring consistency across multiple products and teams. Lead collaboration across product, design, and backend to deliver complex features end-to-end. Integrate AI-driven capabilities (GPT-based tools) into both user-facing features and internal workflows. Establish testing strategy using React Testing Library and enforce code quality standards. Continuously optimize performance, accessibility, and developer experience across responsive applications.",
    teamSize: 6,
    technologies: [
      "Next.js",
      "Strapi/PayPal",
      "TanStack Query",
      "Tailwind CSS",
      "TypeScript",
      "Leonardo/GPT AI",
      "Storybook",
      "React Testing Library",
      "Framer Motion",
    ],
    highlight: "Opinion Stage",
  },
  {
    id: "upwork",
    role: "Front-End Engineer | Lead",
    company: "Upwork (Freelance)",
    startDate: "Jan 2023",
    endDate: "Mar 2025",
    description:
      "Delivered end-to-end frontend solutions for AI-driven platforms and complex business systems, including dynamic content generators and warehouse management systems. Acted as a technical lead across freelance engagements, owning architecture and delivery.",
    responsibilities:
      "Lead frontend architecture and implementation across multiple client projects. Translate product requirements and UX designs into scalable, maintainable UI systems. Build high-performance applications with a strong focus on load time and responsiveness. Collaborate directly with stakeholders, taking ownership of technical decisions and delivery timelines. Optimize applications for performance and scalability across web and mobile platforms. Ensure code quality through testing, reviews, and best practices.",
    teamSize: 4,
    technologies: [
      "Next.js",
      "Strapi",
      "TanStack Query",
      "Tailwind CSS",
      "TypeScript",
      "Leonardo/GPT AI",
      "Storybook",
      "React Testing Library",
    ],
    highlight: "AI Platform",
  },
  {
    id: "evrlearn",
    role: "Front-End Engineer | Lead",
    company: "Syndicode",
    client: "Evrlearn",
    startDate: "Dec 2021",
    endDate: "Jan 2024",
    description:
      "Led the development of a high-performance client-side application with advanced search and filtering capabilities, enabling personalized learning discovery at scale.",
    responsibilities:
      "Architect and implement complex search and filtering systems for large datasets. Optimize query performance and state management for fast, responsive UX. Collaborate with product and design to refine user journeys and personalization logic. Ensure scalability and maintainability of frontend architecture. Contribute to testing strategy and code quality practices.",
    teamSize: 5,
    technologies: [
      "TypeScript",
      "React",
      "React Query",
      "React Testing Library",
      "Git",
    ],
    highlight: "EdTech",
  },
  {
    id: "clearcryptos",
    role: "Front-End Engineer | Lead",
    company: "ClearCryptos",
    startDate: "Apr 2022",
    endDate: "Jan 2023",
    description:
      "Decentralized exchange (DEX) with cross-protocol crypto swap aggregation, real-time analytics, and the first fiat on-ramp integration for a DEX platform.",
    responsibilities:
      "Built a cross-chain analytics and swap aggregator interface with real-time rate comparison, portfolio visualization, and fiat on-ramp integration. Worked across React, Vue, and Blazor stacks to unify the frontend experience across platform surfaces.",
    teamSize: 14,
    technologies: ["JavaScript", "React", "Vue", "Blazor", "HTML", "CSS"],
    highlight: "Crypto / DeFi",
  },
  {
    id: "medyoucate",
    role: "Front-End Engineer",
    company: "Syndicode",
    client: "MedYouCate",
    startDate: "Nov 2021",
    endDate: "Mar 2022",
    description:
      "Developed a scalable SSR platform using Next.js to deliver high-quality educational content for medical professionals.",
    responsibilities:
      "Implement SSR architecture with Next.js to improve SEO and performance. Build reusable UI components for video-based learning experiences. Collaborate with backend and design teams to ensure seamless content delivery. Optimize application performance and accessibility.",
    teamSize: 7,
    technologies: [
      "JavaScript",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "Storybook",
      "Git",
    ],
    highlight: "Medical Learning",
  },
  {
    id: "fuzu",
    role: "Front-End Engineer",
    company: "Syndicode",
    client: "Fuzu — Africa's #1 Career Platform",
    startDate: "Apr 2020",
    endDate: "Oct 2022",
    description:
      "Built and scaled a high-traffic career platform optimized for low-bandwidth environments, serving emerging markets.",
    responsibilities:
      "Develop performant UI optimized for low-bandwidth and constrained devices. Contribute to both B2B and B2C platforms with shared architecture. Improve application performance, accessibility, and responsiveness. Collaborate with cross-functional teams to deliver scalable features.",
    teamSize: 7,
    technologies: [
      "JavaScript",
      "React",
      "MobX",
      "React Query",
      "React Spring",
      "Jest",
      "Enzyme",
      "Storybook",
      "Git",
    ],
    highlight: "Top African Startup",
  },
  {
    id: "google-stadia",
    role: "Front-End Engineer | Tech Lead",
    company: "Google",
    client: "Google Stadia",
    startDate: "Jun 2019",
    endDate: "Jan 2020",
    description:
      "Worked on performance-critical frontend systems for cloud gaming, contributing to real-time streaming experiences at 4K/60fps.",
    responsibilities:
      "Develop highly optimized UI components for real-time applications. Focus on rendering performance and low-latency interactions. Collaborate with engineering teams to ensure stable and responsive user experience. Contribute to performance tuning and debugging of complex systems.",
    teamSize: 12,
    technologies: [
      "JavaScript",
      "React",
      "Redux Toolkit",
      "React Three Fiber",
      "React Motion",
      "React Testing Library",
      "Canvas",
      "Storybook",
      "Git",
    ],
    highlight: "Google",
  },
  {
    id: "appclose",
    role: "Front-End Engineer",
    company: "AppClose | Casetack",
    startDate: "Jan 2018",
    endDate: "Dec 2019",
    description:
      "Developed a feature-rich communication platform with advanced scheduling and collaboration tools.",
    responsibilities:
      "Build scalable UI components for communication and calendar features. Maintain consistency across complex interactive flows. Collaborate with backend and design teams to deliver new features. Ensure reliability and usability of core user interactions.",
    teamSize: 8,
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Redux Saga",
      "React Motion",
      "Canvas",
      "Storybook",
      "Git",
    ],
  },
  {
    id: "senden24",
    role: "Front-End Engineer",
    company: "Syndicode",
    client: "Senden 24 GmbH",
    startDate: "Jan 2017",
    endDate: "Dec 2018",
    description:
      "Owned frontend development for an on-demand logistics platform, delivering responsive and performant interfaces.",
    responsibilities:
      "Take ownership of frontend implementation and feature delivery. Collaborate closely with backend and product teams. Build responsive UI for real-time logistics workflows. Ensure maintainability and scalability of the codebase.",
    teamSize: 4,
    technologies: [
      "JavaScript",
      "jQuery",
      "Canvas",
      "HTML",
      "CSS",
      "GreenSock",
    ],
  },
  {
    id: "movinga",
    role: "Front-End Engineer",
    company: "Syndicode",
    client: "Movinga",
    startDate: "Jan 2016",
    endDate: "Jul 2016",
    description:
      "Implemented user interfaces within a microservices-based platform, ensuring consistency across services.",
    responsibilities:
      "Translate design concepts into functional UI components. Maintain consistency across multiple services and platforms. Collaborate with cross-functional teams to deliver features. Improve code structure and maintainability.",
    teamSize: 5,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    id: "wargaming",
    role: "Front-End Developer",
    company: "Wargaming",
    startDate: "Sep 2015",
    endDate: "Mar 2016",
    description:
      "Developed interactive map-based experiences for a large-scale gaming platform.",
    responsibilities:
      "Implement interactive map features with focus on performance. Work with dynamic visual data and real-time rendering. Collaborate with design and backend teams to deliver engaging user experiences.",
    teamSize: 7,
    technologies: ["JavaScript", "Angular", "HTML", "CSS", "Canvas"],
    highlight: "Wargaming",
  },
  {
    id: "settle",
    role: "Front-End Developer",
    company: "Settle",
    startDate: "Mar 2015",
    endDate: "Sep 2015",
    description:
      "Contributed to the development of an early-stage fintech product focused on mobile payments and loyalty programs.",
    responsibilities:
      "Build user-friendly payment interfaces and flows. Support rapid iteration in a startup environment. Collaborate with product and design teams to improve UX.",
    teamSize: 5,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    id: "visa",
    role: "Front-End Developer",
    company: "Coderoom",
    client: "Visa GlobalBonus",
    startDate: "Oct 2014",
    endDate: "Feb 2015",
    description:
      "Built frontend components for a global rewards platform for Visa cardholders.",
    responsibilities:
      "Develop UI components for loyalty and rewards features. Ensure consistency and usability across user flows. Collaborate with team members to deliver stable releases.",
    teamSize: 15,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS"],
    highlight: "Visa",
  },
  {
    id: "datagroup",
    role: "Front-End Developer",
    company: "Coderoom",
    client: "Data Group",
    startDate: "Sep 2014",
    endDate: "Dec 2014",
    description:
      "Developed internal and public-facing interfaces for analytics and data visualization platforms.",
    responsibilities:
      "Build admin panels and user-facing tools for data interaction. Implement UI for data visualization and reporting. Collaborate with backend teams for data integration.",
    teamSize: 20,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS"],
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
  { label: "Team Members Led", value: "10+" },
  { label: "Technologies", value: "40+" },
];

export const careerHighlights = [
  {
    gradient: "from-purple-500 to-violet-400",
    label: "Architecture",
    title: "Frontend Architecture",
    points: [
      "Designed scalable component systems and modular app architectures across 10+ products",
      "Built and maintained internal design systems with Storybook for cross-team consistency",
      "Established frontend structure patterns adopted across multiple product teams",
    ],
  },
  {
    gradient: "from-blue-500 to-cyan-400",
    label: "Leadership",
    title: "Team & Tech Leadership",
    points: [
      "Led and mentored cross-functional engineering teams of 4-14 developers",
      "Drove code review culture, technical standards, and onboarding practices",
      "Acted as the primary technical decision-maker across architecture and tooling",
    ],
  },
  {
    gradient: "from-pink-500 to-rose-400",
    label: "Strategy",
    title: "Technical Strategy",
    points: [
      "Integrated AI-powered tools (GPT, Leonardo) into both product and internal workflows",
      "Led performance optimization initiatives including 4K real-time rendering at Google",
      "Evaluated and introduced new technologies to improve DX and delivery speed",
    ],
  },
];
