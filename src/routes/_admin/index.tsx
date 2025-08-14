import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { signOut } = useAuthActions();

  return (
    <div>
      Hello "/_admin/"! this is root <Button onClick={signOut}>SignOut</Button>
    </div>
  );
}
