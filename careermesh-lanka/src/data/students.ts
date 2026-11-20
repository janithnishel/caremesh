/**
 * Student-specific content data.
 * Driven from typed data so it is easy to edit and CMS-ready.
 * No invented statistics, testimonials or partner names.
 */

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

/* Why Do an Internship — 8 benefit-focused cards. */
export const whyInternshipBenefits: Benefit[] = [
  {
    icon: "Briefcase",
    title: "Practical Experience",
    description:
      "Apply what you've learned in a real workplace and gain hands-on professional experience.",
  },
  {
    icon: "BookOpen",
    title: "Applying Academic Knowledge",
    description:
      "Bridge the gap between classroom theory and how things work in practice in your field.",
  },
  {
    icon: "MessageSquare",
    title: "Professional Communication",
    description:
      "Develop how you communicate and collaborate with colleagues, clients and managers.",
  },
  {
    icon: "Building2",
    title: "Workplace Exposure",
    description:
      "Understand professional environments, expectations, and workplace culture first-hand.",
  },
  {
    icon: "Network",
    title: "Industry Networking",
    description:
      "Build connections with professionals and peers that can support your future career.",
  },
  {
    icon: "Sparkles",
    title: "Career Confidence",
    description:
      "Grow your confidence by taking on real responsibilities and contributing to real work.",
  },
  {
    icon: "Users",
    title: "Professional References",
    description: "Earn references and relationships that strengthen your future applications.",
  },
  {
    icon: "Compass",
    title: "Understanding Career Paths",
    description:
      "Explore roles and industries to make more informed decisions about your direction.",
  },
];

/* Why CareerMesh — structured support, no unverified performance statistics. */
export const whyCareerMeshBenefits: Benefit[] = [
  {
    icon: "ListChecks",
    title: "Structured Preparation",
    description:
      "A clear, guided pathway from registration to placement so you know what to expect at each step.",
  },
  {
    icon: "Compass",
    title: "Career Guidance",
    description:
      "Personalised consultation and profile review to help you position yourself effectively.",
  },
  {
    icon: "Network",
    title: "Industry Relationships",
    description:
      "Connections with employers and host companies across a range of professional disciplines.",
  },
  {
    icon: "Handshake",
    title: "Placement Coordination",
    description:
      "We coordinate opportunity matching and employer introductions where suitable opportunities exist.",
  },
  {
    icon: "LifeBuoy",
    title: "Ongoing Student Support",
    description:
      "Progress monitoring and check-ins throughout your program so you're supported along the way.",
  },
  {
    icon: "Workflow",
    title: "ClientFlow-Enabled Tracking",
    description:
      "Your journey is coordinated through ClientFlow, keeping communication and next steps organised.",
  },
];

/* Entry requirements — the areas assessed, editable and subject to management approval. */
export type EntryRequirement = {
  icon: string;
  label: string;
  description: string;
};

export const entryRequirements: EntryRequirement[] = [
  {
    icon: "GraduationCap",
    label: "Academic Background",
    description:
      "Enrollment in a relevant degree or program aligned to your preferred internship field.",
  },
  {
    icon: "BookOpen",
    label: "Current Study Status",
    description: "Confirmation of your current academic standing and study status.",
  },
  {
    icon: "Compass",
    label: "Preferred Industry",
    description: "An indication of the professional field you'd like to gain experience in.",
  },
  {
    icon: "MessageSquare",
    label: "Communication Skills",
    description: "Reasonable communication skills for a professional workplace environment.",
  },
  {
    icon: "Clock",
    label: "Availability",
    description:
      "Availability for the program duration, including any on-site requirements where applicable.",
  },
  {
    icon: "FileText",
    label: "Required Documents",
    description:
      "Supporting documents such as CV, enrollment confirmation and identification as required.",
  },
];

/* Career Development Toolkit — modules structured for future LMS / e-learning integration. */
export type ToolkitModule = {
  number: number;
  title: string;
  description: string;
  icon: string;
};

export const careerToolkitModules: ToolkitModule[] = [
  {
    number: 1,
    title: "Personal Branding",
    description: "Understand how to present your professional identity and stand out to employers.",
    icon: "Sparkles",
  },
  {
    number: 2,
    title: "Effective Communication",
    description: "Build clarity and confidence in how you communicate in professional settings.",
    icon: "MessageSquare",
  },
  {
    number: 3,
    title: "Business Skills & Etiquette",
    description: "Learn professional conduct, workplace behaviour and common business conventions.",
    icon: "Briefcase",
  },
  {
    number: 4,
    title: "Business Communication",
    description: "Write and speak professionally: emails, meetings and workplace correspondence.",
    icon: "Mail",
  },
  {
    number: 5,
    title: "Career Path Planning",
    description: "Map your goals and make informed decisions about your direction and next steps.",
    icon: "Compass",
  },
  {
    number: 6,
    title: "Interview Preparation",
    description: "Prepare for common interview formats, questions and professional presentation.",
    icon: "Users",
  },
  {
    number: 7,
    title: "CV Development",
    description: "Structure and refine a clear, professional CV that communicates your strengths.",
    icon: "FileText",
  },
  {
    number: 8,
    title: "Workplace Readiness",
    description: "Understand workplace expectations, collaboration and how to add value early.",
    icon: "Building2",
  },
];

/* Host company benefits — how host organizations work with CareerMesh. */
export type HostCompanyBenefit = {
  icon: string;
  title: string;
  description: string;
};

export const hostCompanyBenefits: HostCompanyBenefit[] = [
  {
    icon: "Building2",
    title: "Industry Categories",
    description:
      "Host companies span IT, finance, engineering, business, marketing, HR and hospitality.",
  },
  {
    icon: "Sparkles",
    title: "Host Company Benefits",
    description:
      "Hosts gain emerging talent, fresh perspectives and support for projects and workload.",
  },
  {
    icon: "Users",
    title: "Mentorship Expectations",
    description:
      "Hosts provide mentorship and guidance so interns learn under experienced professionals.",
  },
  {
    icon: "ClipboardList",
    title: "Placement Responsibilities",
    description:
      "Hosts offer meaningful tasks and a structured experience aligned to the intern's field.",
  },
  {
    icon: "BookOpen",
    title: "Workplace Learning",
    description:
      "Interns gain real workplace exposure, processes and professional environment experience.",
  },
  {
    icon: "LifeBuoy",
    title: "Student Supervision",
    description: "CareerMesh provides ongoing coordination and check-ins throughout the placement.",
  },
];
