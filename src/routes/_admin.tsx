import { createFileRoute, Outlet, useRouter } from "@tanstack/react-router";
import { useConvexAuth } from "convex/react";

export const Route = createFileRoute("/_admin")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  if (!isAuthenticated && !isLoading) {
    router.navigate({ to: "/login" });
    return null;
  }

  return (
    <div>
      Hello "/_admin"! <Outlet />
    </div>
  );
}
