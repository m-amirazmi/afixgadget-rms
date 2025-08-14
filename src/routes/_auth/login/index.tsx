import { LoginForm } from "@/components/login-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="h-screen flex flex-col justify-center  px-4 items-center md:px-8 bg-neutral-200">
      <LoginForm />
    </main>
  );
}
