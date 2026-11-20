import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShieldCheck, FileText, Clock, CheckCircle2, Upload, Loader2 } from "lucide-react";
import { Container, Section } from "@/components/shared/Container";
import { FormField } from "@/components/shared/FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CMButton } from "@/components/shared/Button";
import { Honeypot } from "@/components/shared/Honeypot";
import { useFormSubmission } from "@/lib/forms/useSubmission";

const districts = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Monaragala",
  "Ratnapura",
  "Kegalle",
  "Other",
];

const workModes = ["On-site", "Remote", "Hybrid", "Flexible"];
const internshipFields = [
  "IT & Software Development",
  "Accounting",
  "Finance",
  "Engineering",
  "Business Administration",
  "Digital Marketing",
  "Human Resources",
  "Hospitality & Tourism",
  "Other Professional Areas",
];

const MAX_FILE_MB = 5;
const ALLOWED = [".pdf", ".doc", ".docx"];

const schema = z.object({
  firstName: z.string().min(1, "First name is required").max(80),
  lastName: z.string().min(1, "Last name is required").max(80),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[0-9 +\-()]{7,20}$/, "Enter a valid phone number"),
  district: z.string().min(1, "Select your district"),
  university: z.string().min(1, "University / institution is required").max(120),
  degree: z.string().min(1, "Degree is required").max(120),
  studyField: z.string().min(1, "Study field is required").max(120),
  academicYear: z.string().min(1, "Select your academic year"),
  graduationYear: z
    .string()
    .min(1, "Graduation year is required")
    .regex(/^\d{4}$/, "Enter a 4-digit year"),
  preferredField: z.string().min(1, "Select a preferred internship field"),
  preferredWorkMode: z.string().min(1, "Select a preferred work mode"),
  cv: z
    .any()
    .optional()
    .refine(
      (files) => !files || files.length === 0 || files[0].size <= MAX_FILE_MB * 1024 * 1024,
      `File must be under ${MAX_FILE_MB}MB`,
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        ALLOWED.some((ext) => files[0].name.toLowerCase().endsWith(ext)),
      "Accepted formats: PDF, DOC, DOCX",
    ),
  message: z.string().max(1000, "Keep your message under 1000 characters").optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy consent to continue" }),
  }),
});

type FormValues = z.infer<typeof schema>;

const reassurance = [
  {
    icon: <FileText className="size-5" />,
    title: "What happens next",
    body: "After you register, we review your profile and contact you for a consultation to understand your goals and preferred field.",
  },
  {
    icon: <Clock className="size-5" />,
    title: "Typical timeline",
    body: "Preparation and opportunity matching usually take a few weeks, depending on your readiness and available opportunities.",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "Your privacy",
    body: "Your information is used only for program coordination. CVs are never shared with employers without your consent.",
  },
];

