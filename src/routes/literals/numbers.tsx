import { createFileRoute } from "@tanstack/react-router";
import NumberLiterals from "../../pages/number_literals.mdx";

export const Route = createFileRoute("/literals/numbers")({
  component: NumberLiterals,
});
