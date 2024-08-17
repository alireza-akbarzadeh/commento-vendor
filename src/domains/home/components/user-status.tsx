import { Avatar, AvatarFallback, AvatarImage, Badge, Button } from 'components';

export function UserStatus() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-8 mt-6 items-center">
      <div className="col-span-2 flex justify-between px-6">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>دیجی لند</p>
        </div>
        <Button className="rounded-xl">پروفایل</Button>
      </div>
      <div className="col-span-2 flex justify-between px-6">
        <p className="text-labellarge">آخرین زمان ورود</p>
        <p className="text-labellarge text-textAndIcon-light">۲۳ ساعت پیش</p>
      </div>
      <div className="col-span-2 flex justify-between px-6 items-center">
        <p className="text-labellarge">وضعیت اتصال سایت شما</p>
        <p className="text-labellarge text-textAndIcon-light">
          <Badge variant="success">Active</Badge>
        </p>
      </div>
      <div className="col-span-2 flex justify-between px-6">
        <p className="text-labellarge">ویترین فروشگاه</p>
        <Button className="rounded-xl">پروفایل</Button>
      </div>
    </div>
  );
}
