import { Badge, Button, Icon } from 'components';
import { CURRENCY } from 'constant';
import { FormattedNumber } from 'react-intl';

export function SellerProduct() {
  return (
    <div className="bg-background-lightest rounded-M p-6">
      <h3 className="text-textAndIcon-darker text-titleSmall">
        فروشندگان این کالا
      </h3>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-4 mt-6 py-[21px] items-center"
        >
          <div className="flex items-center gap-2">
            <Icon name="shop" className="text-textAndIcon-light" />
            <p className="text-titleMedium text-textAndIcon-darker">رایانک</p>
            <div className="flex items-center gap-1.5">
              <span className="text-labelMedium  text-primary-main">
                امتیاز 234
              </span>
              <Icon name="Favorite" />
            </div>
            <Badge className="px-4 rounded-S mr-2" variant="success">
              سطج A++
            </Badge>
          </div>
          <p className="text-titleMedium text-textAndIcon-darker">حضوری</p>
          <div className="flex items-center gap-2">
            <p className="text-textAndIcon-light text-titleSmall">
              قیمت فروشنده
            </p>
            <p className="text-headlineMedium text-textAndIcon-darker">
              <FormattedNumber value={12000000} currency="IRR" />
            </p>
            <span className="text-labelLarge">{CURRENCY.IR}</span>
          </div>
          <Button className="w-[143px] rounded-M">مشاهده فروشنده</Button>
        </div>
      ))}
    </div>
  );
}
