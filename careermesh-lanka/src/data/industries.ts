/**
 * Industry categories — used across homepage, students, employers.
 * Icons are lucide names resolved in components.
 */
export type Industry = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    slug: "information-technology",
    title: "Information Technology",
    description: "Software, systems and digital infrastructure.",
    icon: "Cpu",
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    description: "Development, architecture and engineering practice.",
    icon: "Code2",
  },
  {
    slug: "finance-accounting",
    title: "Finance & Accounting",
    description: "Financial operations, reporting and analysis.",
    icon: "LineChart",
  },
  {
    slug: "engineering",
    title: "Engineering",
    description: "Civil, mechanical, electrical and electronics.",
    icon: "HardHat",
  },
  {
    slug: "business-administration",
    title: "Business & Administration",
    description: "Operations, coordination and management.",
    icon: "Briefcase",
  },
  {
    slug: "marketing-communications",
    title: "Marketing & Communications",
    description: "Digital marketing, content and brand.",
    icon: "Megaphone",
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    description: "People operations, recruitment and engagement.",
    icon: "Users",
  },
  {
    slug: "hospitality-tourism",
    title: "Hospitality & Tourism",
    description: "Guest services, events and tourism operations.",
    icon: "UtensilsCrossed",
  },
  {
    slug: "other-professional",
    title: "Other Professional Disciplines",
    description: "Additional professional fields by arrangement.",
    icon: "Sparkles",
  },
];

/** Employer talent disciplines — grouped for the disciplines page. */
export type DisciplineGroup = {
  category: string;
  icon: string;
  disciplines: string[];
};

export const disciplineGroups: DisciplineGroup[] = [
  {
    category: "IT & Software",
    icon: "Code2",
    disciplines: [
      "Software Development",
      "Web Development",
      "Mobile Development",
      "QA Testing",
      "Networking",
      "Cybersecurity",
      "Data Analytics",
      "UI/UX Design",
    ],
  },
  {
    category: "Engineering",
    icon: "HardHat",
    disciplines: ["Civil", "Mechanical", "Electrical", "Electronics", "Project Management"],
  },
  {
    category: "Finance & Accounting",
    icon: "LineChart",
    disciplines: ["Accounting", "Auditing", "Financial Analysis", "Finance Operations", "Banking"],
  },
  {
    category: "Business & Marketing",
    icon: "Briefcase",
    disciplines: [
      "Business Administration",
      "Digital Marketing",
      "Graphic Design",
      "Project Coordination",
      "HR",
    ],
  },
  {
    category: "Other Professional Areas",
    icon: "Sparkles",
    disciplines: ["Hospitality", "Tourism", "Operations", "Other fields"],
  },
];
