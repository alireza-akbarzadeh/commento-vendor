import { Button } from "components";

export function SortingChart() {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap items-center gap-x-3">
        <Button
          variant="text"
          className="text-textAndIcon-light text-labelLarge"
        >
          روزانه
        </Button>
        <Button
          variant="text"
          className="text-textAndIcon-light text-labelLarge"
        >
          هفتگی
        </Button>
        <Button
          variant="text"
          className="text-textAndIcon-light text-labelLarge"
        >
          ماهانه
        </Button>
        <Button
          variant="text"
          className="text-textAndIcon-light text-labelLarge"
        >
          ۳ ماهه
        </Button>
        <Button
          variant="text"
          className="text-textAndIcon-light text-labelLarge"
        >
          ۶ ماهه
        </Button>
        <div className="ml-4 hidden h-4 w-[3px] bg-border-light lg:block" />
        <Button
          variant="text"
          className="text-textAndIcon-light text-labelLarge"
        >
          تعداد کلیک
          <span className="m-1.5 mr-1.5 block size-2 rounded-full bg-primary-main" />
        </Button>
        <Button
          variant="text"
          className="text-textAndIcon-light text-labelLarge"
        >
          تعداد کلیک
          <span className="m-1.5 mr-1.5 block size-2 rounded-full bg-gray-300" />
        </Button>
        <Button
          variant="text"
          className="text-textAndIcon-light text-labelLarge"
        >
          تغییر قیمت شما
          <span className="m-1.5 mr-1.5 block size-2 rounded-full bg-red-200" />
        </Button>
      </div>
      <p className="pr-4 text-textAndIcon-darker text-labelXLarge lg:pr-0">
        تعداد کل کلیک ۱۲۳۴۶۷۳۲۵۱۶۷{" "}
      </p>
    </div>
  );
}
