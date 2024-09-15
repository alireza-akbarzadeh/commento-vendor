import {
  Pagination,
  PaginationContent,
  PaginationEnd,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationStart,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components";
import { useIntl } from "react-intl";
import { NotificationItem } from "../components";
import { profileMessages } from "../profile-details.messages";

export function Notification() {
  const { formatMessage } = useIntl();
  return (
    <div>
      <h3 className="text-textAndIcon-darker text-titleLarge">
        {formatMessage(profileMessages.notifications)}
      </h3>
      <div className="mt-8">
        <Select>
          <SelectTrigger className="h-[48px] max-w-[320px] !rounded-S">
            <SelectValue placeholder="نوع نوتیف" />
          </SelectTrigger>
          <SelectContent dir="rtl">
            <SelectGroup>
              <SelectItem value="alarm">آلارم‌ها</SelectItem>
              <SelectItem value="notification">اعلان ها</SelectItem>
              <SelectItem value="admin">پیام ‌های ادمین</SelectItem>
              <SelectItem value="commercial">تبلیغات</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4 space-y-5 divide-y divide-textAndIcon-lighter rounded-M border border-border-lightest p-4">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
      <Pagination className="mt-6 flex justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationStart href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationEnd />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
