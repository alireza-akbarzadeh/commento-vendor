import { StoreInformation, StoreSidebar } from './components';

export function ProfileDomains() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-background-lightest p-6 mt-6">
      <StoreSidebar />
      <StoreInformation />
    </div>
  );
}
