import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "components/ui/toast/toaster";
import { AuthProvider, ReactIntlProvider } from "providers";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import "styles/App.css";

export const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <ReactIntlProvider locale="fa">
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools position="top" />
            <Toaster />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ReactIntlProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
