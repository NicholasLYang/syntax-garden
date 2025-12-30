import { createFileRoute } from "@tanstack/react-router";
import Literals from "../../pages/literals.mdx";

export const Route = createFileRoute("/literals/")({
  component: Literals,
});
