import { Button } from 'components';
import { homeMessages } from 'domains/home/home.messages';
import { FormattedNumber, useIntl } from 'react-intl';

export function StoreBalance() {
  const { formatMessage } = useIntl();
  return (
    <div className="col-span-12 md:col-span-2 space-y-[42px] p-6">
      <div className="bg-info-main rounded-2xl h-[160px] px-4 pt-[19px] space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-textAndIcon-lightest text-titleMedium">
            {formatMessage(homeMessages.wallet)}
          </p>
          <p className="text-textAndIcon-lightest text-titleMedium">
            <FormattedNumber value={2396363} currency="IRR" />
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-textAndIcon-lightest text-titleMedium">
            {formatMessage(homeMessages.activePackage)}
          </p>
          <div className="bg-info-lighter rounded-[8px] px-4 h-[30px] py-1.5 flex items-center justify-center">
            <span className="text-info-main text-labelMedium">
              {formatMessage(homeMessages.clickCount)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button size="big" fullWidth>
          {formatMessage(homeMessages.deposit)}
        </Button>
        <Button variant="secondary" fullWidth>
          {formatMessage(homeMessages.withdraw)}
        </Button>
      </div>
    </div>
  );
}
