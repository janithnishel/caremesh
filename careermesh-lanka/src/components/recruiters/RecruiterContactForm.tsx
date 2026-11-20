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

const schema = z.object({
  organization: z.string().min(1, "Organization name is required").max(200),
  contactPerson: z.string().min(1, "Contact person is required").max(120),
  position: z.string().min(1, "Position is required").max(120),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9 +\-()]{7,20}$/, "Enter a valid phone number"),
  intakeRequirements: z.string().max(500, "Keep this under 500 characters").optional(),
  currentProcess: z.string().max(800, "Keep this under 800 characters").optional(),
  programRequirements: z.string().max(800, "Keep this under 800 characters").optional(),
  technologyRequirements: z.string().max(800, "Keep this under 800 characters").optional(),
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
    body: "After you submit, we review your requirements and arrange a consultation to discuss your graduate talent goals.",
  },
  {
    icon: <Clock className="size-5" />,
    title: "Response time",
    body: "We typically respond within two business days to schedule a consultation.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Your privacy",
    body: "Your information is used only for consultation discussions and is not shared with third parties.",
  },
];

export function RecruiterContactForm() {
  const [honeypot, setHoneypot] = useState("");
  const { submitting, submitted, submitError, submit, clearSubmitted } =
    useFormSubmission("graduate-recruitment");

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
            <h2 className="text-h3 text-navy-900">Consultation request received</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Thank you for your interest in our graduate talent solutions. Our team will review
              your details and contact you within two business days to schedule a consultation.
            </p>
            <CMButton variant="secondary" size="md" onClick={clearSubmitted}>
              Submit another request
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
              <div className="rounded-lg border border-border bg-navy-900 p-6 text-white">
                <h2 className="text-h3 text-white">Talk to Us</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Tell us about your graduate intake needs and current process. We'll tailor a
                  solution covering attraction, recruitment, development and retention.
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
              <h2 className="text-h3 text-navy-900">Consultation Request</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked <span className="text-destructive">*</span> are required.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Organization"
                  htmlFor="organization"
                  required
                  error={errors.organization?.message}
                >
                  <Input id="organization" className="h-12" {...register("organization")} />
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
                  label="Graduate Intake Requirements"
                  htmlFor="intakeRequirements"
                  helper="Approximate number and roles"
                  error={errors.intakeRequirements?.message}
                >
                  <Input
                    id="intakeRequirements"
                    className="h-12"
                    {...register("intakeRequirements")}
                  />
                </FormField>
              </div>

              <div className="mt-5 grid gap-5">
                <FormField
                  label="Current Recruitment Process"
                  htmlFor="currentProcess"
                  helper="How do you currently attract and recruit graduates?"
                  error={errors.currentProcess?.message}
                >
                  <Textarea
                    id="currentProcess"
                    rows={3}
                    className="resize-y"
                    {...register("currentProcess")}
                  />
                </FormField>
                <FormField
                  label="Program Requirements"
                  htmlFor="programRequirements"
                  helper="What development or retention support do you need?"
                  error={errors.programRequirements?.message}
                >
                  <Textarea
                    id="programRequirements"
                    rows={3}
                    className="resize-y"
                    {...register("programRequirements")}
                  />
                </FormField>
                <FormField
                  label="Technology Requirements"
                  htmlFor="technologyRequirements"
                  helper="Any CRM or platform needs?"
                  error={errors.technologyRequirements?.message}
                >
                  <Textarea
                    id="technologyRequirements"
                    rows={3}
                    className="resize-y"
                    {...register("technologyRequirements")}
                  />
                </FormField>
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
                  I understand my information will be used only for consultation discussions and
                  will not be shared with third parties. <span className="text-destructive">*</span>
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
                    "Request Consultation"
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
