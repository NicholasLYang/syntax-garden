import { createFileRoute } from "@tanstack/react-router";
import FunctionDeclarations from "../../pages/function_declarations.mdx";

export const Route = createFileRoute("/functions/declarations")({
  component: FunctionDeclarations,
});
