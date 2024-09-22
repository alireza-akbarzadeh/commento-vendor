import { Button } from "components";

export function TabsVisualizer() {
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
          <span className="m-1.5 mr-1.5 block size-1.5 rounded-full bg-primary-main" />
          تعداد کلیک
        </Button>
        <Button
          variant="text"
          className="text-textAndIcon-light text-labelLarge"
        >
          <span className="m-1.5 mr-1.5 block size-1.5 rounded-full bg-info-light" />
          تعداد کلیک
        </Button>
      </div>
      <div className="flex gap-2">
        <p className="pr-4 text-textAndIcon-darker text-labelXLarge lg:pr-0">
          تعداد کل کلیک ۱۲۳۴۶۷۳۲۵۱۶۷{" "}
        </p>
        <p className="pr-4 text-textAndIcon-darker text-labelXLarge lg:pr-0">
          تعداد کل بازدید ۱۲۳۴۶۷۳۲۵۱۶۷{" "}
        </p>
      </div>
    </div>
  );
}
