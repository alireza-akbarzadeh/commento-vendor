import { Button, Icon } from "components";

export const CustomerQueryTracker = () => {
  return (
    <div className="col-span-4 rounded-XL bg-background-lightest p-6 md:col-span-2">
      <div className="flex items-center justify-between rounded-XS bg-background-lighter p-2">
        <div className="flex items-center justify-between gap-2">
          <div className="relative size-2 rounded-full bg-textAndIcon-lighter">
            <span className="absolute right-0 top-0 size-1.5 rounded-full bg-error-main" />
          </div>
          <h3 className="text-textAndIcon-darker text-titleMedium">
            آخرین پرسش مشتریان از شما
          </h3>
        </div>
        <Button variant="text">نمایش همه</Button>
      </div>
      <div className="mt-6 flex flex-col gap-[20px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Icon name="shield-question" className="text-primary-main" />
            <p className="text-textAndIcon-dark text-labelLarge">
              لورم ایپسوم متن ساختگی با تولید{" "}
            </p>
          </div>
          <Button variant="text"> پاسخ</Button>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-[20px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Icon name="Exclamation-Mark" className="text-error-main" />
            <p className="text-textAndIcon-dark text-labelLarge">
              لورم ایپسوم متن ساختگی با تولید{" "}
            </p>
          </div>
          <Button variant="text"> پاسخ</Button>
        </div>
      </div>
    </div>
  );
};
