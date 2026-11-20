/**
 * ClientFlow platform content data.
 * Driven from typed data so it is easy to edit and CMS-ready.
 * No invented statistics, customer data or outcomes.
 */

export type CRMFeature = {
  icon: string;
  title: string;
  description: string;
};

/* Platform overview — how workspaces work. */
export const platformPrinciples: { icon: string; title: string; description: string }[] = [
  {
    icon: "Layers",
    title: "Dedicated Workspaces",
    description:
      "Each participating organization receives its own configured ClientFlow workspace for its operations.",
  },
  {
    icon: "Workflow",
    title: "Configured to Your Operations",
    description:
      "Workspaces adapt to your workflows, pipelines and communication needs — not the other way around.",
  },
  {
    icon: "ShieldCheck",
    title: "Access by Agreement",
    description:
      "CRM and communication data are managed according to agreed access permissions between organizations.",
  },
  {
    icon: "Zap",
    title: "Automation That Reduces Admin",
    description:
      "Automated workflows handle repetitive communication and follow-ups so your team can focus on people.",
  },
  {
    icon: "Network",
    title: "Connects With Your Stack",
    description:
      "ClientFlow can connect with additional custom applications when your operations require it.",
  },
];

/* University CRM features. */
export const universityCrmFeatures: CRMFeature[] = [
  { icon: "Users", title: "Student CRM", description: "Centralised student records and profiles." },
  {
    icon: "Layers",
    title: "Cohort Management",
    description: "Organise students by cohort and intake.",
  },
  {
    icon: "Building2",
    title: "Employer Database",
    description: "Manage employer relationships and contacts.",
  },
  {
    icon: "Workflow",
    title: "Internship Pipelines",
    description: "Track internships from sourcing to completion.",
  },
  {
    icon: "Clock",
    title: "Student Follow-ups",
    description: "Automated follow-ups keep students on track.",
  },
  {
    icon: "Calendar",
    title: "Interview Scheduling",
    description: "Coordinate interviews with host companies.",
  },
  {
    icon: "Zap",
    title: "Workflow Automation",
    description: "Automate repetitive administrative tasks.",
  },
  {
    icon: "LineChart",
    title: "Progress Reporting",
    description: "Reporting on student progress and outcomes.",
  },
];

/* Internship provider CRM features. */
export const internshipProviderCrmFeatures: CRMFeature[] = [
  {
    icon: "FileText",
    title: "Student Applications",
    description: "Manage applications in one place.",
  },
  {
    icon: "Users",
    title: "Candidate Profiles",
    description: "Searchable candidate profiles and records.",
  },
  {
    icon: "Workflow",
    title: "Placement Pipelines",
    description: "Track placements through each stage.",
  },
  {
    icon: "Building2",
    title: "Host Company Management",
    description: "Manage host organizations and contacts.",
  },
  {
    icon: "Calendar",
    title: "Interview Coordination",
    description: "Schedule and coordinate interviews.",
  },
  {
    icon: "Clock",
    title: "Automated Reminders",
    description: "Reminders for candidates and host companies.",
  },
  {
    icon: "ListChecks",
    title: "Placement Tracking",
    description: "Track placement status and outcomes.",
  },
  {
    icon: "MessageSquare",
    title: "Communication Management",
    description: "Centralised communication records.",
  },
];

