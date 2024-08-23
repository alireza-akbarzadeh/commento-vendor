import { Button, Icon } from 'components';

export const CustomerQueryTracker = () => {
  return (
    <div className="col-span-4 md:col-span-2">
      <div className="flex items-center  justify-between">
        <div className="flex justify-between items-center gap-2">
          <div className="relative bg-textAndIcon-lighter size-2 rounded-full">
            <span className="bg-error-main size-1.5 absolute right-0 top-0 rounded-full" />
          </div>
          <h3 className="text-titleMedium text-textAndIcon-darker">
            آخرین پرسش مشتریان از شما
          </h3>
        </div>
        <Button variant="text">نمایش همه</Button>
      </div>
      <div className="mt-6 flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Icon name="Exclamation-Mark" className="text-error-main" />
            <p className="text-labelLarge text-textAndIcon-dark">
              لورم ایپسوم متن ساختگی با تولید{' '}
            </p>
          </div>
          <Button variant="text"> پاسخ</Button>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Icon name="Exclamation-Mark" className="text-error-main" />
            <p className="text-labelLarge text-textAndIcon-dark">
              لورم ایپسوم متن ساختگی با تولید{' '}
            </p>
          </div>
          <Button variant="text"> پاسخ</Button>
        </div>
      </div>
    </div>
  );
};
