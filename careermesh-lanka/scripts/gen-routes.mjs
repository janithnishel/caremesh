// One-off Phase 1 scaffolder: creates every route stub so no link 404s.
// Generates self-contained, type-safe route files with head() metadata.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const root = join(process.cwd(), "src", "routes");

/** @typedef {{ id: string; file: string; title: string; desc: string; dynamic?: string }} Route */

const routes = [
  // ---- MAIN ----
  { id: "/about", file: "about.tsx", title: "About Us — CareerMesh Lanka", desc: "CareerMesh Lanka connects students, educational institutions, employers and graduate recruiters through meaningful career services and technology-enabled partnerships across Sri Lanka." },
  { id: "/our-approach", file: "our-approach.tsx", title: "Our Approach — CareerMesh Lanka", desc: "How CareerMesh connects the people, creates the opportunities and helps organizations manage their talent operations through ClientFlow." },
  { id: "/our-network", file: "our-network.tsx", title: "Our Network — CareerMesh Lanka", desc: "The CareerMesh network of students, educational institutions, employers and graduate recruiters across Sri Lanka." },
  { id: "/contact", file: "contact.tsx", title: "Contact Us — CareerMesh Lanka", desc: "Get in touch with CareerMesh Lanka about student registration, education partnerships, employer hiring, graduate recruitment or ClientFlow CRM." },
  { id: "/resources", file: "resources.tsx", title: "Resources — CareerMesh Lanka", desc: "Career advice, internship preparation, CV and interview guidance, and talent management insights from CareerMesh Lanka." },
  { id: "/success-stories", file: "success-stories.tsx", title: "Success Stories — CareerMesh Lanka", desc: "Real success stories from students, education partners and employers in the CareerMesh network." },
  { id: "/faqs", file: "faqs.tsx", title: "FAQs — CareerMesh Lanka", desc: "Frequently asked questions about CareerMesh programs, partnerships, recruitment services and the ClientFlow platform." },
  { id: "/case-studies", file: "case-studies.tsx", title: "Case Studies — CareerMesh Lanka", desc: "Case studies from CareerMesh education, employer and graduate recruitment programs." },

  // ---- STUDENTS ----
  { id: "/students-graduates", file: "students-graduates.tsx", title: "Students & Graduates — CareerMesh Lanka", desc: "Your future career starts with real-world experience. Explore internship programs, career development and opportunities with CareerMesh." },
  { id: "/students/why-internship", file: "students.why-internship.tsx", title: "Why Do an Internship? — CareerMesh Lanka", desc: "The value of professional internships: practical experience, industry exposure, networking and career confidence." },
  { id: "/students/why-careermesh", file: "students.why-careermesh.tsx", title: "Why CareerMesh? — CareerMesh Lanka", desc: "How CareerMesh supports students with structured preparation, industry relationships and ongoing support." },
  { id: "/students/internship-programs", file: "students.internship-programs.tsx", title: "Internship Programs — CareerMesh Lanka", desc: "Explore CareerMesh internship program categories across IT, accounting, finance, engineering, business, marketing, HR and more." },
  { id: "/students/internship-programs/$category", file: "students.internship-programs.$category.tsx", title: "Internship Program Category — CareerMesh Lanka", desc: "Internship program category details: learning outcomes, backgrounds, skills and how to register interest.", dynamic: "category" },
  { id: "/students/internship-opportunities", file: "students.internship-opportunities.tsx", title: "Internship Opportunities — CareerMesh Lanka", desc: "Browse current internship opportunities by industry, location and work mode, or register your interest for updates." },
  { id: "/students/host-companies", file: "students.host-companies.tsx", title: "Host Companies — CareerMesh Lanka", desc: "How host organizations work with CareerMesh: industry categories, mentorship and workplace learning." },
  { id: "/students/success-stories", file: "students.success-stories.tsx", title: "Student Success Stories — CareerMesh Lanka", desc: "Stories from students in the CareerMesh network who built real-world experience." },
  { id: "/students/program-structure", file: "students.program-structure.tsx", title: "Program Structure — CareerMesh Lanka", desc: "Your step-by-step journey through the CareerMesh student program, from registration to completion." },
  { id: "/students/program-fees", file: "students.program-fees.tsx", title: "Program Fees — CareerMesh Lanka", desc: "CareerMesh student program pricing, inclusions and payment options." },
  { id: "/students/program-inclusions", file: "students.program-inclusions.tsx", title: "Program Inclusions — CareerMesh Lanka", desc: "What's included in the CareerMesh student program and optional add-on services." },
  { id: "/students/entry-requirements", file: "students.entry-requirements.tsx", title: "Entry Requirements — CareerMesh Lanka", desc: "Eligibility for the CareerMesh student program: academic background, availability and required documents." },
  { id: "/students/faqs", file: "students.faqs.tsx", title: "Student FAQs — CareerMesh Lanka", desc: "Common questions from students about registration, eligibility, internships, fees and program support." },
  { id: "/students/register", file: "students.register.tsx", title: "Student Registration — CareerMesh Lanka", desc: "Register your interest in the CareerMesh student internship program." },
  { id: "/students/career-development-toolkit", file: "students.career-development-toolkit.tsx", title: "Career Development Toolkit — CareerMesh Lanka", desc: "Learning modules for personal branding, communication, interview preparation and workplace readiness." },

  // ---- EDUCATION ----
  { id: "/education-providers", file: "education-providers.tsx", title: "Education Providers — CareerMesh Lanka", desc: "Stronger industry connections and better graduate employability through CareerMesh partnerships and programs." },
  { id: "/education/why-partner", file: "education.why-partner.tsx", title: "Why Partner With Us? — CareerMesh Lanka", desc: "Benefits of partnering with CareerMesh: industry connections, internship coordination and employability strategy." },
  { id: "/education/our-partners", file: "education.our-partners.tsx", title: "Our Education Network — CareerMesh Lanka", desc: "The CareerMesh education network of universities, higher education institutions and training providers." },
  { id: "/education/programs", file: "education.programs.tsx", title: "Our Programs — CareerMesh Lanka", desc: "Customized employability programs adapted to academic requirements and industry needs." },
  { id: "/education/internship-placement", file: "education.internship-placement.tsx", title: "Internship Placement — CareerMesh Lanka", desc: "End-to-end internship placement management for educational institutions." },
  { id: "/education/industry-projects", file: "education.industry-projects.tsx", title: "Industry Group Projects — CareerMesh Lanka", desc: "Structured real-world project experiences connecting students with industry." },
  { id: "/education/internship-accelerator", file: "education.internship-accelerator.tsx", title: "Internship Accelerator — CareerMesh Lanka", desc: "Pre-internship preparation through focused workshops and coaching." },
  { id: "/education/employability-training", file: "education.employability-training.tsx", title: "Employability Training — CareerMesh Lanka", desc: "Work-readiness modules: communication, etiquette, teamwork, leadership and problem solving." },
  { id: "/education/testimonials", file: "education.testimonials.tsx", title: "Education Testimonials — CareerMesh Lanka", desc: "Testimonials from education partners in the CareerMesh network." },
  { id: "/education/case-studies", file: "education.case-studies.tsx", title: "Education Case Studies — CareerMesh Lanka", desc: "Case studies from CareerMesh education partnerships and programs." },
  { id: "/education/faqs", file: "education.faqs.tsx", title: "Education FAQs — CareerMesh Lanka", desc: "Common questions from education providers about partnerships, programs and ClientFlow access." },
  { id: "/education/partner-with-us", file: "education.partner-with-us.tsx", title: "Partner With Us — CareerMesh Lanka", desc: "Start an education partnership with CareerMesh Lanka." },

  // ---- EMPLOYERS ----
  { id: "/employers", file: "employers.tsx", title: "Employers — CareerMesh Lanka", desc: "Discover emerging talent and develop your future workforce with CareerMesh intern and graduate recruitment services." },
  { id: "/employers/why-host-interns", file: "employers.why-host-interns.tsx", title: "Why Host Interns? — CareerMesh Lanka", desc: "Benefits of hosting interns: access to emerging talent, fresh perspectives and future recruitment pipelines." },
  { id: "/employers/benefits", file: "employers.benefits.tsx", title: "Benefits of Hiring Interns — CareerMesh Lanka", desc: "Talent discovery, project contribution, skills-based matching and industry engagement through intern hiring." },
  { id: "/employers/our-partners", file: "employers.our-partners.tsx", title: "Our Employer Network — CareerMesh Lanka", desc: "The CareerMesh employer network of partner companies and organizations." },
  { id: "/employers/how-it-works", file: "employers.how-it-works.tsx", title: "How It Works — CareerMesh Lanka", desc: "The six-step CareerMesh hiring process from requirement to placement." },
  { id: "/employers/our-talent", file: "employers.our-talent.tsx", title: "Meet Our Talent — CareerMesh Lanka", desc: "How candidate profiles look in the CareerMesh network, using anonymized sample cards." },
  { id: "/employers/disciplines", file: "employers.disciplines.tsx", title: "Available Disciplines — CareerMesh Lanka", desc: "Talent disciplines available through CareerMesh: IT, engineering, finance, business, marketing and more." },
  { id: "/employers/testimonials", file: "employers.testimonials.tsx", title: "Employer Testimonials — CareerMesh Lanka", desc: "Testimonials from employer partners in the CareerMesh network." },
  { id: "/employers/case-studies", file: "employers.case-studies.tsx", title: "Employer Case Studies — CareerMesh Lanka", desc: "Case studies from CareerMesh employer hiring programs." },
  { id: "/employers/faqs", file: "employers.faqs.tsx", title: "Employer FAQs — CareerMesh Lanka", desc: "Common questions from employers about hiring interns, recruitment services and pricing." },
  { id: "/employers/recruitment-services", file: "employers.recruitment-services.tsx", title: "Recruitment Services — CareerMesh Lanka", desc: "Full recruitment support: intern recruitment, shortlisting, interview coordination and placement." },
  { id: "/employers/pricing", file: "employers.pricing.tsx", title: "Recruitment Pricing — CareerMesh Lanka", desc: "Recruitment service pricing and engagement models. Request a quote for your requirements." },
  { id: "/employers/hire-an-intern", file: "employers.hire-an-intern.tsx", title: "Hire an Intern — CareerMesh Lanka", desc: "Submit a hiring requirement and access prepared candidates through CareerMesh." },

  // ---- GRADUATE RECRUITERS ----
  { id: "/graduate-recruiters", file: "graduate-recruiters.tsx", title: "Graduate Recruiters — CareerMesh Lanka", desc: "Attract, recruit, develop and retain tomorrow's talent through CareerMesh graduate talent solutions." },
  { id: "/graduate-recruiters/why-careermesh", file: "graduate-recruiters.why-careermesh.tsx", title: "Why CareerMesh? — CareerMesh Lanka", desc: "Graduate talent expertise, university relationships and ClientFlow-powered recruitment operations." },
  { id: "/graduate-recruiters/our-approach", file: "graduate-recruiters.our-approach.tsx", title: "Our Approach — CareerMesh Lanka", desc: "The four-stage CareerMesh graduate talent framework: attraction, pre-graduate, recruitment and retention." },
  { id: "/graduate-recruiters/promotion-attraction", file: "graduate-recruiters.promotion-attraction.tsx", title: "Promotion & Attraction — CareerMesh Lanka", desc: "Employer branding, university engagement and campus campaigns for graduate talent." },
  { id: "/graduate-recruiters/pre-graduate-programs", file: "graduate-recruiters.pre-graduate-programs.tsx", title: "Pre-Graduate Programs — CareerMesh Lanka", desc: "Internship, summer and graduate readiness programs that build your talent pipeline early." },
  { id: "/graduate-recruiters/recruitment-outsourcing", file: "graduate-recruiters.recruitment-outsourcing.tsx", title: "Recruitment & Selection Outsourcing — CareerMesh Lanka", desc: "End-to-end graduate recruitment outsourcing: campaigns, screening, assessment and hiring coordination." },
  { id: "/graduate-recruiters/development-retention", file: "graduate-recruiters.development-retention.tsx", title: "Development & Retention — CareerMesh Lanka", desc: "Graduate onboarding, structured learning, mentoring and retention support." },
  { id: "/graduate-recruiters/case-studies", file: "graduate-recruiters.case-studies.tsx", title: "Graduate Recruitment Case Studies — CareerMesh Lanka", desc: "Case studies from CareerMesh graduate recruitment programs." },
  { id: "/graduate-recruiters/partners", file: "graduate-recruiters.partners.tsx", title: "Our Network — CareerMesh Lanka", desc: "Approved partner organizations in the CareerMesh graduate recruitment network." },
  { id: "/graduate-recruiters/team", file: "graduate-recruiters.team.tsx", title: "Meet Our Team — CareerMesh Lanka", desc: "The CareerMesh graduate recruitment team you'll work with." },
  { id: "/graduate-recruiters/faqs", file: "graduate-recruiters.faqs.tsx", title: "Graduate Recruitment FAQs — CareerMesh Lanka", desc: "Common questions about CareerMesh graduate recruitment services." },
  { id: "/graduate-recruiters/contact", file: "graduate-recruiters.contact.tsx", title: "Talk to Us — CareerMesh Lanka", desc: "Request a graduate recruitment consultation with CareerMesh." },

  // ---- CLIENTFLOW PLATFORM ----
  { id: "/platform", file: "platform.tsx", title: "ClientFlow Platform — CareerMesh Lanka", desc: "Your organization, your talent operations, one connected platform. Dedicated ClientFlow CRM workspaces for participating organizations." },
  { id: "/platform/university-crm", file: "platform.university-crm.tsx", title: "University CRM — ClientFlow", desc: "Student CRM, cohort management, employer databases and internship pipelines for universities." },
  { id: "/platform/internship-management-crm", file: "platform.internship-management-crm.tsx", title: "Internship Management CRM — ClientFlow", desc: "Student applications, placement pipelines and host company management for internship providers." },
  { id: "/platform/employer-crm", file: "platform.employer-crm.tsx", title: "Employer CRM — ClientFlow", desc: "Candidate database, hiring pipelines and interview scheduling for employers." },
  { id: "/platform/graduate-recruitment-crm", file: "platform.graduate-recruitment-crm.tsx", title: "Graduate Recruitment CRM — ClientFlow", desc: "Graduate talent database, employer CRM, recruitment pipelines and campaign management." },
  { id: "/platform/automation", file: "platform.automation.tsx", title: "Automation & Workflows — ClientFlow", desc: "Automate student registration, employer inquiries and interview scheduling with ClientFlow workflows." },
  { id: "/platform/ai", file: "platform.ai.tsx", title: "AI Capabilities — ClientFlow", desc: "Configured AI assistance for communication, FAQs, lead qualification and career guidance in ClientFlow." },
  { id: "/platform/pricing", file: "platform.pricing.tsx", title: "ClientFlow Pricing — CareerMesh Lanka", desc: "ClientFlow CRM packages: Starter, Professional, Business and Enterprise. Request a custom quote." },
  { id: "/platform/book-demo", file: "platform.book-demo.tsx", title: "Book a Demo — ClientFlow", desc: "See the ClientFlow CRM platform in action. Book a demo with the CareerMesh team." },

  // ---- CONTENT & SYSTEM ----
  { id: "/resources/career", file: "resources.career.tsx", title: "Career Advice — CareerMesh Lanka", desc: "Career advice articles and guides for students and graduates." },
  { id: "/resources/employers", file: "resources.employers.tsx", title: "Employer Resources — CareerMesh Lanka", desc: "Resources for employers on hiring interns and graduate talent." },
  { id: "/resources/education", file: "resources.education.tsx", title: "Education Resources — CareerMesh Lanka", desc: "Resources for education providers on employability and internships." },
  { id: "/resources/$slug", file: "resources.$slug.tsx", title: "Article — CareerMesh Lanka", desc: "An article from the CareerMesh resources center.", dynamic: "slug" },
  { id: "/success-stories/$slug", file: "success-stories.$slug.tsx", title: "Success Story — CareerMesh Lanka", desc: "A success story from the CareerMesh network.", dynamic: "slug" },
  { id: "/case-studies/$slug", file: "case-studies.$slug.tsx", title: "Case Study — CareerMesh Lanka", desc: "A case study from CareerMesh programs.", dynamic: "slug" },
  { id: "/privacy-policy", file: "privacy-policy.tsx", title: "Privacy Policy — CareerMesh Lanka", desc: "Privacy policy draft for professional legal review before publication." },
  { id: "/terms", file: "terms.tsx", title: "Terms & Conditions — CareerMesh Lanka", desc: "Terms and conditions draft for professional legal review before publication." },
  { id: "/cookie-policy", file: "cookie-policy.tsx", title: "Cookie Policy — CareerMesh Lanka", desc: "Cookie policy draft for professional legal review before publication." },
  { id: "/thank-you", file: "thank-you.tsx", title: "Thank You — CareerMesh Lanka", desc: "Your inquiry has been received. The CareerMesh team will be in touch." },
  { id: "/search", file: "search.tsx", title: "Search — CareerMesh Lanka", desc: "Search the CareerMesh Lanka website." },
];

