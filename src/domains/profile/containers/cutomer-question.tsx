import { useIntl } from 'react-intl';
import { profileMessages } from '../profile-details.messages';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Icon,
} from 'components';

export function CustomerQuestion() {
  const { formatMessage } = useIntl();
  return (
    <>
      <h3>{formatMessage(profileMessages.question)}</h3>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="border py-[27px] border-l-border-lighter rounded-M flex flex-col items-center justify-center">
            <Icon name="shield-question" size={40} />
            <div className="flex items-center gap-2">
              <div className="relative bg-textAndIcon-lighter size-[12px] rounded-full">
                <span className="bg-error-main size-[10px] absolute -right-1 -top-1 rounded-full" />
              </div>
              <p className="text-labelXLarge text-textAndIcon-darker">
                خوانده نشده
              </p>
              <span className="text-textAndIcon-light text-labelMedium">
                (۱۲)
              </span>
            </div>
          </div>
          <div className="border py-[27px] border-l-border-lighter rounded-M flex flex-col items-center justify-center">
            <Icon name="shield-question" size={40} />
            <div className="flex items-center gap-2">
              <div className="relative bg-textAndIcon-lighter size-[12px] rounded-full">
                <span className="bg-error-main size-[10px] absolute -right-1 -top-1 rounded-full" />
              </div>
              <p className="text-labelXLarge text-textAndIcon-darker">
                پاسخ داده نشده
              </p>
              <span className="text-textAndIcon-light text-labelMedium">
                (۱۲)
              </span>
            </div>
          </div>
          <div className="border py-[27px] border-l-border-lighter rounded-M flex flex-col items-center justify-center">
            <Icon name="shield-question" size={40} />
            <div className="flex items-center gap-2">
              <div className="relative bg-textAndIcon-lighter size-[12px] rounded-full" />
              <p className="text-labelXLarge text-textAndIcon-darker">
                پاسخ داده نشده
              </p>
              <span className="text-textAndIcon-light text-labelMedium">
                (۱۲)
              </span>
            </div>
          </div>
          <div className="border py-[27px] border-l-border-lighter rounded-M flex flex-col items-center justify-center">
            <Icon name="shield-question" size={40} />
            <div className="flex items-center gap-2">
              <div className="relative bg-textAndIcon-lighter size-[12px] rounded-full" />
              <p className="text-labelXLarge text-textAndIcon-darker">
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
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
