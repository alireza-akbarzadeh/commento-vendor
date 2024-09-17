import { Icon } from "components";
import { Checkbox } from "components/ui/form";

export function StorSurvey() {
  return (
    <div className="col-span-12 rounded-XL bg-background-lightest p-6 md:col-span-6">
      <div className="flex items-center justify-between">
        <h4 className="text-border-darker text-titleMedium">نظر سنجی</h4>
        <div className="flex items-center justify-between gap-4">
          <div className="px-4 py-[11px]">
            <Icon name="right-arrow-2" />
          </div>
          <p>سوال ۵/۱</p>
          <div className="px-4 py-[11px]">
            <Icon name="left-arrow-2" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-textAndIcon-darker text-labelXLarge">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از ؟
        </p>
        <div className="mt-[22px] flex items-center gap-4">
          <Checkbox className="size-7 rounded-full border-border-darker" />
          <p className="text-textAndIcon-darker text-labelLarge">
            لورم ایپسوم متن ساختگی با تولید{" "}
          </p>
        </div>
        <div className="mt-[22px] flex items-center gap-4">
          <Checkbox className="size-7 rounded-full border-border-darker" />
          <p className="text-textAndIcon-darker text-labelLarge">
            لورم ایپسوم متن ساختگی با تولید{" "}
          </p>
        </div>
        <div className="mt-[22px] flex items-center gap-4">
          <Checkbox className="size-7 rounded-full border-border-darker" />
          <p className="text-textAndIcon-darker text-labelLarge">
            لورم ایپسوم متن ساختگی با تولید{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