function safeIdent(id) {
  return id.replace(/^\//, "").replace(/[^a-zA-Z0-9]/g, "_").replace(/^(\d)/, "_$1");
}

function body(route) {
  const compName = safeIdent(route.id) + "Page";
  const cleanTitle = route.title.replace(/ — CareerMesh Lanka$/, "").replace(/ — ClientFlow$/, "");
  if (route.dynamic) {
    return `import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(${JSON.stringify(route.id)})({
  head: () => ({
    meta: [
      { title: ${JSON.stringify(route.title)} },
      { name: "description", content: ${JSON.stringify(route.desc)} },
      { property: "og:title", content: ${JSON.stringify(route.title)} },
      { property: "og:description", content: ${JSON.stringify(route.desc)} },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ${compName},
});

function ${compName}() {
  const { ${route.dynamic} } = Route.useParams();
  return (
    <main className="min-h-[70vh] bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow text-primary">CareerMesh Lanka</p>
          <h1 className="mt-3 text-display text-foreground">${cleanTitle}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">${route.desc}</p>
          <p className="mt-4 text-sm text-muted-foreground">Reference: <span className="font-mono">{${route.dynamic}}</span></p>
          <p className="mt-8 inline-block rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            This page is part of an active build — full content lands in the next phase.
          </p>
        </div>
      </div>
    </main>
  );
}`;
  }
  return `import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(${JSON.stringify(route.id)})({
  head: () => ({
    meta: [
      { title: ${JSON.stringify(route.title)} },
      { name: "description", content: ${JSON.stringify(route.desc)} },
      { property: "og:title", content: ${JSON.stringify(route.title)} },
      { property: "og:description", content: ${JSON.stringify(route.desc)} },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ${compName},
});

function ${compName}() {
  return (
    <main className="min-h-[70vh] bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow text-primary">CareerMesh Lanka</p>
          <h1 className="mt-3 text-display text-foreground">${cleanTitle}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">${route.desc}</p>
          <p className="mt-8 inline-block rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
            This page is part of an active build — full content lands in the next phase.
          </p>
        </div>
      </div>
    </main>
  );
}`;
}

let count = 0;
for (const r of routes) {
  const filePath = join(root, r.file);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, body(r), "utf8");
  count++;
}
console.log(`Created ${count} route stubs.`);