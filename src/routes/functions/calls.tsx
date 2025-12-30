import { createFileRoute } from "@tanstack/react-router";
import FunctionCalls from "../../pages/function_calls.mdx";

export const Route = createFileRoute("/functions/calls")({
  component: FunctionCalls,
});
