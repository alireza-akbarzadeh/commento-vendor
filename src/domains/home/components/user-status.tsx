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
          <p className="text-titleMedium">دیجی لند</p>
        </div>
        <Button className="rounded-xl">پروفایل</Button>
      </div>
      <div className="col-span-2 flex justify-between px-6">
        <p className="text-labelLarge">آخرین زمان ورود</p>
        <p className="text-labelLarge text-textAndIcon-light">۲۳ ساعت پیش</p>
      </div>
      <div className="col-span-2 flex justify-between px-6 items-center">
        <p className="text-labelLarge">وضعیت اتصال سایت شما</p>
        <p className="text-labelLarge text-textAndIcon-light">
          <Badge variant="success">Active</Badge>
        </p>
      </div>
      <div className="col-span-2 flex justify-between px-6">
        <p className="text-labelLarge">ویترین فروشگاه</p>
        <Button className="rounded-xl">پروفایل</Button>
      </div>
    </div>
  );
}
