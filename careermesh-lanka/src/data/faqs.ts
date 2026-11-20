import type { FAQGroup } from "@/components/shared/FAQAccordion";

/** General FAQs — real questions, honest answers. */
export const generalFaqs: FAQGroup[] = [
  {
    category: "About CareerMesh",
    items: [
      {
        question: "What is CareerMesh Lanka?",
        answer:
          "CareerMesh Lanka is an integrated graduate employability and talent solutions business connecting students, educational institutions, employers and graduate recruiters through professional career services, industry partnerships and ClientFlow-powered business technology.",
      },
      {
        question: "What is ClientFlow CRM?",
        answer:
          "ClientFlow CRM is a separate technology brand providing dedicated business management workspaces. Through ClientFlow, participating organizations can manage contacts, recruitment processes, communication and business relationships.",
      },
      {
        question: "Does CareerMesh guarantee a placement?",
        answer:
          "No. CareerMesh does not guarantee placements. We provide preparation, coordination and opportunity matching where available. Outcomes depend on many factors including candidate readiness and host organization requirements.",
      },
    ],
  },
  {
    category: "Getting Started",
    items: [
      {
        question: "How do I register as a student?",
        answer:
          "You can register your interest through the student registration form. After registration, we review your profile and guide you through preparation and opportunity matching.",
      },
      {
        question: "How can my organization partner with CareerMesh?",
        answer:
          "Education providers, employers and graduate recruiters can reach out through the relevant contact or partnership form on our site. We'll discuss your goals and how we can support them.",
      },
    ],
  },
];

/** Student FAQs. */
export const studentFaqs: FAQGroup[] = [
  {
    category: "Registration",
    items: [
      {
        question: "How do I register for the internship program?",
        answer:
          "Complete the student registration form on our site. We'll review your details and contact you for a consultation.",
      },
      {
        question: "Is there a fee to register?",
        answer:
          "Registration of interest is free. Program fees apply to the structured program — see the Program Fees page for details.",
      },
    ],
  },
  {
    category: "Eligibility",
    items: [
      {
        question: "Who is eligible for the internship program?",
        answer:
          "Eligibility depends on academic background, current study status and availability. See the Entry Requirements page for details.",
      },
      {
        question: "Do I need prior work experience?",
        answer:
          "No prior work experience is required. The program is designed to help you gain your first professional experience.",
      },
    ],
  },
  {
    category: "Internship Programs",
    items: [
      {
        question: "What fields are available?",
        answer:
          "We support a range of fields including IT, accounting, finance, engineering, business, digital marketing, HR and hospitality. See Internship Programs for the full list.",
      },
      {
        question: "Are internships paid or unpaid?",
        answer:
          "Whether an internship is paid depends on the host organization and the role. We do not imply that all internships can legally be unpaid.",
      },
    ],
  },
  {
    category: "Fees",
    items: [
      {
        question: "How much does the program cost?",
        answer:
          "Program fees are configurable and depend on the services included. See the Program Fees page or request a quote.",
      },
      {
        question: "Are payment plans available?",
        answer:
          "Installment plans may be available where applicable. Contact us to discuss options.",
      },
    ],
  },
  {
    category: "Employer Interviews",
    items: [
      {
        question: "Will I be interviewed by employers?",
        answer:
          "Yes, where a suitable opportunity is matched, employer interviews are part of the process. We help you prepare.",
      },
    ],
  },
  {
    category: "Work Arrangements",
    items: [
      {
        question: "Are internships remote or on-site?",
        answer:
          "Work arrangements depend on the host organization and role. Both remote and on-site opportunities may be available.",
      },
    ],
  },
  {
    category: "Program Support",
    items: [
      {
        question: "What support do I receive during the internship?",
        answer:
          "We provide progress monitoring and check-ins during your internship, plus completion documentation at the end.",
      },
    ],
  },
  {
    category: "Completion",
    items: [
      {
        question: "Do I receive a certificate?",
        answer:
          "Completion documentation is provided at the end of the program. Details are confirmed during your consultation.",
      },
    ],
  },
];

/** Education FAQs. */
export const educationFaqs: FAQGroup[] = [
  {
    category: "Partnerships",
    items: [
      {
        question: "What partnership structures are available?",
        answer:
          "We offer customized partnership structures adapted to your institution's goals, cohort sizes and program requirements. Contact us to discuss.",
      },
    ],
  },
  {
    category: "Programs",
    items: [
      {
        question: "Can programs be customized to our curriculum?",
        answer:
          "Yes. Programs are adapted to academic requirements, faculty objectives and industry needs.",
      },
      {
        question: "What programs are available?",
        answer:
          "Internship placement, industry group projects, internship accelerator and employability training modules.",
      },
    ],
  },
  {
    category: "Technology",
    items: [
      {
        question: "Do we get access to ClientFlow CRM?",
        answer:
          "Participating organizations can receive a dedicated ClientFlow CRM workspace configured for their operations.",
      },
    ],
  },
  {
    category: "Pricing & Contracts",
    items: [
      {
        question: "How is pricing determined?",
        answer:
          "Pricing depends on program scope, cohort size and services required. Request a quote for a tailored proposal.",
      },
    ],
  },
];

/** Employer FAQs. */
export const employerFaqs: FAQGroup[] = [
  {
    category: "Hiring",
    items: [
      {
        question: "How do I hire an intern?",
        answer:
          "Submit a hiring requirement through the Hire an Intern form. We assess your needs and source suitable candidates.",
      },
      {
        question: "Can internships be unpaid?",
        answer:
          "Whether an internship is paid depends on the role and applicable law. We do not imply that all internships can legally be unpaid.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        question: "What recruitment services are available?",
        answer:
          "Intern recruitment, candidate shortlisting, interview coordination, placement coordination and graduate recruitment.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        question: "How much does recruitment cost?",
        answer:
          "Fees depend on the engagement model — placement fee, project fee, monthly support or custom agreement. Request a quote.",
      },
    ],
  },
];

/** Graduate recruiter FAQs. */
export const recruiterFaqs: FAQGroup[] = [
  {
    category: "Services",
    items: [
      {
        question: "What graduate recruitment services do you offer?",
        answer:
          "Promotion and attraction, pre-graduate programs, recruitment and selection outsourcing, and development and retention support.",
      },
      {
        question: "Can you manage our full recruitment process?",
        answer:
          "Yes. Recruitment and selection outsourcing covers campaigns, screening, assessment and hiring coordination.",
      },
    ],
  },
  {
    category: "Technology",
    items: [
      {
        question: "Does ClientFlow support graduate recruitment operations?",
        answer:
          "Yes. The Graduate Recruitment CRM provides talent databases, pipelines, campaign management and automated communications.",
      },
    ],
  },
];

export function getFaqsFor(
  audience: "general" | "students" | "education" | "employers" | "recruiters",
): FAQGroup[] {
  switch (audience) {
    case "students":
      return studentFaqs;
    case "education":
      return educationFaqs;
    case "employers":
      return employerFaqs;
    case "recruiters":
      return recruiterFaqs;
    default:
      return generalFaqs;
  }
}
