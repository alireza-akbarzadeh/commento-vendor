import { Avatar, AvatarFallback, AvatarImage, Badge, Button } from 'components';

export function UserStatus() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-8 gap-6  gap-y-5 lg:gap-y-0">
      <div className="col-span-2 flex justify-between  bg-background-lightest p-6 rounded-XL ">
        <div className="flex items-center gap-2 ">
          <Avatar className="size-11">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-titleMedium">دیجی لند</p>
        </div>
        <Button>پروفایل</Button>
      </div>
      <div className="col-span-2 flex justify-between  bg-background-lightest p-6 rounded-XL items-center">
        <p className="text-titleMedium">آخرین زمان ورود</p>
        <p className="text-labelLarge text-textAndIcon-light">۲۳ ساعت پیش</p>
      </div>
      <div className="col-span-2 flex justify-between  bg-background-lightest p-6 rounded-XL items-center">
        <p className="text-titleMedium">وضعیت اتصال سایت شما</p>
        <p className="text-labelXLargee text-textAndIcon-light">
          <Badge variant="success">Active</Badge>
        </p>
      </div>
      <div className="col-span-2 flex items-center justify-between  bg-background-lightest p-6 rounded-XL">
        <p className="text-titleLarge">ویترین فروشگاه</p>
        <Button>نمایش</Button>
      </div>
    </div>
  );
}
