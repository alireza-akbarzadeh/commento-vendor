import { Icon, Logo } from "components";
import { Greeting } from "./greeting";
import { UserProfileMenu } from "./user-profile-menu";
import { WalletBalance } from "./wallet-balance";

export function Header() {
  return (
    <header className="px-6 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-3 md:gap-y-0">
        <Logo />
        <Greeting />
        <div className="flex items-center gap-x-4">
          <WalletBalance />
          <div>
            <Icon name="Bell" />
          </div>
          <UserProfileMenu />
        </div>
      </div>
    </header>
  );
}
