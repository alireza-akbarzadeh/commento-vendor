import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icon,
  ProfileImg,
} from "components";
import { ROUTE_NAME } from "constant";
import { useNavigate } from "react-router-dom";

export function UserProfileMenu() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2">
      <ProfileImg src="https://github.com/shadcn.png" />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            <p className="text-labelMedium">دیجی لند</p>
            <Icon name="down-arrow-1" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[150px]">
          <DropdownMenuItem
            onClick={() => navigate(ROUTE_NAME.UserProfile)}
            className="flex cursor-pointer items-center gap-2"
          >
            <Icon name="account" />
            <p>علیرضا</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2 pt-1.5">
            <Icon name="Logout" />
            <p>خروج</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
