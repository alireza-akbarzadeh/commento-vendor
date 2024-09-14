import { Suspense } from "react";
import { Loading } from "./loading";
import { ProtectedRoute } from "./ProtectedRoute";
import { Header, Navbar } from "components";

export function RootLayout() {
  return (
    <Suspense
      fallback={
        // TODO: checks whats going on here why i need parent element
        <Loading />
      }
    >
      <div className="bg-background-lighter px-[72px] py-10 font-vazirmatn-semibold antialiased">
        <div className="rounded-S border border-border-lightest bg-background-lightest">
          <Header />
          <Navbar />
        </div>
        <main>
          <ProtectedRoute isPublic isAuthorized />
        </main>
      </div>
    </Suspense>
  );
}
