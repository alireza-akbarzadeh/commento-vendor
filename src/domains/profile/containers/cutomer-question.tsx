import { useIntl } from "react-intl";
import { profileMessages } from "../profile-details.messages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Icon,
  Image,
} from "components";
import { MacBook } from "assets";

export function CustomerQuestion() {
  const { formatMessage } = useIntl();
  return (
    <>
      <h3>{formatMessage(profileMessages.question)}</h3>
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-M border border-l-border-lighter py-[27px]">
            <Icon name="shield-question" size={40} />
            <div className="flex items-center gap-2">
              <div className="relative size-[12px] rounded-full bg-textAndIcon-lighter">
                <span className="absolute -right-1 -top-1 size-[10px] rounded-full bg-error-main" />
              </div>
              <p className="text-textAndIcon-darker text-labelXLarge">
                خوانده نشده
              </p>
              <span className="text-textAndIcon-light text-labelMedium">
                (۱۲)
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-M border border-l-border-lighter py-[27px]">
            <Icon name="shield-question" size={40} />
            <div className="flex items-center gap-2">
              <div className="relative size-[12px] rounded-full bg-textAndIcon-lighter">
                <span className="absolute -right-1 -top-1 size-[10px] rounded-full bg-error-main" />
              </div>
              <p className="text-textAndIcon-darker text-labelXLarge">
                پاسخ داده نشده
              </p>
              <span className="text-textAndIcon-light text-labelMedium">
                (۱۲)
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-M border border-l-border-lighter py-[27px]">
            <Icon name="shield-question" size={40} />
            <div className="flex items-center gap-2">
              <div className="relative size-[12px] rounded-full bg-textAndIcon-lighter" />
              <p className="text-textAndIcon-darker text-labelXLarge">
                پاسخ داده نشده
              </p>
              <span className="text-textAndIcon-light text-labelMedium">
                (۱۲)
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-M border border-l-border-lighter py-[27px]">
            <Icon name="shield-question" size={40} />
            <div className="flex items-center gap-2">
              <div className="relative size-[12px] rounded-full bg-textAndIcon-lighter" />
              <p className="text-textAndIcon-darker text-labelXLarge">
                کل پرسش ها
              </p>
              <span className="text-textAndIcon-light text-labelMedium">
                (۱۲)
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-2">
                  <Icon name="shield-question" />
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-4">
                  <div className="flex flex-col gap-3">
                    <p className="text-textAndIcon-dark text-labelLarge">
                      {formatMessage(profileMessages.dateAndTimeQuestion)}
                    </p>
                    <p className="text-textAndIcon-dark text-labelLarge">
                      ۱۴۰۳/۰۹/۱۲-۱۸:۳۰
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="px-4 py-3">
                      <Image src={MacBook} alt="macbook" />
                    </div>
                    <div className="flex flex-col gap-3"></div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
