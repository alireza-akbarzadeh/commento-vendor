/* eslint-disable react-refresh/only-export-components */
import { DashboardLayout, ErrorBoundray, RootLayout } from 'containers';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomeView = lazy(() => import('views/home.view'));
const ReportsView = lazy(() => import('views/reports.view'));
const ProductDetailsPage = lazy(
  () => import('views/product-details-page.view')
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundray />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: 'reports',
        element: <ReportsView />,
      },
      {
        path: 'product-details-page',
        element: <ProductDetailsPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorBoundray />,
    children: [
      {
        index: true,
        path: 'patterns',
        element: <div>dashboard</div>,
      },
    ],
  },
]);
