/**
 * Navigation data — drives the header mega menus, mobile drawer and footer.
 * Every `to` must match a real route file under src/routes/.
 * `to` is a plain string; the consuming <Link> casts it to the router's
 * typed route union (all routes are stubbed so the union is complete).
 */

export type NavLeaf = {
  label: string;
  to: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  intro?: string;
  items: NavLeaf[];
};

export type NavColumn = {
  heading: string;
  items: NavLeaf[];
};

export type MegaMenu = {
  intro: string;
  columns: NavColumn[];
  featured: {
    title: string;
    description: string;
    to: string;
    cta: string;
    tone: "students" | "education" | "employers" | "recruiters" | "platform";
  };
};

export type TopNavItem = {
  label: string;
  to: string;
  mega?: MegaMenu;
};

export const primaryNav: TopNavItem[] = [
  {
    label: "For Students",
    to: "/students-graduates",
    mega: {
      intro: "Build real-world experience and move toward a successful career.",
      columns: [
        {
          heading: "Discover",
          items: [
            {
              label: "Why Do an Internship?",
              to: "/students/why-internship",
              description: "The value of professional experience",
            },
            {
              label: "Why CareerMesh?",
              to: "/students/why-careermesh",
              description: "How we support your journey",
            },
            {
              label: "Internship Programs",
              to: "/students/internship-programs",
              description: "Explore program categories",
            },
            {
              label: "Internship Opportunities",
              to: "/students/internship-opportunities",
              description: "Browse current openings",
            },
            {
              label: "Host Companies",
              to: "/students/host-companies",
              description: "How host organizations work",
            },
          ],
        },
        {
          heading: "Prepare",
          items: [
            {
              label: "Success Stories",
              to: "/students/success-stories",
              description: "Student journeys",
            },
            {
              label: "Program Structure",
              to: "/students/program-structure",
              description: "Your step-by-step journey",
            },
            {
              label: "Program Fees",
              to: "/students/program-fees",
              description: "Pricing and inclusions",
            },
            {
              label: "Program Inclusions",
              to: "/students/program-inclusions",
              description: "What's included",
            },
            {
              label: "Entry Requirements",
              to: "/students/entry-requirements",
              description: "Who can apply",
            },
          ],
        },
        {
          heading: "Get Started",
          items: [
            { label: "FAQs", to: "/students/faqs", description: "Common questions" },
            {
              label: "Career Development Toolkit",
              to: "/students/career-development-toolkit",
              description: "Learning resources",
            },
            { label: "Register", to: "/students/register", description: "Start your application" },
          ],
        },
      ],
      featured: {
        title: "Register Your Interest",
        description: "Begin your journey toward real-world professional experience.",
        to: "/students/register",
        cta: "Get Started",
        tone: "students",
      },
    },
  },
  {
    label: "For Education Providers",
    to: "/education-providers",
    mega: {
      intro: "Strengthen graduate employability through industry partnerships.",
      columns: [
        {
          heading: "Partnership",
          items: [
            {
              label: "Why Partner With Us?",
              to: "/education/why-partner",
              description: "Benefits of partnership",
            },
            {
              label: "Our Education Network",
              to: "/education/our-partners",
              description: "Institution categories",
            },
            {
              label: "Our Programs",
              to: "/education/programs",
              description: "Customized solutions",
            },
          ],
        },
        {
          heading: "Programs",
          items: [
            {
              label: "Internship Placement",
              to: "/education/internship-placement",
              description: "End-to-end placement",
            },
            {
              label: "Industry Group Projects",
              to: "/education/industry-projects",
              description: "Real-world team projects",
            },
            {
              label: "Internship Accelerator",
              to: "/education/internship-accelerator",
              description: "Pre-internship preparation",
            },
            {
              label: "Employability Training",
              to: "/education/employability-training",
              description: "Work-readiness modules",
            },
          ],
        },
        {
          heading: "Resources",
          items: [
            { label: "Testimonials", to: "/education/testimonials", description: "Partner voices" },
            {
              label: "Case Studies",
              to: "/education/case-studies",
              description: "Program outcomes",
            },
            { label: "FAQs", to: "/education/faqs", description: "Partnership questions" },
            {
              label: "Partner With Us",
              to: "/education/partner-with-us",
              description: "Start a partnership",
            },
          ],
        },
      ],
      featured: {
        title: "Discuss an Education Partnership",
        description: "Explore customized employability solutions for your institution.",
        to: "/education/partner-with-us",
        cta: "Partner With Us",
        tone: "education",
      },
    },
  },
  {
    label: "For Employers",
    to: "/employers",
    mega: {
      intro: "Access emerging talent and build your future workforce.",
      columns: [
        {
          heading: "Hire Interns",
          items: [
            {
              label: "Why Host Interns?",
              to: "/employers/why-host-interns",
              description: "Benefits of hosting",
            },
            {
              label: "Benefits of Hiring Interns",
              to: "/employers/benefits",
              description: "Talent and project value",
            },
            {
              label: "Our Employer Network",
              to: "/employers/our-partners",
              description: "Partner categories",
            },
            {
              label: "How It Works",
              to: "/employers/how-it-works",
              description: "Six-step hiring process",
            },
          ],
        },
        {
          heading: "Our Talent",
          items: [
            {
              label: "Meet Our Talent",
              to: "/employers/our-talent",
              description: "Candidate profiles",
            },
            {
              label: "Available Disciplines",
              to: "/employers/disciplines",
              description: "Fields and specializations",
            },
            {
              label: "Testimonials",
              to: "/employers/testimonials",
              description: "Employer voices",
            },
            {
              label: "Case Studies",
              to: "/employers/case-studies",
              description: "Hiring outcomes",
            },
          ],
        },
        {
          heading: "Services",
          items: [
            { label: "FAQs", to: "/employers/faqs", description: "Hiring questions" },
            {
              label: "Recruitment Services",
              to: "/employers/recruitment-services",
              description: "Full recruitment support",
            },
            { label: "Pricing", to: "/employers/pricing", description: "Recruitment fees" },
            {
              label: "Hire an Intern",
              to: "/employers/hire-an-intern",
              description: "Submit a requirement",
            },
          ],
        },
      ],
      featured: {
        title: "Hire Emerging Talent",
        description: "Submit a hiring requirement and access prepared candidates.",
        to: "/employers/hire-an-intern",
        cta: "Hire an Intern",
        tone: "employers",
      },
    },
  },
  {
    label: "For Graduate Recruiters",
    to: "/graduate-recruiters",
    mega: {
      intro: "Attract, recruit, develop and retain early-career talent.",
      columns: [
        {
          heading: "Our Approach",
          items: [
            {
              label: "Why CareerMesh?",
              to: "/graduate-recruiters/why-careermesh",
              description: "Graduate talent expertise",
            },
            {
              label: "Our Approach",
              to: "/graduate-recruiters/our-approach",
              description: "Four-stage framework",
            },
            {
              label: "Promotion & Attraction",
              to: "/graduate-recruiters/promotion-attraction",
              description: "Build employer brand",
            },
            {
              label: "Pre-Graduate Programs",
              to: "/graduate-recruiters/pre-graduate-programs",
              description: "Pipeline development",
            },
          ],
        },
        {
          heading: "Services",
          items: [
            {
              label: "Recruitment Outsourcing",
              to: "/graduate-recruiters/recruitment-outsourcing",
              description: "End-to-end selection",
            },
            {
              label: "Development & Retention",
              to: "/graduate-recruiters/development-retention",
              description: "Onboarding and growth",
            },
            {
              label: "Case Studies",
              to: "/graduate-recruiters/case-studies",
              description: "Program outcomes",
            },
            {
              label: "Our Network",
              to: "/graduate-recruiters/partners",
              description: "Partner organizations",
            },
          ],
        },
        {
          heading: "Connect",
          items: [
            {
              label: "Meet Our Team",
              to: "/graduate-recruiters/team",
              description: "Who you'll work with",
            },
            {
              label: "FAQs",
              to: "/graduate-recruiters/faqs",
              description: "Recruitment questions",
            },
            {
              label: "Talk to Us",
              to: "/graduate-recruiters/contact",
              description: "Request a consultation",
            },
          ],
        },
      ],
      featured: {
        title: "Talk to Our Team",
        description: "Discuss your graduate intake and recruitment strategy.",
        to: "/graduate-recruiters/contact",
        cta: "Talk to Us",
        tone: "recruiters",
      },
    },
  },
  {
    label: "ClientFlow Platform",
    to: "/platform",
    mega: {
      intro: "Dedicated business management workspaces for participating organizations.",
      columns: [
        {
          heading: "Platform",
          items: [
            { label: "Platform Overview", to: "/platform", description: "One connected platform" },
            {
              label: "University CRM",
              to: "/platform/university-crm",
              description: "Student and cohort management",
            },
            {
              label: "Internship Management CRM",
              to: "/platform/internship-management-crm",
              description: "Placement pipelines",
            },
            {
              label: "Employer CRM",
              to: "/platform/employer-crm",
              description: "Candidate and hiring management",
            },
          ],
        },
        {
          heading: "Capabilities",
          items: [
            {
              label: "Graduate Recruitment CRM",
              to: "/platform/graduate-recruitment-crm",
              description: "Talent pipelines",
            },
            {
              label: "Automation & Workflows",
              to: "/platform/automation",
              description: "Automated processes",
            },
            {
              label: "AI Capabilities",
              to: "/platform/ai",
              description: "Configured AI assistance",
            },
            { label: "Pricing", to: "/platform/pricing", description: "Package comparison" },
          ],
        },
        {
          heading: "Get Started",
          items: [
            {
              label: "Book a Demo",
              to: "/platform/book-demo",
              description: "See the platform in action",
            },
          ],
        },
      ],
      featured: {
        title: "Book a Demo",
        description: "See how ClientFlow streamlines your talent operations.",
        to: "/platform/book-demo",
        cta: "Book a Demo",
        tone: "platform",
      },
    },
  },
  {
    label: "Resources",
    to: "/resources",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export const headerCtas = {
  primary: { label: "Become a Partner", to: "/contact" as string },
  secondary: { label: "Book a Demo", to: "/platform/book-demo" as string },
};

export const footerNav: { heading: string; items: NavLeaf[] }[] = [
  {
    heading: "For Students",
    items: [
      { label: "Student Hub", to: "/students-graduates" },
      { label: "Internship Programs", to: "/students/internship-programs" },
      { label: "Opportunities", to: "/students/internship-opportunities" },
      { label: "Register", to: "/students/register" },
      { label: "Career Toolkit", to: "/students/career-development-toolkit" },
    ],
  },
  {
    heading: "For Organizations",
    items: [
      { label: "Education Providers", to: "/education-providers" },
      { label: "Employers", to: "/employers" },
      { label: "Graduate Recruiters", to: "/graduate-recruiters" },
      { label: "Our Network", to: "/our-network" },
      { label: "Our Approach", to: "/our-approach" },
    ],
  },
  {
    heading: "ClientFlow Platform",
    items: [
      { label: "Platform Overview", to: "/platform" },
      { label: "Automation", to: "/platform/automation" },
      { label: "AI Capabilities", to: "/platform/ai" },
      { label: "Pricing", to: "/platform/pricing" },
      { label: "Book a Demo", to: "/platform/book-demo" },
    ],
  },
  {
    heading: "Company & Resources",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Resources", to: "/resources" },
      { label: "Success Stories", to: "/success-stories" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "FAQs", to: "/faqs" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export const legalNav: NavLeaf[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookie Policy", to: "/cookie-policy" },
];
