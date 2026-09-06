import { createFileRoute } from '@tanstack/react-router'
import StringLiterals from "../../pages/string_literals.mdx";

export const Route = createFileRoute('/literals/strings')({
  component: StringLiterals,
})
