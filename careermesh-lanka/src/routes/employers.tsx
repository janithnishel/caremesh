import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/employers")({
  component: EmployersLayout,
});

function EmployersLayout() {
  return <Outlet />;
}