export function StudentRegistrationForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const { submitting, submitted, submitError, submit, clearSubmitted } =
    useFormSubmission("student-registration");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const cv = data.cv && data.cv.length > 0 ? data.cv[0] : undefined;
    const ok = await submit(
      data as unknown as Record<string, unknown>,
      honeypot,
      cv ? { name: cv.name, size: cv.size, type: cv.type } : undefined,
    );
    if (ok) {
      reset();
      setFileName(null);
    }
  };

  if (submitted) {
    return (
      <Section bg="cloud">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-lg border border-border bg-card px-6 py-16 text-center shadow-[var(--shadow-e1)]">
            <div className="flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
              <CheckCircle2 className="size-7" />
            </div>
            <h2 className="text-h3 text-navy-900">Registration received</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Thank you for registering your interest. Our team will review your details and contact
              you for a consultation. Please check your email for confirmation.
            </p>
            <CMButton variant="secondary" size="md" onClick={clearSubmitted}>
              Submit another registration
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
              <div className="rounded-lg border border-border bg-mint p-6">
                <h2 className="text-h3 text-navy-900">Before you begin</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Registration of interest is free. Program fees apply to the structured program —
                  see the Program Fees page for details.
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
              <h2 className="text-h3 text-navy-900">Student Registration</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fields marked <span className="text-destructive">*</span> are required.
              </p>

              {submitError && (
                <p className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                  {submitError}
                </p>
              )}

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <FormField
                  label="First Name"
                  htmlFor="firstName"
                  required
                  error={errors.firstName?.message}
                >
                  <Input id="firstName" className="h-12" {...register("firstName")} />
                </FormField>
                <FormField
                  label="Last Name"
                  htmlFor="lastName"
                  required
                  error={errors.lastName?.message}
                >
                  <Input id="lastName" className="h-12" {...register("lastName")} />
                </FormField>
                <FormField label="Email" htmlFor="email" required error={errors.email?.message}>
                  <Input id="email" type="email" className="h-12" {...register("email")} />
                </FormField>
                <FormField label="Phone" htmlFor="phone" required error={errors.phone?.message}>
                  <Input id="phone" type="tel" className="h-12" {...register("phone")} />
                </FormField>
                <FormField
                  label="District"
                  htmlFor="district"
                  required
                  error={errors.district?.message}
                >
                  <select
                    id="district"
                    className="h-12 w-full rounded-sm border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...register("district")}
                  >
                    <option value="">Select district</option>
                    {districts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  label="University / Institution"
                  htmlFor="university"
                  required
                  error={errors.university?.message}
                >
                  <Input id="university" className="h-12" {...register("university")} />
                </FormField>
                <FormField label="Degree" htmlFor="degree" required error={errors.degree?.message}>
                  <Input id="degree" className="h-12" {...register("degree")} />
                </FormField>
                <FormField
                  label="Study Field"
                  htmlFor="studyField"
                  required
                  error={errors.studyField?.message}
                >
                  <Input id="studyField" className="h-12" {...register("studyField")} />
                </FormField>
                <FormField
                  label="Academic Year"
                  htmlFor="academicYear"
                  required
                  error={errors.academicYear?.message}
                >
                  <select
                    id="academicYear"
                    className="h-12 w-full rounded-sm border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...register("academicYear")}
                  >
                    <option value="">Select year</option>
                    <option>Year 1</option>
                    <option>Year 2</option>
                    <option>Year 3</option>
                    <option>Year 4</option>
                    <option>Final Year</option>
                    <option>Graduated</option>
                  </select>
                </FormField>
                <FormField
                  label="Graduation Year"
                  htmlFor="graduationYear"
                  required
                  error={errors.graduationYear?.message}
                  helper="e.g. 2026"
                >
                  <Input
                    id="graduationYear"
                    className="h-12"
                    inputMode="numeric"
                    {...register("graduationYear")}
                  />
                </FormField>
                <FormField
                  label="Preferred Internship Field"
                  htmlFor="preferredField"
                  required
                  error={errors.preferredField?.message}
                >
                  <select
                    id="preferredField"
                    className="h-12 w-full rounded-sm border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...register("preferredField")}
                  >
                    <option value="">Select field</option>
                    {internshipFields.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  label="Preferred Work Mode"
                  htmlFor="preferredWorkMode"
                  required
                  error={errors.preferredWorkMode?.message}
                >
                  <select
                    id="preferredWorkMode"
                    className="h-12 w-full rounded-sm border border-input bg-card px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...register("preferredWorkMode")}
                  >
                    <option value="">Select work mode</option>
                    {workModes.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <div className="mt-5">
                <FormField
                  label="CV Upload"
                  htmlFor="cv"
                  helper={`Accepted: ${ALLOWED.join(", ")}. Max ${MAX_FILE_MB}MB.`}
                  error={errors.cv?.message as string | undefined}
                >
                  <label
                    htmlFor="cv"
                    className="flex h-14 cursor-pointer items-center gap-3 rounded-sm border border-dashed border-border-strong bg-muted px-4 text-sm text-muted-foreground hover:border-teal-600 hover:text-teal-700"
                  >
                    <Upload className="size-5" />
                    {fileName ? (
                      <span className="font-medium text-navy-900">{fileName}</span>
                    ) : (
                      <span>Click to upload your CV (optional)</span>
                    )}
                    <input
                      id="cv"
                      type="file"
                      accept={ALLOWED.join(",")}
                      className="sr-only"
                      {...register("cv")}
                      onChange={(e) => {
                        setFileName(e.target.files?.[0]?.name ?? null);
                        register("cv").onChange?.(e);
                      }}
                    />
                  </label>
                </FormField>
              </div>

              <div className="mt-5">
                <FormField
                  label="Message"
                  htmlFor="message"
                  helper="Optional — tell us about your goals"
                  error={errors.message?.message}
                >
                  <Textarea id="message" rows={4} className="resize-y" {...register("message")} />
                </FormField>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <Checkbox id="consent" {...register("consent")} />
                <label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
                  <span className="text-navy-900 font-medium">
                    I agree to the privacy consent.{" "}
                  </span>
                  I understand my information will be used for program coordination and will not be
                  shared with employers without my consent.{" "}
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
                    "Submit Registration"
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
