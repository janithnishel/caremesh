import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShieldCheck, FileText, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { FormField } from "@/components/shared/FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CMButton } from "@/components/shared/Button";
import { Honeypot } from "@/components/shared/Honeypot";
import { useFormSubmission } from "@/lib/forms/useSubmission";

const industries = [
  "Information Technology",
  "Software Engineering",
  "Finance & Accounting",
  "Engineering",
  "Business & Administration",
  "Marketing & Communications",
  "Human Resources",
  "Hospitality & Tourism",
  "Other",
];

const workModes = ["On-site", "Remote", "Hybrid", "Flexible"];
const payTypes = ["Paid", "Unpaid", "To Be Discussed"];

const schema = z.object({
  companyName: z.string().min(1, "Company name is required").max(200),
  industry: z.string().min(1, "Select an industry"),
  contactPerson: z.string().min(1, "Contact person is required").max(120),
  position: z.string().min(1, "Position is required").max(120),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9 +\-()]{7,20}$/, "Enter a valid phone number"),
  requiredRole: z.string().min(1, "Required role is required").max(200),
  vacancies: z
    .string()
    .min(1, "Number of vacancies is required")
    .regex(/^[1-9][0-9]*$/, "Enter a valid number"),
  requiredSkills: z.string().min(1, "Required skills are required").max(500),
  duration: z.string().min(1, "Internship duration is required").max(100),
  location: z.string().min(1, "Location is required").max(200),
  workMode: z.string().min(1, "Select a work mode"),
  startDate: z.string().min(1, "Expected start date is required"),
  payType: z.string().min(1, "Select a pay type"),
  jobDescription: z.string().min(1, "Job description is required").max(2000),
  message: z.string().max(1500, "Keep your message under 1500 characters").optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy consent to continue" }),
  }),
});

type FormValues = z.infer<typeof schema>;

const reassurance = [
  {
    icon: <FileText className="size-5" />,
    title: "What happens next",
    body: "After you submit, we review your requirements and contact you to discuss suitable candidates.",
  },
  {
    icon: <Clock className="size-5" />,
    title: "Response time",
    body: "We typically respond within two business days to begin sourcing candidates.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Your privacy",
    body: "Your hiring requirements are used only for recruitment coordination and are not shared publicly.",
  },
];