/* Employer recruitment CRM features. */
export const employerCrmFeatures: CRMFeature[] = [
  {
    icon: "Users",
    title: "Candidate Database",
    description: "A searchable database of candidates.",
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

/* Graduate recruitment CRM features. */
export const graduateRecruitmentCrmFeatures: CRMFeature[] = [
  {
    icon: "Users",
    title: "Graduate Talent Database",
    description: "A searchable database of graduate candidates.",
  },
  {
    icon: "Network",
    title: "Employer CRM",
    description: "Manage relationships with hiring organizations.",
  },
  {
    icon: "Workflow",
    title: "Recruitment Pipelines",
    description: "Track candidates through every stage.",
  },
  {
    icon: "Megaphone",
    title: "Campaign Management",
    description: "Run and track graduate recruitment campaigns.",
  },
  {
    icon: "MessageSquare",
    title: "Automated Communications",
    description: "Automated reminders and updates.",
  },
  {
    icon: "Calendar",
    title: "Interview Management",
    description: "Coordinate interviews and assessments.",
  },
  {
    icon: "ListChecks",
    title: "Graduate Program Tracking",
    description: "Track graduate progress through development.",
  },
  {
    icon: "Clock",
    title: "Development Follow-ups",
    description: "Automated check-ins support retention.",
  },
];

/* Automation workflows — visual flow diagrams. */
export type WorkflowStep = { label: string; tone: "teal" | "cyan" | "amber" | "navy" };

export type AutomationFlow = {
  id: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
};

export const automationFlows: AutomationFlow[] = [
  {
    id: "student-registration",
    title: "Student Registration",
    description: "From form submission to a coordinated welcome and follow-up workflow.",
    steps: [
      { label: "Form Submission", tone: "teal" },
      { label: "CRM Contact Creation", tone: "cyan" },
      { label: "Student Tagging", tone: "cyan" },
      { label: "Welcome Email", tone: "teal" },
      { label: "Internal Notification", tone: "navy" },
      { label: "Follow-up Workflow", tone: "amber" },
    ],
  },
  {
    id: "employer-inquiry",
    title: "Employer Inquiry",
    description: "From a hiring form to a recruitment pipeline and consultation booking.",
    steps: [
      { label: "Hiring Form", tone: "teal" },
      { label: "Employer CRM Record", tone: "cyan" },
      { label: "Recruitment Pipeline", tone: "cyan" },
      { label: "Sales Notification", tone: "navy" },
      { label: "Consultation Booking", tone: "teal" },
      { label: "Follow-up", tone: "amber" },
    ],
  },
  {
    id: "interview-scheduling",
    title: "Interview Scheduling",
    description: "From shortlist to a booked, reminded and followed-up interview.",
    steps: [
      { label: "Candidate Shortlisted", tone: "teal" },
      { label: "Interview Invitation", tone: "cyan" },
      { label: "Calendar Booking", tone: "cyan" },
      { label: "Reminder", tone: "amber" },
      { label: "Post-interview Follow-up", tone: "teal" },
    ],
  },
];

/* AI capabilities — standard ClientFlow AI vs custom development. */
export const standardAiCapabilities: { icon: string; title: string; description: string }[] = [
  {
    icon: "MessageSquare",
    title: "AI Communication Assistance",
    description: "Draft and refine candidate and stakeholder communication.",
  },
  {
    icon: "HelpCircle",
    title: "FAQ Assistance",
    description: "Answer common questions from students, employers and partners.",
  },
  {
    icon: "Target",
    title: "Lead Qualification",
    description: "Help qualify inbound inquiries based on configured criteria.",
  },
  {
    icon: "Compass",
    title: "Career Guidance",
    description: "Support students with career direction and preparation guidance.",
  },
  {
    icon: "Workflow",
    title: "Workflow Assistance",
    description: "Suggest next steps and automate routine workflow tasks.",
  },
];

/* Organization workspace diagram — central business + workspaces. */
export const workspaceNodes: { label: string; tone: "teal" | "cyan" | "amber" | "navy" }[] = [
  { label: "University A Workspace", tone: "teal" },
  { label: "University B Workspace", tone: "teal" },
  { label: "Internship Provider Workspace", tone: "cyan" },
  { label: "Employer A Workspace", tone: "amber" },
  { label: "Employer B Workspace", tone: "amber" },
  { label: "Recruitment Agency Workspace", tone: "navy" },
  { label: "Corporate HR Workspace", tone: "navy" },
];

/* Demo form reassurance — used on book-demo. */
export const demoHighlights: { icon: string; title: string; description: string }[] = [
  {
    icon: "Layers",
    title: "Configured Workspaces",
    description: "See how a workspace adapts to your operations.",
  },
  {
    icon: "Workflow",
    title: "Pipelines & Automation",
    description: "Walk through recruitment and placement pipelines.",
  },
  {
    icon: "MessageSquare",
    title: "Communication",
    description: "Explore automated communication and follow-ups.",
  },
  {
    icon: "LineChart",
    title: "Reporting",
    description: "Review reporting and analytics capabilities.",
  },
];
