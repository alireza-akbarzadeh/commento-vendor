import { useIntl } from 'react-intl';
import { homeMessages } from 'domains/home/home.messages';
import { Icon } from 'components';
import { StoreChart } from './store-chart';

export function StorPerformance() {
  const { formatMessage } = useIntl();
  return (
    <div className="col-span-12 md:col-span-2 p-6">
      <div className="flex justify-between">
        <h4 className="text-textAndIcon-darker text-titleMedium">
          {formatMessage(homeMessages.storePerformance)}
        </h4>
        <div className="gap-1 flex items-center">
          <span className="text-labelMedium text-primary-main">
            {formatMessage(homeMessages.score)}
          </span>
          <span className="text-labelMedium text-primary-main">۲۳۴</span>
          <Icon name="Favorite" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-2">
          <span className="text-textAndIcon-dark text-labelMedium">عضویت</span>
          <span className="text-textAndIcon-dark text-labelMedium">
            ۲۳ ساعت
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-textAndIcon-light">رتبه شما</span>
          <div className="flex gap-2 items-center">
            <span className="text-labelLarge text-textAndIcon-darker">۲۳</span>
            <span className="text-textAndIcon-light text-labelSmall">
              از ۱۴۵ نفر
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center mt-6">
        <div className="fle flex-col mt-4 col-span-1">
          <div className="flex gap-2">
            <span className="text-textAndIcon-light text-labelXLarge">
              {formatMessage(homeMessages.level)}
            </span>
            <span className="text-success-main">A++</span>
          </div>
          <p className="text-labelMedium text-textAndIcon-dark mt-4">
            ۳۰٪ تا سطح ‌B
          </p>
        </div>
        <StoreChart />
      </div>
    </div>
  );
}
