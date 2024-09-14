import { ReactNode } from "react";
import { ProfileSidebar } from "./containers";
import {
  UserAuthority,
  VendorScore,
  StoreSttings,
  StoreInformation,
  Notification,
  Document,
  ReportIssue,
  BankAccount,
  CustomerQuestion,
  Contract,
  Support,
} from "./containers";
import { ProfileMenuList } from "./constant";
import { useSearchParams } from "react-router-dom";

export function ProfileDomains() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || "";

  // Extract the 'link' type as a union of all possible 'link' values
  type ProfileMenuLink = (typeof ProfileMenuList)[number]["link"];

  const profilePages: Record<ProfileMenuLink, ReactNode> = {
    "store-information": <StoreInformation />,
    "bank-account": <BankAccount />,
    "customer-question": <CustomerQuestion />,
    "store-setting": <StoreSttings />,
    "vendor-issue-report": <ReportIssue />,
    "document-and-paper": <Document />,
    "user-authority": <UserAuthority />,
    "score-Vendor-level": <VendorScore />,
    contract: <Contract />,
    support: <Support />,
    notification: <Notification />,
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 bg-background-lightest p-6 md:grid-cols-12">
      <ProfileSidebar />
      <div className="col-span-12 md:col-span-9">
        {profilePages[currentPage as ProfileMenuLink] || <p>not exist</p>}
      </div>
    </div>
  );
}
