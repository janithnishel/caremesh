import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/students/internship-programs")({
  component: InternshipProgramsLayout,
});

function InternshipProgramsLayout() {
  return <Outlet />;
}
