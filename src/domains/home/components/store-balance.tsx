import { Button } from "components";
import { homeMessages } from "domains/home/home.messages";
import { FormattedNumber, useIntl } from "react-intl";

export function StoreBalance() {
  const { formatMessage } = useIntl();
  return (
    <div className="col-span-12 space-y-[42px] rounded-XL bg-background-lightest p-6 md:col-span-3">
      <div className="h-[160px] space-y-6 rounded-2xl bg-info-main px-4 pt-[19px]">
        <div className="flex items-center justify-between">
          <p className="text-textAndIcon-lightest text-titleMedium">
            {formatMessage(homeMessages.wallet)}
          </p>
          <p className="text-textAndIcon-lightest text-titleMedium">
            <FormattedNumber value={2396363} currency="IRR" />
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-textAndIcon-lightest text-titleMedium">
            {formatMessage(homeMessages.activePackage)}
          </p>
          <div className="flex h-[30px] items-center justify-center rounded-[8px] bg-info-lighter px-4 py-1.5">
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
