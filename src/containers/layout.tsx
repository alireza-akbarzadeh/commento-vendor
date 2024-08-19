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
      <div className="font-vazirmatn-semibold antialiased px-6  mx-auto">
        <Header />
        <Navbar />
        <main className="">
          <ProtectedRoute isPublic isAuthorized />
        </main>
      </div>
    </Suspense>
  );
}
