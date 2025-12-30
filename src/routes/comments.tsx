import { createFileRoute } from "@tanstack/react-router";
import Comments from "../pages/comments.mdx";

export const Route = createFileRoute("/comments")({
  component: Comments,
});
