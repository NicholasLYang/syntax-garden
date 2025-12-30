import { createFileRoute } from "@tanstack/react-router";
import Functions from "../../pages/functions.mdx";

export const Route = createFileRoute("/functions/")({
  component: Functions,
});
