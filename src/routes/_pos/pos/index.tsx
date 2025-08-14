import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_pos/pos/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_pos/pos/"!</div>;
}
