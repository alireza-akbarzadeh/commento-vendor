import { Suspense } from 'react';
import { Loading } from './loading';
import { ProtectedRoute } from './ProtectedRoute';
import { Header, Navbar } from 'components';

export function RootLayout() {
  return (
    <Suspense
      fallback={
        // TODO: checks whats going on here why i need parent element
        <Loading />
      }
    >
      <div className="font-vazirmatn-semibold antialiased pt-10 px-[72px] bg-background-lighter">
        <div className="bg-background-lightest border border-border-lightest rounded-xl">
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
