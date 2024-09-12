import { ReactNode } from 'react';
import { ProfileSidebar, StoreInformation } from './components';
import { ProfileMenuList } from './constant';
import { useSearchParams } from 'react-router-dom';

export function ProfileDomains() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '';

  // Extract the 'link' type as a union of all possible 'link' values
  type ProfileMenuLink = (typeof ProfileMenuList)[number]['link'];

  const profilePages: Record<ProfileMenuLink, ReactNode> = {
    'store-information': <StoreInformation />,
    'bank-account': <p>Bank Account</p>,
    'customer-question': <p>Customer Question</p>,
    'store-setting': <p>store setting</p>,
    'vendor-issue-report': <p>vendor-issue-report</p>,
    'document-and-paper': <p>document and paper</p>,
    'user-authority': <p>user-authority</p>,
    'score-Vendor-level': <p>score-Vendor-level</p>,
    contract: <p>contract</p>,
    support: <p>support</p>,
    notification: <p>notification</p>,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-background-lightest p-6 mt-6">
      <ProfileSidebar />
      {profilePages[currentPage as ProfileMenuLink] || <p>not exist</p>}
    </div>
  );
}
