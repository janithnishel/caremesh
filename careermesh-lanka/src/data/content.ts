/**
 * Content data — resources, testimonials, case studies, partners, team.
 * All start empty or demo-only per content integrity rules:
 * never invent testimonials, partner names, statistics, team bios.
 */

export type Resource = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Career Advice"
    | "Internship Preparation"
    | "CV & Interview Guidance"
    | "University Employability"
    | "Employer Recruitment"
    | "Graduate Development"
    | "Talent Management"
    | "ClientFlow CRM Insights";
  readingTime: string;
  isDemo: boolean;
  body?: string[];
};

export const resources: Resource[] = [
  {
    slug: "how-to-prepare-for-your-first-internship",
    title: "How to Prepare for Your First Internship",
    excerpt:
      "A practical guide to getting ready for your first professional internship experience.",
    category: "Internship Preparation",
    readingTime: "5 min read",
    isDemo: true,
    body: [
      "Preparing for your first internship starts with understanding what employers expect and how to present yourself professionally.",
      "Begin by reviewing your CV, researching the company, and practicing common interview questions.",
      "This is a sample article included to demonstrate the resource layout. Real content will be supplied by the CareerMesh team.",
    ],
  },
  {
    slug: "writing-a-cv-that-stands-out",
    title: "Writing a CV That Stands Out",
    excerpt: "Structure, content and formatting tips for a professional CV.",
    category: "CV & Interview Guidance",
    readingTime: "6 min read",
    isDemo: true,
    body: [
      "A strong CV clearly communicates your skills, education and experience.",
      "Keep it concise, well-structured and tailored to the role you're applying for.",
      "This is a sample article. Real content will be supplied by the CareerMesh team.",
    ],
  },
  {
    slug: "why-employability-matters-for-universities",
    title: "Why Employability Matters for Universities",
    excerpt: "How industry connections and structured programs improve graduate outcomes.",
    category: "University Employability",
    readingTime: "7 min read",
    isDemo: true,
    body: [
      "Graduate employability is increasingly important for educational institutions.",
      "Industry partnerships and structured internship programs help bridge the gap between study and work.",
      "This is a sample article. Real content will be supplied by the CareerMesh team.",
    ],
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export const resourceCategories = [
  "Career Advice",
  "Internship Preparation",
  "CV & Interview Guidance",
  "University Employability",
  "Employer Recruitment",
  "Graduate Development",
  "Talent Management",
  "ClientFlow CRM Insights",
] as const;

/** Testimonials — empty until approved. Never fabricate. */
export type Testimonial = {
  slug: string;
  name: string;
  role: string;
  organization: string;
  audience: "students" | "education" | "employers" | "recruiters";
  quote: string;
  isDemo: boolean;
};

export const testimonials: Testimonial[] = [];

/** Success stories — empty until approved. */
export type SuccessStory = {
  slug: string;
  title: string;
  audience: "students" | "education" | "employers" | "recruiters";
  summary: string;
  isDemo: boolean;
};

export const successStories: SuccessStory[] = [];

/** Case studies — empty until approved. */
export type CaseStudy = {
  slug: string;
  title: string;
  audience: "education" | "employers" | "recruiters";
  summary: string;
  isDemo: boolean;
};

export const caseStudies: CaseStudy[] = [];

/** Partners — empty until approved. Never fabricate names or logos. */
export type Partner = {
  name: string;
  audience: "education" | "employers" | "recruiters";
  category: string;
};

export const partners: Partner[] = [];

/** Team — empty until supplied. Never invent names, titles or bios. */
export type TeamMember = {
  name: string;
  title: string;
  bio: string;
};

export const team: TeamMember[] = [];
