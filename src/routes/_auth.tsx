import { createFileRoute, Outlet, useRouter } from "@tanstack/react-router";
import { useConvexAuth } from "convex/react";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated } = useConvexAuth();
  const router = useRouter();

  if (isAuthenticated) {
    router.navigate({ to: "/" });
    return null;
  }
  return <Outlet />;
}
