import { createFileRoute } from "@tanstack/react-router";
import Comments from "./comments.mdx";

export const Route = createFileRoute("/comments")({
  component: Comments,
});
