import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/graduate-recruiters")({
  component: GraduateRecruitersLayout,
});

function GraduateRecruitersLayout() {
  return <Outlet />;
}
