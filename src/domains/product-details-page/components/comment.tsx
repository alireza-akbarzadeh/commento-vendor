import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components';
import { CommentItem } from './comment-item';

export function Comment() {
  return (
    <section className="grid grid-cols-2 gap-6">
      <div className="bg-background-lightest rounded-L p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-titleMedium text-textAndIcon-darker">
            دیدگاه و امتیاز کاربران (۲۳)
          </h3>
          <div className="flex gap-2 items-center">
            <p className="text-labelLarge text-textAndIcon-dark">
              مرتب سازی بر اساس
            </p>
            <Select>
              <SelectTrigger className="h-[48px] w-[174px] rounded-S">
                <SelectValue placeholder="جدیدترین" />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  <SelectItem value="all">جدیدترین</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border border-border-lightest rounded-M p-4"
          >
            <CommentItem
              title="دیدگاه و امتیاز کاربران (۲۳)"
              userName="رضا میرزایی"
              date="۱۴۰۲/۰۳/۰۲"
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،"
              isRated
              likeCount={23}
              dislikeCount={12}
              howsRated="خریدار"
            />
          </div>
        ))}
      </div>
      <div className="bg-background-lightest rounded-L p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-titleMedium text-textAndIcon-darker">
            پرسش و پاسخ (۲۳)
          </h3>
          <div className="flex gap-2 items-center">
            <p className="text-labelLarge text-textAndIcon-dark">
              مرتب سازی بر اساس
            </p>
            <Select>
              <SelectTrigger className="h-[48px] w-[174px] rounded-S">
                <SelectValue placeholder="جدیدترین" />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  <SelectItem value="all">جدیدترین</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="border border-border-lightest rounded-M p-4"
          >
            <CommentItem
              title="دیدگاه و امتیاز کاربران (۲۳)"
              userName="رضا میرزایی"
              date="۱۴۰۲/۰۳/۰۲"
              description="حرف نداره دوست عزیز!"
              likeCount={23}
              isRated={index > 0}
              dislikeCount={12}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
