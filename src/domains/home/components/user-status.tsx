import { Badge, Button, ProfileImg } from "components";

export function UserStatus() {
  return (
    <div className="grid grid-cols-2 gap-6 gap-y-5 md:grid-cols-8 lg:gap-y-0">
      <div className="col-span-2 flex justify-between rounded-XL bg-background-lightest p-6">
        <div className="flex items-center gap-2">
          <ProfileImg size="medium" src="https://github.com/shadcn.png" />
          <p className="text-titleMedium">دیجی لند</p>
        </div>
        <Button>پروفایل</Button>
      </div>
      <div className="col-span-2 flex items-center justify-between rounded-XL bg-background-lightest p-6">
        <p className="text-titleMedium">آخرین زمان ورود</p>
        <p className="text-textAndIcon-light text-labelLarge">۲۳ ساعت پیش</p>
      </div>
      <div className="col-span-2 flex items-center justify-between rounded-XL bg-background-lightest p-6">
        <p className="text-titleMedium">وضعیت اتصال سایت شما</p>
        <p className="text-labelXLargee text-textAndIcon-light">
          <Badge variant="success">Active</Badge>
        </p>
      </div>
      <div className="col-span-2 flex items-center justify-between rounded-XL bg-background-lightest p-6">
        <p className="text-titleLarge">ویترین فروشگاه</p>
        <Button>نمایش</Button>
      </div>
    </div>
  );
}
