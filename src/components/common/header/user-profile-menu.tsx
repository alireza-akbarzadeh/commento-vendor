import {
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ProfileImg,
} from 'components';

export function UserProfileMenu() {
  return (
    <div className="flex gap-2">
      <ProfileImg src="https://github.com/shadcn.png" />
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-2">
            <p className="text-labelMedium">دیجی لند</p>
            <Icon name="down-arrow-1" />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <ul className="divide-y space-y-2">
            <li className="flex items-center gap-2">
              <Icon name="account" />
              <p>علیرضا</p>
            </li>
            <li className="flex  items-center pt-1.5 gap-2">
              <Icon name="Logout" />
              <p>خروج</p>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}
