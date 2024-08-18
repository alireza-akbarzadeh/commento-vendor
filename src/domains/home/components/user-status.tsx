import { Avatar, AvatarFallback, AvatarImage, Badge, Button } from 'components';

export function UserStatus() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-8 items-center">
      <div className="col-span-2 flex justify-between px-6">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-titleMedium">دیجی لند</p>
        </div>
        <Button>پروفایل</Button>
      </div>
      <div className="col-span-2 flex justify-between px-6">
        <p className="text-titleMedium">آخرین زمان ورود</p>
        <p className="text-labelLarge text-textAndIcon-light">۲۳ ساعت پیش</p>
      </div>
      <div className="col-span-2 flex justify-between px-6 items-center">
        <p className="text-titleMedium">وضعیت اتصال سایت شما</p>
        <p className="text-labelXLargee text-textAndIcon-light">
          <Badge variant="success">Active</Badge>
        </p>
      </div>
      <div className="col-span-2 flex items-center justify-between px-6">
        <p className="text-titleLarge">ویترین فروشگاه</p>
        <Button>نمایش</Button>
      </div>
    </div>
  );
}
