import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useLocation,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  return (
    <React.Fragment>
      {location.pathname !== "/" && <Link to="..">Home</Link>}
      <div className="sm:max-w-2xl max-w-xs">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
