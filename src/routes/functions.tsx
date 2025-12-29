import { createFileRoute } from "@tanstack/react-router";
import Functions from "./functions.mdx";

export const Route = createFileRoute("/functions")({
  component: Functions,
});
