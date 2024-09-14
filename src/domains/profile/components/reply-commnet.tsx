import { Icon } from "components";

export function ReplyCommnet() {
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Icon name="store" />
          <p className="text-textAndIcon-darker text-titleMedium">
            موبایل مایکت
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Like" className="text-success-main" />
            <span className="text-textAndIcon-dark text-bodyMedium">23</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Dislike" className="text-error-main" />
            <span className="text-textAndIcon-dark text-bodyMedium">12</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-textAndIcon-dark text-bodyMedium">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن
        ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید
        سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        از صنعت چاپلورم ایپسوم متن ساختگی با تولید{" "}
      </p>
    </div>
  );
}
