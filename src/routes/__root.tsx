import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useLocation,
} from "@tanstack/react-router";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "../components/CodeBlock";

const mdxComponents = { pre: CodeBlock };

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname !== "/" && <Link to="..">Back</Link>}
      <div className="sm:max-w-2xl max-w-xs">
        <MDXProvider components={mdxComponents}>
          <Outlet />
        </MDXProvider>
      </div>
    </React.Fragment>
  );
}
