import type { LinkProps } from "@tanstack/react-router";

/**
 * Internship program categories.
 * Dynamic routes: /students/internship-programs/[category]
 */
export type ProgramCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string; // lucide icon name (resolved in component)
  tone: "students";
  whatYouLearn: string[];
  academicBackgrounds: string[];
  exampleTasks: string[];
  skillsDeveloped: string[];
  workEnvironments: string[];
  requirements: string[];
  howToRegister: string[];
  isDemo?: boolean;
};

export const programCategories: ProgramCategory[] = [
  {
    slug: "it-software-development",
    title: "IT & Software Development",
    shortDescription:
      "Software engineering, web and mobile development, QA, and data fundamentals.",
    icon: "Code2",
    tone: "students",
    whatYouLearn: [
      "Practical software development workflows",
      "Version control and collaborative coding",
      "Building and maintaining applications",
      "Testing and quality assurance practices",
    ],
    academicBackgrounds: [
      "Computer Science",
      "Software Engineering",
      "Information Technology",
      "Information Systems",
    ],
    exampleTasks: [
      "Feature development under mentorship",
      "Bug fixing and code review participation",
      "Writing tests and documentation",
      "Pair programming with senior developers",
    ],
    skillsDeveloped: [
      "Programming proficiency",
      "Collaboration and code review",
      "Problem solving and debugging",
      "Technical documentation",
    ],
    workEnvironments: [
      "Technology companies",
      "Software agencies",
      "In-house IT teams",
      "Startups",
    ],
    requirements: [
      "Current enrollment in a relevant degree program",
      "Basic programming knowledge",
      "Communication skills",
      "Availability for the program duration",
    ],
    howToRegister: [
      "Submit the student registration form",
      "Complete a consultation and profile review",
      "Prepare your CV and supporting documents",
      "Participate in opportunity matching",
    ],
  },
  {
    slug: "accounting",
    title: "Accounting",
    shortDescription: "Practical accounting operations, bookkeeping, and financial reporting.",
    icon: "Calculator",
    tone: "students",
    whatYouLearn: [
      "Day-to-day accounting operations",
      "Bookkeeping and ledger management",
      "Financial reporting fundamentals",
      "Use of accounting software",
    ],
    academicBackgrounds: ["Accounting", "Finance", "Business Management"],
    exampleTasks: [
      "Reconciliation and data entry",
      "Assisting with financial statements",
      "Invoice and expense processing",
      "Supporting month-end close",
    ],
    skillsDeveloped: [
      "Accounting software proficiency",
      "Attention to detail",
      "Financial documentation",
      "Regulatory awareness",
    ],
    workEnvironments: ["Accounting firms", "Finance departments", "Corporate offices"],
    requirements: [
      "Current enrollment in an Accounting or Finance program",
      "Basic accounting knowledge",
      "Attention to detail",
      "Availability for the program duration",
    ],
    howToRegister: [
      "Submit the student registration form",
      "Complete a consultation and profile review",
      "Prepare your CV and supporting documents",
      "Participate in opportunity matching",
    ],
  },
  {
    slug: "finance",
    title: "Finance",
    shortDescription: "Financial analysis, reporting, and business finance operations.",
    icon: "LineChart",
    tone: "students",
    whatYouLearn: [
      "Financial analysis techniques",
      "Budgeting and forecasting support",
      "Financial reporting",
      "Business finance operations",
    ],
    academicBackgrounds: ["Finance", "Accounting", "Business Administration", "Economics"],
    exampleTasks: [
      "Assisting with financial models",
      "Variance analysis support",
      "Report preparation",
      "Data gathering and validation",
    ],
    skillsDeveloped: [
      "Financial analysis",
      "Excel and financial tools",
      "Analytical thinking",
      "Business communication",
    ],
    workEnvironments: ["Financial services firms", "Corporate finance teams", "Banks"],
    requirements: [
      "Current enrollment in a Finance or related program",
      "Quantitative aptitude",
      "Excel proficiency",
      "Availability for the program duration",
    ],
    howToRegister: [
      "Submit the student registration form",
      "Complete a consultation and profile review",
      "Prepare your CV and supporting documents",
      "Participate in opportunity matching",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering",
    shortDescription: "Civil, mechanical, electrical, and electronics engineering exposure.",
    icon: "HardHat",
    tone: "students",
    whatYouLearn: [
      "Applied engineering practice",
      "Project and site documentation",
      "Technical drawing and specifications",
      "Engineering workflows",
    ],
    academicBackgrounds: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Electronics Engineering",
    ],
    exampleTasks: [
      "Supporting project documentation",
      "Assisting with site or design reviews",
      "Data collection and reporting",
      "Technical research",
    ],
    skillsDeveloped: [
      "Applied technical skills",
      "Project documentation",
      "Team collaboration",
      "Technical communication",
    ],
    workEnvironments: [
      "Engineering firms",
      "Construction companies",
      "Manufacturing",
      "Consultancies",
    ],
    requirements: [
      "Current enrollment in an Engineering program",
      "Foundational engineering knowledge",
      "Willingness to work on-site where required",
      "Availability for the program duration",
    ],
    howToRegister: [
      "Submit the student registration form",
      "Complete a consultation and profile review",
      "Prepare your CV and supporting documents",
      "Participate in opportunity matching",
    ],
  },
  {
    slug: "business-administration",
    title: "Business Administration",
    shortDescription: "Business operations, administration, and project coordination.",
    icon: "Briefcase",
    tone: "students",
    whatYouLearn: [
      "Business operations and workflows",
      "Administrative coordination",
      "Project support",
      "Stakeholder communication",
    ],
    academicBackgrounds: ["Business Administration", "Management", "Commerce"],
    exampleTasks: [
      "Coordinating administrative tasks",
      "Supporting project management",
      "Document and report preparation",
      "Process improvement support",
    ],
    skillsDeveloped: [
      "Business operations",
      "Organization and coordination",
      "Communication",
      "Process management",
    ],
    workEnvironments: ["Corporate offices", "Operations teams", "Startups", "Consultancies"],
    requirements: [
      "Current enrollment in a Business or related program",
      "Organizational skills",
      "Communication skills",
      "Availability for the program duration",
    ],
    howToRegister: [
      "Submit the student registration form",
      "Complete a consultation and profile review",
      "Prepare your CV and supporting documents",
      "Participate in opportunity matching",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Content, social media, campaigns, and marketing analytics.",
    icon: "Megaphone",
    tone: "students",
    whatYouLearn: [
      "Digital marketing campaign planning",
      "Content and social media management",
      "Marketing analytics",
      "Brand communication",
    ],
    academicBackgrounds: ["Marketing", "Business", "Media Studies", "Communications"],
    exampleTasks: [
      "Creating and scheduling content",
      "Campaign performance tracking",
      "Supporting marketing campaigns",
      "Audience research",
    ],
    skillsDeveloped: [
      "Digital marketing tools",
      "Content creation",
      "Analytics interpretation",
      "Campaign management",
    ],
    workEnvironments: ["Marketing agencies", "In-house marketing teams", "Startups"],
    requirements: [
      "Current enrollment in a Marketing or related program",
      "Creative aptitude",
      "Familiarity with social platforms",
      "Availability for the program duration",
    ],
    howToRegister: [
      "Submit the student registration form",
      "Complete a consultation and profile review",
      "Prepare your CV and supporting documents",
      "Participate in opportunity matching",
    ],
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    shortDescription: "HR operations, recruitment support, and employee coordination.",
    icon: "Users",
    tone: "students",
    whatYouLearn: [
      "HR operations and coordination",
      "Recruitment support",
      "Employee engagement activities",
      "HR documentation",
    ],
    academicBackgrounds: ["Human Resource Management", "Business Management", "Psychology"],
    exampleTasks: [
      "Supporting recruitment coordination",
      "Maintaining HR records",
      "Assisting with onboarding",
      "Employee engagement support",
    ],
    skillsDeveloped: [
      "HR processes",
      "Communication and coordination",
      "Documentation",
      "Interpersonal skills",
    ],
    workEnvironments: ["Corporate HR teams", "Recruitment agencies", "Consultancies"],
    requirements: [
      "Current enrollment in an HR or related program",
      "Interpersonal skills",
      "Confidentiality",
      "Availability for the program duration",
    ],
    howToRegister: [
      "Submit the student registration form",
      "Complete a consultation and profile review",
      "Prepare your CV and supporting documents",
      "Participate in opportunity matching",
    ],
  },
  {
    slug: "hospitality-tourism",
    title: "Hospitality & Tourism",
    shortDescription: "Hospitality operations, guest services, and tourism coordination.",
    icon: "UtensilsCrossed",
    tone: "students",
    whatYouLearn: [
      "Hospitality operations",
      "Guest services and coordination",
      "Event and tourism support",
      "Service standards",
    ],
    academicBackgrounds: ["Hospitality Management", "Tourism Management", "Hotel Management"],
    exampleTasks: [
      "Supporting front-of-house operations",
      "Coordinating guest services",
      "Event preparation",
      "Operations documentation",
    ],
    skillsDeveloped: [
      "Customer service",
      "Operations coordination",
      "Communication",
      "Service excellence",
    ],
    workEnvironments: ["Hotels and resorts", "Tourism operators", "Event companies"],
    requirements: [
      "Current enrollment in a Hospitality or Tourism program",
      "Customer-facing aptitude",
      "Communication skills",
      "Availability for the program duration",
    ],
    howToRegister: [
      "Submit the student registration form",
      "Complete a consultation and profile review",
      "Prepare your CV and supporting documents",
      "Participate in opportunity matching",
    ],
  },
  {
    slug: "other-professional-areas",
    title: "Other Professional Areas",
    shortDescription: "Additional professional disciplines — tell us your field of interest.",
    icon: "Sparkles",
    tone: "students",
    whatYouLearn: [
      "Practical exposure to your chosen field",
      "Professional workplace skills",
      "Industry-specific workflows",
    ],
    academicBackgrounds: ["Open to a range of academic backgrounds"],
    exampleTasks: [
      "Role-specific tasks based on opportunity",
      "Supporting day-to-day operations",
      "Learning under mentorship",
    ],
    skillsDeveloped: ["Professional workplace skills", "Industry exposure", "Communication"],
    workEnvironments: ["Varies by opportunity and host organization"],
    requirements: [
      "Current enrollment in a relevant program",
      "Willingness to learn",
      "Communication skills",
      "Availability for the program duration",
    ],
    howToRegister: [
      "Submit the student registration form",
      "Indicate your field of interest",
      "Complete a consultation",
      "Participate in opportunity matching where available",
    ],
  },
];

export const programInclusions: { item: string; included: boolean }[] = [
  { item: "Consultation and profile review", included: true },
  { item: "CV preparation support", included: true },
  { item: "Interview preparation", included: true },
  { item: "Career development guidance", included: true },
  { item: "Placement coordination", included: true },
  { item: "Progress reviews", included: true },
  { item: "Completion documentation", included: true },
  { item: "Mentor support (where available)", included: false },
  { item: "Advanced specialized training modules", included: false },
];

export function getProgramCategory(slug: string): ProgramCategory | undefined {
  return programCategories.find((p) => p.slug === slug);
}

/** Student program journey steps — durations editable from config. */
export const programJourney: {
  step: number;
  title: string;
  description: string;
  duration?: string;
}[] = [
  {
    step: 1,
    title: "Initial Registration",
    description: "Submit your registration and express your interest.",
    duration: "Day 1",
  },
  {
    step: 2,
    title: "Consultation & Profile Review",
    description: "We review your background and goals with you.",
    duration: "Week 1",
  },
  {
    step: 3,
    title: "CV & Career Preparation",
    description: "We help you prepare a professional CV.",
    duration: "Week 1–2",
  },
  {
    step: 4,
    title: "Interview Preparation",
    description: "Practice and guidance for employer interviews.",
    duration: "Week 2",
  },
  {
    step: 5,
    title: "Opportunity Matching",
    description: "We match you to suitable opportunities where available.",
    duration: "Week 2–3",
  },
  {
    step: 6,
    title: "Employer Interviews",
    description: "Interviews with host companies.",
    duration: "Week 3–4",
  },
  {
    step: 7,
    title: "Internship Confirmation",
    description: "Confirm your placement details.",
    duration: "Week 4",
  },
  {
    step: 8,
    title: "Internship Commencement",
    description: "Begin your internship with your host company.",
    duration: "Month 2",
  },
  {
    step: 9,
    title: "Progress Monitoring",
    description: "Ongoing check-ins and support during your internship.",
    duration: "Ongoing",
  },
  {
    step: 10,
    title: "Completion & Feedback",
    description: "Review outcomes and receive completion documentation.",
    duration: "Final",
  },
];
