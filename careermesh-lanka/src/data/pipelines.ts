/**
 * ClientFlow pipelines — maps each form to its CRM pipeline.
 * Used by the CRM adapter (Phase 7).
 */
export const pipelines = {
  studentApplications: { id: 1, name: "Student Applications" },
  educationPartnerships: { id: 2, name: "Education Partnerships" },
  employerPartnerships: { id: 3, name: "Employer Partnerships" },
  graduateRecruitment: { id: 4, name: "Graduate Recruitment" },
  clientflowSales: { id: 5, name: "ClientFlow CRM Sales" },
} as const;

export type PipelineKey = keyof typeof pipelines;
export type PipelineId = (typeof pipelines)[PipelineKey]["id"];

/** Map form names to pipelines. */
export const formPipelineMap: Record<string, PipelineKey> = {
  "student-registration": "studentApplications",
  "education-partnership": "educationPartnerships",
  "hire-an-intern": "employerPartnerships",
  "employer-inquiry": "employerPartnerships",
  "graduate-recruitment": "graduateRecruitment",
  "clientflow-demo": "clientflowSales",
  "general-contact": "clientflowSales",
};
