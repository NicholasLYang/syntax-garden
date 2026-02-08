import { createFileRoute } from "@tanstack/react-router";
import ExpressionsVsStatements from "../pages/block_expressions.mdx";

export const Route = createFileRoute("/block-expressions")({
  component: ExpressionsVsStatements,
});
