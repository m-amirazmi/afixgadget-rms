import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_pos")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_pos"! <Outlet />
    </div>
  );
}
