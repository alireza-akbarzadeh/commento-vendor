import { useIntl } from "react-intl";
import { homeMessages } from "domains/home/home.messages";
import { Icon } from "components";
import { StoreChart } from "./store-chart";

export function StorPerformance() {
  const { formatMessage } = useIntl();
  return (
    <div className="col-span-12 rounded-XL bg-background-lightest p-6 md:col-span-3">
      <div className="flex justify-between">
        <h4 className="text-textAndIcon-darker text-titleMedium">
          {formatMessage(homeMessages.storePerformance)}
        </h4>
        <div className="flex items-center gap-1">
          <span className="text-primary-main text-labelMedium">
            {formatMessage(homeMessages.score)}
          </span>
          <span className="text-primary-main text-labelMedium">۲۳۴</span>
          <Icon name="Favorite" />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="text-textAndIcon-dark text-labelMedium">عضویت</span>
          <span className="text-textAndIcon-dark text-labelMedium">
            ۲۳ ساعت
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-textAndIcon-light">رتبه شما</span>
          <div className="flex items-center gap-2">
            <span className="text-textAndIcon-darker text-labelLarge">۲۳</span>
            <span className="text-textAndIcon-light text-labelSmall">
              از ۱۴۵ نفر
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 items-center">
        <div className="fle col-span-1 mt-4 flex-col">
          <div className="flex gap-2">
            <span className="text-textAndIcon-light text-labelXLarge">
              {formatMessage(homeMessages.level)}
            </span>
            <span className="text-success-main">++A</span>
          </div>
          <p className="mt-4 text-textAndIcon-dark text-labelMedium">
            ۳۰٪ تا سطح ‌B
          </p>
        </div>
        <StoreChart />
      </div>
    </div>
  );
}
