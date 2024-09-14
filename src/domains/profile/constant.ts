import { IconProps } from "components";

export const ProfileMenuList = [
  {
    name: "storeInformation",
    icon: "account" as IconProps["name"],
    link: "store-information",
  },
  {
    name: "backAccount",
    icon: "box-arrow" as IconProps["name"],
    link: "bank-account",
  },
  {
    name: "customerQuestion",
    icon: "box-arrow" as IconProps["name"],
    link: "customer-question",
  },
  {
    name: "notification",
    icon: "box-arrow" as IconProps["name"],
    link: "notification",
  },
  {
    name: "contract",
    icon: "box-arrow" as IconProps["name"],
    link: "contract",
  },
  {
    name: "documentAndPapers",
    icon: "box-arrow" as IconProps["name"],
    link: "document-and-paper",
  },
  {
    name: "storeSetting",
    icon: "box-arrow" as IconProps["name"],
    link: "store-setting",
  },
  {
    name: "customerIssueReport",
    icon: "box-arrow" as IconProps["name"],
    link: "vendor-issue-report",
  },
  {
    name: "usersAuthority",
    icon: "box-arrow" as IconProps["name"],
    link: "user-authority",
  },
  {
    name: "support",
    icon: "box-arrow" as IconProps["name"],
    link: "support",
  },
  {
    name: "scoreAndVendorLevel",
    icon: "box-arrow" as IconProps["name"],
    link: "score-Vendor-level",
  },
] as const;
