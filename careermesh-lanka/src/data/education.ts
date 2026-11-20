/**
 * Education Provider content data.
 * Driven from typed data so it is easy to edit and CMS-ready.
 * No invented partner names, testimonials, outcomes or statistics.
 */

export type EdBenefit = {
  icon: string;
  title: string;
  description: string;
};

/* Why Partner With CareerMesh — 8 benefit cards. */
export const whyPartnerBenefits: EdBenefit[] = [
  {
    icon: "Network",
    title: "Industry Connections",
    description:
      "Access to an established network of employers and host companies across professional disciplines.",
  },
  {
    icon: "ListChecks",
    title: "Structured Internship Coordination",
    description:
      "We coordinate internship placement end-to-end, so your faculty can focus on academic outcomes.",
  },
  {
    icon: "Compass",
    title: "Employability Strategy",
    description:
      "A tailored employability strategy aligned to your institution's goals and graduate outcomes.",
  },
  {
    icon: "Layers",
    title: "Customized Programs",
    description:
      "Programs adapted to your academic requirements, faculty objectives and industry needs.",
  },
  {
    icon: "LifeBuoy",
    title: "Student Support",
    description:
      "Preparation, guidance and ongoing check-ins that keep students supported throughout.",
  },
  {
    icon: "LineChart",
    title: "Progress Monitoring",
    description:
      "Structured progress reviews and reporting that give you visibility over student experiences.",
  },
  {
    icon: "FileText",
    title: "Partnership Reporting",
    description:
      "Clear reporting on participation, placements and outcomes to support institutional reporting.",
  },
  {
    icon: "Workflow",
    title: "Dedicated ClientFlow Workspace",
    description:
      "A configured ClientFlow CRM workspace for managing student records, employer relationships and follow-ups.",
  },
];

/* Education network categories — no fake names or logos. */
export type EducationNetworkCategory = {
  title: string;
  description: string;
  icon: string;
};

export const educationNetworkCategories: EducationNetworkCategory[] = [
  {
    title: "Universities",
    description:
      "National and private universities offering undergraduate and postgraduate programs.",
    icon: "School",
  },
  {
    title: "Higher Education Institutions",
    description: "Degree-awarding higher education institutions and colleges.",
    icon: "Building2",
  },
  {
    title: "Professional Education Providers",
    description: "Providers of professional qualifications and industry-aligned programs.",
    icon: "GraduationCap",
  },
  {
    title: "Training Institutes",
    description: "Vocational and technical training institutes developing practical skills.",
    icon: "Layers",
  },
];

/* Graduate employability programs — academic partnership cards. */
export type EmployabilityProgram = {
  title: string;
  description: string;
  outcomes: string[];
  icon: string;
};

export const employabilityPrograms: EmployabilityProgram[] = [
  {
    title: "Internship Placement Program",
    description:
      "End-to-end internship coordination adapted to your academic calendar and cohort requirements.",
    outcomes: [
      "Opportunity sourcing and employer engagement",
      "Candidate screening and interview coordination",
      "Placement confirmation and progress monitoring",
    ],
    icon: "Handshake",
  },
  {
    title: "Industry Group Projects",
    description: "Real-world project experiences that connect student teams with industry mentors.",
    outcomes: [
      "Project discovery and scoping",
      "Team formation and industry mentoring",
      "Milestones, presentations and feedback",
    ],
    icon: "Layers",
  },
  {
    title: "Internship Accelerator",
    description:
      "Focused pre-internship preparation that gets students workplace-ready before placement.",
    outcomes: [
      "CV and career preparation",
      "Interview practice and workplace readiness",
      "Communication and professional conduct",
    ],
    icon: "Zap",
  },
  {
    title: "Employability Training",
    description:
      "Modular work-readiness training covering the soft skills employers consistently value.",
    outcomes: [
      "Communication and teamwork",
      "Professional etiquette and leadership",
      "Problem solving and critical thinking",
    ],
    icon: "BookOpen",
  },
];

/* Program comparison — which programs include what. */
export const programComparison = [
  {
    feature: "Employer engagement",
    placement: true,
    projects: true,
    accelerator: false,
    training: true,
  },
  {
    feature: "Candidate screening",
    placement: true,
    projects: false,
    accelerator: false,
    training: false,
  },
  {
    feature: "Interview coordination",
    placement: true,
    projects: false,
    accelerator: true,
    training: false,
  },
  {
    feature: "Industry mentoring",
    placement: false,
    projects: true,
    accelerator: false,
    training: false,
  },
  {
    feature: "CV preparation",
    placement: true,
    projects: false,
    accelerator: true,
    training: false,
  },
  {
    feature: "Workplace readiness",
    placement: false,
    projects: false,
    accelerator: true,
    training: true,
  },
  {
    feature: "Progress reporting",
    placement: true,
    projects: true,
    accelerator: true,
    training: true,
  },
];

