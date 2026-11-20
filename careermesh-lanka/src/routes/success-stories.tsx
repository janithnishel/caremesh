import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/success-stories")({
  component: SuccessStoriesLayout,
});

function SuccessStoriesLayout() {
  return <Outlet />;
}
