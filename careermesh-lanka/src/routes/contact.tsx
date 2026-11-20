import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle2,
  Loader2,
  GraduationCap,
  School,
  Briefcase,
  Users,
  Cpu,
  MessageSquare,
} from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/shared/Card";
import { CTASection } from "@/components/shared/CTASection";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FormField } from "@/components/shared/FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CMButton } from "@/components/shared/Button";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — CareerMesh Lanka" },
      {
        name: "description",
        content:
          "Get in touch with CareerMesh Lanka about student registration, education partnerships, employer hiring, graduate recruitment or ClientFlow CRM.",
      },
      { property: "og:title", content: "Contact Us — CareerMesh Lanka" },
      {
        property: "og:description",
        content:
          "Get in touch with CareerMesh Lanka about student registration, education partnerships, employer hiring, graduate recruitment or ClientFlow CRM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inquiryCategories = [
  {
    key: "student",
    label: "Student Inquiry",
    icon: <GraduationCap className="size-5" />,
    desc: "Registration, programs and opportunities",
  },
  {
    key: "education",
    label: "Education Partnership",
    icon: <School className="size-5" />,
    desc: "Institution partnerships and programs",
  },
  {
    key: "employer",
    label: "Employer Inquiry",
    icon: <Briefcase className="size-5" />,
    desc: "Hiring interns and recruitment",
  },
  {
    key: "recruitment",
    label: "Graduate Recruitment",
    icon: <Users className="size-5" />,
    desc: "Graduate talent solutions",
  },
  {
    key: "clientflow",
    label: "ClientFlow CRM",
    icon: <Cpu className="size-5" />,
    desc: "Platform and demo requests",
  },
  {
    key: "general",
    label: "General Business Inquiry",
    icon: <MessageSquare className="size-5" />,
    desc: "Anything else",
  },
] as const;

const baseSchema = {
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9 +\-()]{7,20}$/, "Enter a valid phone number"),
  message: z.string().min(10, "Please provide a few details (min 10 characters)").max(2000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy consent to continue" }),
  }),
};

const schemas: Record<string, z.ZodTypeAny> = {
  student: z.object({
    ...baseSchema,
    university: z.string().max(200).optional(),
    field: z.string().max(200).optional(),
  }),
  education: z.object({
    ...baseSchema,
    institution: z.string().min(1, "Institution name is required").max(200),
    position: z.string().max(120).optional(),
  }),
  employer: z.object({
    ...baseSchema,
    company: z.string().min(1, "Company name is required").max(200),
    position: z.string().max(120).optional(),
  }),
  recruitment: z.object({
    ...baseSchema,
    organization: z.string().min(1, "Organization name is required").max(200),
    position: z.string().max(120).optional(),
  }),
  clientflow: z.object({
    ...baseSchema,
    organization: z.string().max(200).optional(),
    organizationType: z.string().max(120).optional(),
  }),
  general: z.object({ ...baseSchema }),
};

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  university?: string;
  field?: string;
  institution?: string;
  company?: string;
  organization?: string;
  position?: string;
  organizationType?: string;
};

const reassurance = [
  {
    icon: <FileText className="size-5" />,
    title: "What happens next",
    body: "We review your inquiry and route it to the right team. You'll receive a personal response — not an automated template.",
  },
  {
    icon: <Clock className="size-5" />,
    title: "Response time",
    body: "We typically respond within two business days. Urgent hiring requirements are prioritized.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Your privacy",
    body: "Your information is used only to respond to your inquiry and is not shared with third parties.",
  },
];

