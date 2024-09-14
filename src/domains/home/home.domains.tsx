import { Banner } from "./banner";
import { UserStatus } from "./components";
import { Report } from "./report";
import { StoreInsight } from "./store-insight";
import { StoreQueryTracker } from "./store-query-tracker";
import { TopProducts } from "./top-products";

export function HomeDomains() {
  return (
    <div className="mt-6 flex w-full flex-col gap-6">
      <UserStatus />
      <Report />
      <StoreInsight />
      <TopProducts />
      <StoreQueryTracker />
      <Banner />
    </div>
  );
}
