import { Icon } from 'components';

export function WalletBalance() {
  return (
    <div className="flex items-center gap-2">
      <p className="text-labelLarge">موجودی ۲۰,۰۰۰ تومان</p>
      <Icon name="wallet" />
    </div>
  );
}