function ContactPage() {
  const [category, setCategory] = useState<string>("student");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schemas[category] as never) });

  const onSubmit = async (_data: FormValues) => {
    // Phase 6 builds UI + validation. Backend CRM integration lands in Phase 7.
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    reset();
  };

  const activeCategory = inquiryCategories.find((c) => c.key === category)!;

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <Section bg="cloud">
        <Container>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's Talk About Your Goals."
            description="Select the category that fits your inquiry and we'll route it to the right team. Contact details will appear here once supplied."
          />
        </Container>
      </Section>

      <Section bg="white">
        <Container>
          {/* Contact info — null until supplied */}
          <div className="mb-10 rounded-lg border border-dashed border-border-strong bg-card px-6 py-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-navy-900">Contact details:</span> Phone, email and
              address will be displayed here once supplied in configuration. We never publish
              invented contact information.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Reassurance panel */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-4">
                <div className="rounded-lg border border-border bg-mint p-6">
                  <h2 className="text-h3 text-navy-900">Get in Touch</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Whether you're a student, institution, employer or recruiter, we're here to help
                    you move forward.
                  </p>
                </div>
                {reassurance.map((r) => (
                  <div
                    key={r.title}
                    className="flex gap-3 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-e1)]"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      {r.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-900">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card px-6 py-16 text-center shadow-[var(--shadow-e1)]">
                  <div className="flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
                    <CheckCircle2 className="size-7" />
                  </div>
                  <h2 className="text-h3 text-navy-900">Inquiry received</h2>
                  <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                    Thank you for contacting {siteConfig.name}. Our team will respond within two
                    business days.
                  </p>
                  <CMButton variant="secondary" size="md" onClick={() => setSubmitted(false)}>
                    Send another inquiry
                  </CMButton>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8"
                >
                  <h2 className="text-h3 text-navy-900">Inquiry Form</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fields marked <span className="text-destructive">*</span> are required.
                  </p>

                  {/* Category selector */}
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-navy-900">Inquiry category</p>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {inquiryCategories.map((c) => (
                        <button
                          key={c.key}
                          type="button"
                          onClick={() => {
                            setCategory(c.key);
                            reset();
                          }}
                          className={`flex flex-col items-start gap-1 rounded-lg border p-3 text-left transition-colors ${
                            category === c.key
                              ? "border-teal-700 bg-teal-50"
                              : "border-border bg-card hover:border-border-strong"
                          }`}
                        >
                          <span
                            className={
                              category === c.key ? "text-teal-700" : "text-muted-foreground"
                            }
                          >
                            {c.icon}
                          </span>
                          <span className="text-xs font-bold text-navy-900">{c.label}</span>
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{activeCategory.desc}</p>
                  </div>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Full Name"
                      htmlFor="name"
                      required
                      error={errors.name?.message}
                    >
                      <Input id="name" className="h-12" {...register("name")} />
                    </FormField>
                    <FormField label="Email" htmlFor="email" required error={errors.email?.message}>
                      <Input id="email" type="email" className="h-12" {...register("email")} />
                    </FormField>
                    <FormField label="Phone" htmlFor="phone" required error={errors.phone?.message}>
                      <Input id="phone" type="tel" className="h-12" {...register("phone")} />
                    </FormField>

                    {category === "student" && (
                      <>
                        <FormField
                          label="University"
                          htmlFor="university"
                          error={errors.university?.message}
                        >
                          <Input id="university" className="h-12" {...register("university")} />
                        </FormField>
                        <FormField
                          label="Preferred Field"
                          htmlFor="field"
                          error={errors.field?.message}
                        >
                          <Input id="field" className="h-12" {...register("field")} />
                        </FormField>
                      </>
                    )}
                    {category === "education" && (
                      <>
                        <FormField
                          label="Institution Name"
                          htmlFor="institution"
                          required
                          error={errors.institution?.message}
                        >
                          <Input id="institution" className="h-12" {...register("institution")} />
                        </FormField>
                        <FormField
                          label="Position"
                          htmlFor="position"
                          error={errors.position?.message}
                        >
                          <Input id="position" className="h-12" {...register("position")} />
                        </FormField>
                      </>
                    )}
                    {category === "employer" && (
                      <>
                        <FormField
                          label="Company Name"
                          htmlFor="company"
                          required
                          error={errors.company?.message}
                        >
                          <Input id="company" className="h-12" {...register("company")} />
                        </FormField>
                        <FormField
                          label="Position"
                          htmlFor="position"
                          error={errors.position?.message}
                        >
                          <Input id="position" className="h-12" {...register("position")} />
                        </FormField>
                      </>
                    )}
                    {category === "recruitment" && (
                      <>
                        <FormField
                          label="Organization Name"
                          htmlFor="organization"
                          required
                          error={errors.organization?.message}
                        >
                          <Input id="organization" className="h-12" {...register("organization")} />
                        </FormField>
                        <FormField
                          label="Position"
                          htmlFor="position"
                          error={errors.position?.message}
                        >
                          <Input id="position" className="h-12" {...register("position")} />
                        </FormField>
                      </>
                    )}
                    {category === "clientflow" && (
                      <>
                        <FormField
                          label="Organization"
                          htmlFor="organization"
                          error={errors.organization?.message}
                        >
                          <Input id="organization" className="h-12" {...register("organization")} />
                        </FormField>
                        <FormField
                          label="Organization Type"
                          htmlFor="organizationType"
                          error={errors.organizationType?.message}
                        >
                          <Input
                            id="organizationType"
                            className="h-12"
                            {...register("organizationType")}
                          />
                        </FormField>
                      </>
                    )}
                  </div>

                  <div className="mt-5">
                    <FormField
                      label="Message"
                      htmlFor="message"
                      required
                      error={errors.message?.message}
                    >
                      <Textarea
                        id="message"
                        rows={5}
                        className="resize-y"
                        {...register("message")}
                      />
                    </FormField>
                  </div>

                  <div className="mt-5 flex items-start gap-3">
                    <Checkbox id="consent" {...register("consent")} />
                    <label
                      htmlFor="consent"
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="font-medium text-navy-900">
                        I agree to the privacy consent.{" "}
                      </span>
                      I understand my information will be used only to respond to my inquiry and
                      will not be shared with third parties.{" "}
                      <span className="text-destructive">*</span>
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">
                      {errors.consent.message}
                    </p>
                  )}

                  <div className="mt-7">
                    <CMButton type="submit" variant="primary" size="lg" disabled={submitting}>
                      {submitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" /> Submitting…
                        </>
                      ) : (
                        "Send Inquiry"
                      )}
                    </CMButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow="Prefer a Direct Route?"
        title="Jump Straight to the Right Form."
        description="Each audience has a dedicated inquiry form tailored to its needs."
        ctas={[
          { label: "Student Registration", to: "/students/register" },
          { label: "Hire an Intern", to: "/employers/hire-an-intern" },
        ]}
      />
    </>
  );
}
