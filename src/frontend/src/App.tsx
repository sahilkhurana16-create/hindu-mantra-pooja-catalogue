import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MantraDetailPage } from "./pages/MantraDetailPage";
import { MantrasPage } from "./pages/MantrasPage";
import { PoojaDetailPage } from "./pages/PoojaDetailPage";
import { PoojasPage } from "./pages/PoojasPage";
import { RosaryPage } from "./pages/RosaryPage";

// Root route with layout
const rootRoute = createRootRoute({
  component: () => <Layout />,
});

// Home
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

// Mantras list
const mantrasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mantras",
  component: MantrasPage,
});

// Mantra detail
const mantraDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mantras/$id",
  component: MantraDetailPage,
});

// Poojas list
const poojasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/poojas",
  component: PoojasPage,
});

// Pooja detail
const poojaDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/poojas/$id",
  component: PoojaDetailPage,
});

// Digital Rosary
const rosaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/rosary",
  component: RosaryPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  mantrasRoute,
  mantraDetailRoute,
  poojasRoute,
  poojaDetailRoute,
  rosaryRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
