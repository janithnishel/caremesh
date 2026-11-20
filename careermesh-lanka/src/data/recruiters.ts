/**
 * Graduate recruiter content data.
 * Driven from typed data so it is easy to edit and CMS-ready.
 * No invented statistics, testimonials, partner names or team bios.
 */

export type RecruiterBenefit = {
  icon: string;
  title: string;
  description: string;
};

/* Why CareerMesh — graduate recruiter benefits. */
export const whyRecruiterBenefits: RecruiterBenefit[] = [
  {
    icon: "Target",
    title: "Graduate Talent Expertise",
    description:
      "Specialised focus on early-career talent, from attraction through development and retention.",
  },
  {
    icon: "School",
    title: "University Relationships",
    description:
      "Established connections with educational institutions and student networks across disciplines.",
  },
  {
    icon: "Workflow",
    title: "Strategic Recruitment Support",
    description:
      "Structured recruitment campaigns, screening and selection tailored to your hiring goals.",
  },
  {
    icon: "TrendingUp",
    title: "Structured Development Programs",
    description:
      "Onboarding, learning journeys and mentoring frameworks that support graduate retention.",
  },
  {
    icon: "Cpu",
    title: "ClientFlow-Powered Operations",
    description:
      "Recruitment pipelines, candidate communication and reporting managed through ClientFlow CRM.",
  },
];

/* Four-stage approach framework. */
export type ApproachStage = {
  number: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  detailTo: string;
};

export const approachStages: ApproachStage[] = [
  {
    number: 1,
    slug: "promotion-attraction",
    title: "Promotion & Attraction",
    tagline: "Build awareness and attract the right graduate talent.",
    description:
      "We help organizations position themselves as employers of choice and reach students through targeted campaigns and university engagement.",
    items: [
      "Employer Branding",
      "University Engagement",
      "Campus Campaigns",
      "Student Outreach",
      "Graduate Talent Awareness",
      "Employer Value Proposition Communication",
    ],
    detailTo: "/graduate-recruiters/promotion-attraction",
  },
  {
    number: 2,
    slug: "pre-graduate-programs",
    title: "Pre-Graduate Programs",
    tagline: "Identify and prepare talent before graduation.",
    description:
      "Internship, summer and vacation programs that let you engage with promising students early and build a talent pipeline.",
    items: [
      "Internship Programs",
      "Summer Programs",
      "Vacation Programs",
      "Graduate Readiness",
      "Industry Engagement",
      "Talent Identification",
    ],
    detailTo: "/graduate-recruiters/pre-graduate-programs",
  },
  {
    number: 3,
    slug: "recruitment-outsourcing",
    title: "Recruitment & Selection Outsourcing",
    tagline: "We manage the campaign so you focus on selecting.",
    description:
      "End-to-end management of graduate recruitment campaigns — from application management through assessment and hiring coordination.",
    items: [
      "Graduate Recruitment Campaigns",
      "Application Management",
      "Candidate Screening",
      "Assessment Coordination",
      "Interview Scheduling",
      "Candidate Communication",
      "Hiring Coordination",
    ],
    detailTo: "/graduate-recruiters/recruitment-outsourcing",
  },
  {
    number: 4,
    slug: "development-retention",
    title: "Development & Retention",
    tagline: "Grow graduates into long-term contributors.",
    description:
      "Structured onboarding, learning journeys and mentoring that help graduates settle, grow and stay.",
    items: [
      "Graduate Onboarding",
      "Structured Learning Journeys",
      "Leadership Development",
      "Mentoring",
      "Communication Training",
      "Progress Monitoring",
      "Retention Support",
    ],
    detailTo: "/graduate-recruiters/development-retention",
  },
];

/* Graduate recruitment CRM features. */
export const graduateCrmFeatures: { icon: string; title: string; description: string }[] = [
  {
    icon: "Users",
    title: "Graduate Talent Database",
    description: "A searchable database of graduate candidates and profiles.",
  },
  {
    icon: "Network",
    title: "Employer CRM",
    description: "Manage relationships with hiring organizations and stakeholders.",
  },
  {
    icon: "Workflow",
    title: "Recruitment Pipelines",
    description: "Track candidates through every stage of the recruitment process.",
  },
  {
    icon: "Megaphone",
    title: "Campaign Management",
    description: "Run and track graduate recruitment campaigns end to end.",
  },
  {
    icon: "MessageSquare",
    title: "Automated Communications",
    description: "Automated reminders and updates keep candidates engaged.",
  },
  {
    icon: "Calendar",
    title: "Interview Management",
    description: "Coordinate interviews and assessments without the back-and-forth.",
  },
  {
    icon: "ListChecks",
    title: "Graduate Program Tracking",
    description: "Track graduate progress through onboarding and development.",
  },
  {
    icon: "Clock",
    title: "Development Follow-ups",
    description: "Automated check-ins support graduate development and retention.",
  },
];
