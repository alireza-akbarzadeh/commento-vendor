import { Badge, Button, Icon } from "components";
import { CURRENCY } from "constant";
import { FormattedNumber } from "react-intl";

export function SellerProduct() {
  return (
    <section className="rounded-M bg-background-lightest p-6">
      <h3 className="text-textAndIcon-darker text-titleSmall">
        فروشندگان این کالا
      </h3>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="mt-6 grid grid-cols-1 items-center py-[21px] md:grid-cols-4"
        >
          <div className="flex items-center gap-2">
            <Icon name="shop" className="text-textAndIcon-light" />
            <p className="text-textAndIcon-darker text-titleMedium">رایانک</p>
            <div className="flex items-center gap-1.5">
              <span className="text-primary-main text-labelMedium">
                امتیاز 234
              </span>
              <Icon name="Favorite" />
            </div>
            <Badge className="mr-2 rounded-S px-4" variant="success">
              سطج A++
            </Badge>
          </div>
          <p className="text-textAndIcon-darker text-titleMedium">حضوری</p>
          <div className="flex items-center gap-2">
            <p className="text-textAndIcon-light text-titleSmall">
              قیمت فروشنده
            </p>
            <p className="text-textAndIcon-darker text-headlineMedium">
              <FormattedNumber value={12000000} currency="IRR" />
            </p>
            <span className="text-labelLarge">{CURRENCY.IR}</span>
          </div>
          <Button className="w-[143px] rounded-M">مشاهده فروشنده</Button>
        </div>
      ))}
    </section>
  );
}