export function EmployerHireForm() {
  const [honeypot, setHoneypot] = useState("");
  const { submitting, submitted, submitError, submit, clearSubmitted } =
    useFormSubmission("hire-an-intern");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const ok = await submit(data as unknown as Record<string, unknown>, honeypot);
    if (ok) reset();
  };

  if (submitted) {
    return (
      <Section bg="cloud">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-lg border border-border bg-card px-6 py-16 text-center shadow-[var(--shadow-e1)]">
            <div className="flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
              <CheckCircle2 className="size-7" />
            </div>
            <h2 className="text-h3 text-navy-900">Hiring requirement received</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Thank you for submitting your hiring requirement. Our team will review your details
              and contact you within two business days to discuss suitable candidates.
            </p>
            <CMButton variant="secondary" size="md" onClick={clearSubmitted}>
              Submit another requirement
            </CMButton>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section bg="cloud">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Reassurance panel */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-lg border border-border bg-cloud p-6">
                <h2 className="text-h3 text-navy-900">Hire an Intern</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Tell us about the role and your requirements. We'll source, screen and coordinate
                  candidates so you can focus on interviewing and selecting.
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-e1)] md:p-8"
            >
              <h2 className="text-h3 text-navy-900">Hiring Requirement Form</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked <span className="text-destructive">*</span> are required.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Company Name"
                  htmlFor="companyName"
                  required
                  error={errors.companyName?.message}
                >
                  <Input id="companyName" className="h-12" {...register("companyName")} />
                </FormField>
                <FormField
                  label="Industry"
                  htmlFor="industry"
                  required
                  error={errors.industry?.message}
                >
                  <select
                    id="industry"
                    className="h-12 w-full rounded-sm border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...register("industry")}
                  >
                    <option value="">Select industry</option>
                    {industries.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  label="Contact Person"
                  htmlFor="contactPerson"
                  required
                  error={errors.contactPerson?.message}
                >
                  <Input id="contactPerson" className="h-12" {...register("contactPerson")} />
                </FormField>
                <FormField
                  label="Position"
                  htmlFor="position"
                  required
                  error={errors.position?.message}
                >
                  <Input id="position" className="h-12" {...register("position")} />
                </FormField>
                <FormField label="Email" htmlFor="email" required error={errors.email?.message}>
                  <Input id="email" type="email" className="h-12" {...register("email")} />
                </FormField>
                <FormField label="Phone" htmlFor="phone" required error={errors.phone?.message}>
                  <Input id="phone" type="tel" className="h-12" {...register("phone")} />
                </FormField>
                <FormField
                  label="Required Role"
                  htmlFor="requiredRole"
                  required
                  error={errors.requiredRole?.message}
                >
                  <Input id="requiredRole" className="h-12" {...register("requiredRole")} />
                </FormField>
                <FormField
                  label="Number of Vacancies"
                  htmlFor="vacancies"
                  required
                  error={errors.vacancies?.message}
                >
                  <Input
                    id="vacancies"
                    type="number"
                    min="1"
                    className="h-12"
                    {...register("vacancies")}
                  />
                </FormField>
                <FormField
                  label="Required Skills"
                  htmlFor="requiredSkills"
                  required
                  helper="Comma-separated list of key skills"
                  error={errors.requiredSkills?.message}
                >
                  <Input id="requiredSkills" className="h-12" {...register("requiredSkills")} />
                </FormField>
                <FormField
                  label="Internship Duration"
                  htmlFor="duration"
                  required
                  error={errors.duration?.message}
                >
                  <Input
                    id="duration"
                    className="h-12"
                    placeholder="e.g. 3 months"
                    {...register("duration")}
                  />
                </FormField>
                <FormField
                  label="Location"
                  htmlFor="location"
                  required
                  error={errors.location?.message}
                >
                  <Input id="location" className="h-12" {...register("location")} />
                </FormField>
                <FormField
                  label="Work Mode"
                  htmlFor="workMode"
                  required
                  error={errors.workMode?.message}
                >
                  <select
                    id="workMode"
                    className="h-12 w-full rounded-sm border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...register("workMode")}
                  >
                    <option value="">Select work mode</option>
                    {workModes.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  label="Expected Start Date"
                  htmlFor="startDate"
                  required
                  error={errors.startDate?.message}
                >
                  <Input id="startDate" type="date" className="h-12" {...register("startDate")} />
                </FormField>
                <FormField
                  label="Pay Type"
                  htmlFor="payType"
                  required
                  error={errors.payType?.message}
                >
                  <select
                    id="payType"
                    className="h-12 w-full rounded-sm border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...register("payType")}
                  >
                    <option value="">Select pay type</option>
                    {payTypes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <div className="mt-5">
                <FormField
                  label="Job Description"
                  htmlFor="jobDescription"
                  required
                  error={errors.jobDescription?.message}
                >
                  <Textarea
                    id="jobDescription"
                    rows={5}
                    className="resize-y"
                    {...register("jobDescription")}
                  />
                </FormField>
              </div>

              <div className="mt-5">
                <FormField
                  label="Message"
                  htmlFor="message"
                  helper="Optional — anything else you'd like us to know"
                  error={errors.message?.message}
                >
                  <Textarea id="message" rows={3} className="resize-y" {...register("message")} />
                </FormField>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <Checkbox id="consent" {...register("consent")} />
                <label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
                  <span className="text-navy-900 font-medium">
                    I agree to the privacy consent.{" "}
                  </span>
                  I understand my hiring requirements will be used only for recruitment coordination
                  and will not be shared publicly. <span className="text-destructive">*</span>
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
                    "Submit Hiring Requirement"
                  )}
                </CMButton>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
