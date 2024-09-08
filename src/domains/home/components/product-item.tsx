import { MacBook } from 'assets';
import { Badge, Icon, Image } from 'components';
import { CURRENCY } from 'constant';

import { FormattedNumber } from 'react-intl';

export function ProductItem() {
  return (
    <div className="col-span-2 mt-8 flex flex-col gap-[20px] bg-background-lighter p-4 rounded-XL ">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 justify-between items-center text-labelMedium text-textAndIcon-dark">
          <span> کلیک</span>
          <span>۲۳۴۵۶</span>
        </div>
        <Badge
          className="w-[87px] h-[30px] rounded-lg flex items-center justify-center text-labelMedium text-success-main"
          variant="success"
        >
          نو
        </Badge>
      </div>
      <Image
        alt="mac-book"
        src={MacBook}
        className="w-[173px] h-[158px] mx-auto aspect-square"
      />
      <p className="text-textAndIcon-darker text-titleSmall">
        لپ تاپ 13.3 اینچی اپل مدل Macbook Pro MNEQ3 2022 LLA
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5 items-center">
          <Icon size="small" name="Favorite" className="text-secondary-main" />
          <span className="text-secondary-main text-labelMedium">۴.۴</span>
        </div>
        <div className="flex gap-1 items-center">
          <FormattedNumber value={2300000} currency="IRR" />
          <span className="text-textAndIcon-light">{CURRENCY.IR}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Badge variant="error" className="px-4 rounded-S ">
          نردبان شده
        </Badge>
        <div className="flex justify-end items-center gap-1">
          <p className="text-labelMedium text-textAndIcon-darker">
            تا کمترین قیمت
          </p>
          <FormattedNumber value={2300000} currency="IRR" />
          <span className="text-textAndIcon-light">{CURRENCY.IR}</span>
        </div>
      </div>
    </div>
  );
}
