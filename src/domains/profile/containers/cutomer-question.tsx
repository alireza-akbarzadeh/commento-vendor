import { FormattedNumber, useIntl } from "react-intl";
import { profileMessages } from "../profile-details.messages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Icon,
  Image,
} from "components";
import { MacBook } from "assets";
import { NavLink } from "react-router-dom";
import { CURRENCY } from "constant";
import { ReplyCommnet } from "../components";

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
                <div className="grid grid-cols-4 items-center p-6">
                  <div className="col-span-1 flex flex-col gap-3">
                    <p className="text-textAndIcon-dark text-labelLarge">
                      {formatMessage(profileMessages.dateAndTimeQuestion)}
                    </p>
                    <p className="text-textAndIcon-dark text-labelLarge">
                      ۱۴۰۳/۰۹/۱۲-۱۸:۳۰
                    </p>
                  </div>
                  <div className="col-span-2 flex items-center gap-6">
                    <div className="rounded-S border border-border-lighter px-4 py-3">
                      <Image
                        src={MacBook}
                        className="h-[90px] w-[98px]"
                        alt="macbook"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <NavLink
                        to="/"
                        className="text-info-main text-titleSmall"
                      >
                        لپ تاپ 13.3 اینچی اپل مدل Macbook Pro MNEQ3 2022 LLA
                      </NavLink>
                      <div className="flex items-center gap-1">
                        <Icon name="store" />
                        <p className="text-textAndIcon-dark text-labelLarge">
                          ۴ فروشنده دیگر
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <Badge className="flex justify-between rounded-XS text-labelLarge">
                      <span>کمترین قیمت شما</span>
                      <div className="flex items-center gap-1">
                        <FormattedNumber value={2300000} currency="IRR" />
                        <span className="text-textAndIcon-light">
                          {CURRENCY.IR}
                        </span>
                      </div>
                    </Badge>
                    <Badge
                      variant="error"
                      className="flex justify-between rounded-XS"
                    >
                      <span>کمترین قیمت شما</span>
                      <div className="flex items-center gap-1">
                        <Icon name="up-arrow" />
                        <FormattedNumber value={2300000} currency="IRR" />
                        <span className="flex">{CURRENCY.IR}</span>
                      </div>
                    </Badge>
                  </div>
                </div>
                <div className="rounded-M border border-border-lightest p-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-textAndIcon-darker text-titleSmall">
                      پاسخ شما
                    </h3>
                    <Badge variant="success" className="rounded-XS">
                      پذیرفته شده
                    </Badge>
                    <Icon name="Trash" />
                  </div>
                  <p className="mt-4 text-textAndIcon-dark text-bodyMedium">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپلورم ایپسوم متن ساختگی با تولید{" "}
                  </p>
                </div>
                <h3 className="my-4 text-textAndIcon-darker text-titleSmall">
                  پاسخ شما
                </h3>
                <div className="space-y-5 divide-y divide-textAndIcon-lighter rounded-M border border-border-lightest p-4">
                  <ReplyCommnet />
                  <ReplyCommnet />
                  <ReplyCommnet />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
