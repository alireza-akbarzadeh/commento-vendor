import { Icon, Logo } from 'components';
import { Greeting } from './greeting';
import { UserProfileMenu } from './user-profile-menu';
import { WalletBalance } from './wallet-balance';

export function Header() {
  return (
    <header className="py-3 px-6 ">
      <div className="flex items-center justify-between">
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
