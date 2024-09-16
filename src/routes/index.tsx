/* eslint-disable react-refresh/only-export-components */
import { DashboardLayout, ErrorBoundary, RootLayout } from "containers";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomeView = lazy(() => import("views/home.view"));
const ReportsView = lazy(() => import("views/reports.view"));
const ProfileView = lazy(() => import("views/profile.view"));
const ProductDetailsPage = lazy(
  () => import("views/product-details-page.view"),
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    loader: () => [{ id: "213", name: "title" }],
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "reports",
        element: <ReportsView />,
      },
      {
        path: "profile",
        element: <ProfileView />,
      },
      {
        path: "product-details-page",
        element: <ProductDetailsPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        path: "patterns",
        element: <div>dashboard</div>,
      },
    ],
  },
]);
