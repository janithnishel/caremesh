/**
 * Employer content data.
 * Driven from typed data so it is easy to edit and CMS-ready.
 * No invented partner names, testimonials, outcomes or statistics.
 */

export type EmployerBenefit = {
  icon: string;
  title: string;
  description: string;
};

/* Why Host Interns — 6 benefit cards. */
export const whyHostBenefits: EmployerBenefit[] = [
  {
    icon: "Sparkles",
    title: "Access Emerging Talent",
    description: "Connect with motivated students and graduates eager to contribute and learn.",
  },
  {
    icon: "Lightbulb",
    title: "Fresh Perspectives",
    description: "Interns bring new ideas and approaches that can energise your projects.",
  },
  {
    icon: "Users",
    title: "Project Support",
    description: "Interns can support ongoing projects and help reduce workload on your team.",
  },
  {
    icon: "Compass",
    title: "Skills Discovery",
    description: "Identify potential future hires through structured, low-risk exposure.",
  },
  {
    icon: "Handshake",
    title: "Mentorship Opportunities",
    description: "Give your team meaningful mentorship and leadership experience.",
  },
  {
    icon: "Network",
    title: "Future Recruitment Pipeline",
    description: "Build relationships with potential candidates before you need to hire.",
  },
];

/* Benefits of hosting — detailed cards. */
export const hostBenefitsDetailed: EmployerBenefit[] = [
  {
    icon: "Target",
    title: "Talent Discovery",
    description: "Discover capable, prepared candidates aligned to your needs.",
  },
  {
    icon: "Briefcase",
    title: "Project Contribution",
    description: "Interns contribute real work to active projects and operations.",
  },
  {
    icon: "ListChecks",
    title: "Skills-Based Matching",
    description: "We match candidates to your requirements based on skills and field.",
  },
  {
    icon: "TrendingUp",
    title: "Professional Development",
    description: "Interns develop workplace readiness and professional skills.",
  },
  {
    icon: "Star",
    title: "Potential Graduate Recruitment",
    description: "Evaluate interns as potential future graduate hires.",
  },
  {
    icon: "Network",
    title: "Industry Engagement",
    description: "Engage with education and talent networks through CareerMesh.",
  },
];

/* Hiring process steps — six-step process diagram. */
export const hiringSteps: { step: number; title: string; description: string }[] = [
  {
    step: 1,
    title: "Submit a Hiring Requirement",
    description: "Tell us the role, skills and timing you need.",
  },
  {
    step: 2,
    title: "Requirements Assessment",
    description: "We review and refine your requirements with you.",
  },
  {
    step: 3,
    title: "Candidate Sourcing & Screening",
    description: "We source and screen suitable candidates.",
  },
  {
    step: 4,
    title: "Candidate Shortlisting",
    description: "We present a shortlist for your review.",
  },
  {
    step: 5,
    title: "Employer Interviews",
    description: "You interview the candidates you choose.",
  },
  {
    step: 6,
    title: "Placement & Ongoing Coordination",
    description: "We coordinate placement and check in throughout.",
  },
];

/* Recruitment services list. */
export const recruitmentServices = [
  { title: "Intern Recruitment", description: "Source and recruit interns for defined roles." },
  {
    title: "Candidate Shortlisting",
    description: "We screen and shortlist candidates for your review.",
  },
  {
    title: "Recruitment Support",
    description: "Ongoing coordination throughout the hiring process.",
  },
  {
    title: "Interview Coordination",
    description: "We schedule and coordinate interviews with candidates.",
  },
  { title: "Placement Coordination", description: "We confirm placements and handle logistics." },
  { title: "Graduate Recruitment", description: "Recruit graduates for permanent positions." },
];

/* ClientFlow recruitment CRM features. */
export const recruitmentCrmFeatures: { icon: string; title: string; description: string }[] = [
  {
    icon: "Users",
    title: "Candidate Database",
    description: "A searchable database of candidates and profiles.",
  },
  {
    icon: "Workflow",
    title: "Hiring Pipelines",
    description: "Track candidates through each hiring stage.",
  },
  {
    icon: "Calendar",
    title: "Interview Scheduling",
    description: "Coordinate interviews without the back-and-forth.",
  },
  {
    icon: "MessageSquare",
    title: "Candidate Communication",
    description: "Centralised communication with candidates.",
  },
  {
    icon: "Clock",
    title: "Follow-up Automation",
    description: "Automated reminders keep candidates engaged.",
  },
  {
    icon: "Megaphone",
    title: "Recruitment Campaigns",
    description: "Run and track recruitment campaigns.",
  },
  {
    icon: "LineChart",
    title: "Recruitment Reports",
    description: "Reporting on pipeline and outcomes.",
  },
];

/* Anonymized sample talent cards — isDemo, no real people. */
export type SampleCandidate = {
  field: string;
  discipline: string;
  skills: string[];
  availability: string;
  workMode: string;
  isDemo: boolean;
};

export const sampleCandidates: SampleCandidate[] = [
  {
    field: "IT & Software",
    discipline: "Software Development",
    skills: ["JavaScript", "React", "Node.js", "Git"],
    availability: "3 months",
    workMode: "On-site / Hybrid",
    isDemo: true,
  },
  {
    field: "Finance & Accounting",
    discipline: "Accounting",
    skills: ["Bookkeeping", "Excel", "Financial Reporting"],
    availability: "6 months",
    workMode: "On-site",
    isDemo: true,
  },
  {
    field: "Engineering",
    discipline: "Mechanical Engineering",
    skills: ["AutoCAD", "Technical Drawing", "Project Support"],
    availability: "4 months",
    workMode: "On-site",
    isDemo: true,
  },
  {
    field: "Business & Marketing",
    discipline: "Digital Marketing",
    skills: ["Content Creation", "Social Media", "Analytics"],
    availability: "3 months",
    workMode: "Remote / Hybrid",
    isDemo: true,
  },
];
