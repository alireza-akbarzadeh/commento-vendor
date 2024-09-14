import { MacBook } from "assets";
import { Badge, Button, Icon, Image } from "components";
import { CURRENCY } from "constant";
import { globalMessages } from "i18n/global.messages";

import { FormattedNumber, useIntl } from "react-intl";

type ProductItemProps = {
  hasAction?: boolean;
};

export function ProductItem(props: ProductItemProps) {
  const { hasAction } = props;
  const { formatMessage } = useIntl();
  return (
    <div className="col-span-2 flex flex-col gap-[20px] rounded-XL bg-background-lighter p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-2 text-textAndIcon-dark text-labelMedium">
          <span> کلیک</span>
          <span>۲۳۴۵۶</span>
        </div>
        <Badge
          className="flex h-[30px] w-[87px] items-center justify-center rounded-lg text-success-main text-labelMedium"
          variant="success"
        >
          نو
        </Badge>
      </div>
      <Image
        alt="mac-book"
        src={MacBook}
        className="mx-auto aspect-square h-[158px] w-[173px]"
      />
      <p className="text-textAndIcon-darker text-titleSmall">
        لپ تاپ 13.3 اینچی اپل مدل Macbook Pro MNEQ3 2022 LLA
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Icon size="small" name="Favorite" className="text-secondary-main" />
          <span className="text-secondary-main text-labelMedium">۴.۴</span>
        </div>
        <div className="flex items-center gap-1">
          <FormattedNumber value={2300000} currency="IRR" />
          <span className="text-textAndIcon-light">{CURRENCY.IR}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Badge variant="error" className="rounded-S px-4">
          نردبان شده
        </Badge>
        <div className="flex items-center justify-end gap-1">
          <p className="text-textAndIcon-darker text-labelMedium">
            تا کمترین قیمت
          </p>
          <FormattedNumber value={2300000} currency="IRR" />
          <span className="text-textAndIcon-light">{CURRENCY.IR}</span>
        </div>
      </div>
      {hasAction && (
        <Button fullWidth>{formatMessage(globalMessages.wishToSell)}</Button>
      )}
    </div>
  );
}
