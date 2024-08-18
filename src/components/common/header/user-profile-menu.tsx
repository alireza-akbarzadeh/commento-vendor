import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'components';

export function UserProfileMenu() {
  return (
    <div className="flex gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-2">
            <p className="text-labelMedium">دیجی لند</p>
            <Icon name="ChevronDown" />
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
              <Icon name="LogOut" sizes="xxSmall" />
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}