/* Internship placement process steps — process diagram. */
export const placementSteps: { step: number; title: string; description: string }[] = [
  {
    step: 1,
    title: "Student Registration",
    description: "Students register their interest and background.",
  },
  {
    step: 2,
    title: "Employer Engagement",
    description: "We source opportunities from host organizations.",
  },
  {
    step: 3,
    title: "Opportunity Sourcing",
    description: "We identify suitable roles for each cohort.",
  },
  {
    step: 4,
    title: "Candidate Screening",
    description: "We screen and prepare candidates for matching.",
  },
  {
    step: 5,
    title: "Interview Coordination",
    description: "We coordinate interviews with host companies.",
  },
  {
    step: 6,
    title: "Placement Confirmation",
    description: "Placements are confirmed and documented.",
  },
  {
    step: 7,
    title: "Student Monitoring",
    description: "Ongoing check-ins throughout the placement.",
  },
  {
    step: 8,
    title: "Program Evaluations",
    description: "Feedback and outcomes review at completion.",
  },
];

/* Industry group project lifecycle. */
export const projectLifecycle: { phase: string; description: string }[] = [
  {
    phase: "Project Discovery",
    description: "We work with industry partners to scope real, deliverable projects.",
  },
  {
    phase: "Team Formation",
    description: "Student teams are formed based on skills and project needs.",
  },
  {
    phase: "Industry Mentoring",
    description: "Each team is paired with an industry mentor for guidance.",
  },
  {
    phase: "Project Milestones",
    description: "Teams work toward clear milestones with structured support.",
  },
  {
    phase: "Presentations",
    description: "Teams present their work to industry and academic audiences.",
  },
  {
    phase: "Feedback & Evaluation",
    description: "Structured feedback and evaluation close out the project.",
  },
];

/* Internship accelerator — preparation focus areas. */
export const acceleratorFocus: { icon: string; title: string; description: string }[] = [
  { icon: "FileText", title: "CV Development", description: "Building a clear, professional CV." },
  { icon: "Users", title: "Interview Practice", description: "Mock interviews and feedback." },
  { icon: "MessageSquare", title: "Communication", description: "Workplace communication skills." },
  {
    icon: "Briefcase",
    title: "Professional Conduct",
    description: "Workplace etiquette and conduct.",
  },
  {
    icon: "Building2",
    title: "Workplace Readiness",
    description: "Understanding workplace expectations.",
  },
  { icon: "Compass", title: "Career Direction", description: "Exploring roles and career paths." },
];

/* Employability training modules. */
export const trainingModules: { title: string; description: string }[] = [
  { title: "Communication", description: "Clear, confident professional communication." },
  {
    title: "Professional Etiquette",
    description: "Workplace conduct and professional conventions.",
  },
  { title: "Teamwork", description: "Collaborating effectively in diverse teams." },
  { title: "Leadership", description: "Leading and contributing with initiative." },
  { title: "Critical Thinking", description: "Analysing situations and making sound decisions." },
  { title: "Problem Solving", description: "Approaching and resolving real problems." },
  { title: "Workplace Readiness", description: "Preparing for the expectations of work." },
  { title: "Interview Preparation", description: "Presenting yourself effectively to employers." },
];

/* ClientFlow institution CRM features. */
export const institutionCrmFeatures: { icon: string; title: string; description: string }[] = [
  {
    icon: "Users",
    title: "Student CRM",
    description: "Manage student records and follow-ups in one place.",
  },
  {
    icon: "GraduationCap",
    title: "Cohort Management",
    description: "Organise students by cohort and program.",
  },
  {
    icon: "Building2",
    title: "Employer Database",
    description: "Maintain employer relationships and contacts.",
  },
  {
    icon: "Workflow",
    title: "Internship Pipelines",
    description: "Track internship placements from sourcing to completion.",
  },
  {
    icon: "Clock",
    title: "Student Follow-ups",
    description: "Automated reminders for student check-ins.",
  },
  {
    icon: "Calendar",
    title: "Interview Scheduling",
    description: "Coordinate interviews without the back-and-forth.",
  },
  {
    icon: "Zap",
    title: "Workflow Automation",
    description: "Reduce repetitive administrative work.",
  },
  {
    icon: "LineChart",
    title: "Progress Reporting",
    description: "Reporting that supports institutional outcomes.",
  },
];
