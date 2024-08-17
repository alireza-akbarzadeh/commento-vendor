import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Icon,
  Logo,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'components';
import { Greeting } from './greeting';

export function Header() {
  return (
    <header className="py-3 px-6">
      <div className="flex items-center justify-between">
        <Logo />
        <Greeting />
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-2">
            <p className="text-labellarge">موجودی ۲۰,۰۰۰ تومان</p>
            <Icon name="Wallet" />
          </div>
          <div>
            <Icon name="Bell" />
          </div>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Popover>
              <PopoverTrigger>
                <div className="flex items-center gap-2">
                  <p className="text-labelMedium">دیجی لند</p>
                  <Icon name="ChevronDown" width={10} height={10} />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <ul className="divide-y space-y-1">
                  <li className="flex justify-end items-center gap-2">
                    <p>علیرضا</p>
                    <Icon name="User" />
                  </li>
                  <li className="flex justify-end items-center gap-2">
                    <p>خروج</p>
                    <Icon name="LogOut" size={5} />
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}
