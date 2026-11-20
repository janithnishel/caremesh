/**
 * Server-side Zod validation schemas for every inquiry form.
 * Browser-safe (Zod only) — imported by both the server function and the
 * client submission hook. The client forms keep their own inline schemas
 * for instant feedback; the server re-validates authoritatively here.
 */
import { z } from "zod";

export const formNames = [
  "student-registration",
  "education-partnership",
  "hire-an-intern",
  "graduate-recruitment",
  "clientflow-demo",
  "general-contact",
] as const;

export type FormName = (typeof formNames)[number];

const consent = z
  .boolean()
  .refine((v) => v === true, { message: "You must agree to the privacy consent" });
const email = z.string().min(1, "Email is required").email("Enter a valid email address");
const phone = z
  .string()
  .min(1, "Phone is required")
  .regex(/^[0-9 +\-()]{7,20}$/, "Enter a valid phone number");

export const studentRegistrationSchema = z.object({
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  email,
  phone,
  district: z.string().min(1),
  university: z.string().min(1).max(120),
  degree: z.string().min(1).max(120),
  studyField: z.string().min(1).max(120),
  academicYear: z.string().min(1),
  graduationYear: z
    .string()
    .min(1)
    .regex(/^\d{4}$/, "Enter a 4-digit year"),
  preferredField: z.string().min(1),
  preferredWorkMode: z.string().min(1),
  message: z.string().max(1000).optional(),
  consent,
});

export const educationPartnershipSchema = z.object({
  institutionName: z.string().min(1).max(200),
  institutionType: z.string().min(1),
  contactPerson: z.string().min(1).max(120),
  position: z.string().min(1).max(120),
  email,
  phone,
  studentPopulation: z.string().max(50).optional(),
  requiredPrograms: z.string().min(1),
  currentChallenges: z.string().max(1000).optional(),
  requiredTechnology: z.string().max(1000).optional(),
  message: z.string().max(1500).optional(),
  consent,
});

export const hireAnInternSchema = z.object({
  companyName: z.string().min(1).max(200),
  industry: z.string().min(1),
  contactPerson: z.string().min(1).max(120),
  position: z.string().min(1).max(120),
  email,
  phone,
  requiredRole: z.string().min(1).max(200),
  vacancies: z
    .string()
    .min(1)
    .regex(/^[1-9][0-9]*$/, "Enter a valid number"),
  requiredSkills: z.string().min(1).max(500),
  duration: z.string().min(1).max(100),
  location: z.string().min(1).max(200),
  workMode: z.string().min(1),
  startDate: z.string().min(1),
  payType: z.string().min(1),
  jobDescription: z.string().min(1).max(2000),
  message: z.string().max(1500).optional(),
  consent,
});

export const graduateRecruitmentSchema = z.object({
  organization: z.string().min(1).max(200),
  contactPerson: z.string().min(1).max(120),
  position: z.string().min(1).max(120),
  email,
  phone,
  intakeRequirements: z.string().max(500).optional(),
  currentProcess: z.string().max(800).optional(),
  programRequirements: z.string().max(800).optional(),
  technologyRequirements: z.string().max(800).optional(),
  message: z.string().max(1500).optional(),
  consent,
});

export const clientflowDemoSchema = z.object({
  organization: z.string().min(1).max(200),
  organizationType: z.string().min(1),
  contactPerson: z.string().min(1).max(120),
  email,
  phone,
  teamSize: z.string().max(50).optional(),
  interests: z.string().max(800).optional(),
  message: z.string().max(1500).optional(),
  consent,
});

const baseContact = {
  name: z.string().min(1).max(120),
  email,
  phone,
  message: z.string().min(10).max(2000),
  consent,
};

export const contactSchemas: Record<string, z.ZodTypeAny> = {
  student: z.object({
    ...baseContact,
    university: z.string().max(200).optional(),
    field: z.string().max(200).optional(),
  }),
  education: z.object({
    ...baseContact,
    institution: z.string().min(1).max(200),
    position: z.string().max(120).optional(),
  }),
  employer: z.object({
    ...baseContact,
    company: z.string().min(1).max(200),
    position: z.string().max(120).optional(),
  }),
  recruitment: z.object({
    ...baseContact,
    organization: z.string().min(1).max(200),
    position: z.string().max(120).optional(),
  }),
  clientflow: z.object({
    ...baseContact,
    organization: z.string().max(200).optional(),
    organizationType: z.string().max(120).optional(),
  }),
  general: z.object({ ...baseContact }),
};

export function getContactSchema(category: string): z.ZodTypeAny {
  return contactSchemas[category] ?? contactSchemas["general"]!;
}

export const formSchemas: Record<Exclude<FormName, "general-contact">, z.ZodTypeAny> = {
  "student-registration": studentRegistrationSchema,
  "education-partnership": educationPartnershipSchema,
  "hire-an-intern": hireAnInternSchema,
  "graduate-recruitment": graduateRecruitmentSchema,
  "clientflow-demo": clientflowDemoSchema,
};

/** Shape passed from client to server for every submission. */
export type SubmissionPayload = {
  formName: FormName;
  data: Record<string, unknown>;
  honeypot: string;
  idempotencyKey: string;
  source?: string;
  landingPage?: string;
  cv?: { name: string; size: number; type: string };
};
