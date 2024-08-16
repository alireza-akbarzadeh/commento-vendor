import { Suspense } from 'react';
import { Loading } from './loading';
import { ProtectedRoute } from './ProtectedRoute';

export function RootLayout() {
  return (
    <Suspense
      fallback={
        // TODO: checks whats going on here why i need parent element
        <Loading />
      }
    >
      <main className="max-w-screen-desktop mx-auto  min-h-screen b">
        <ProtectedRoute isPublic isAuthorized />
      </main>
    </Suspense>
  );
}
