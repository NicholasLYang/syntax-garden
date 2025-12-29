import "./index.css";
import { createFileRoute } from "@tanstack/react-router";
import Index from "./index.mdx";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col sm:max-w-lg">
      <Index />
    </div>
  );
}
