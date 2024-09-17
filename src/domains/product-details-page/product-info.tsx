import { Button, Icon, PageDirection } from "components";

import { CURRENCY, ROUTE_NAME } from "constant";
import { FormattedNumber, useIntl } from "react-intl";
import { ProductSummary } from "./components/product-summary";
import { pdpMessages } from "./pdp.messages";

export function ProductInfo() {
  const { formatMessage } = useIntl();
  return (
    <div className="mt-6 rounded-S bg-background-lightest p-6">
      <PageDirection
        directions={[
          {
            title: formatMessage(pdpMessages.productList),
            link: ROUTE_NAME.Products,
          },
        ]}
      />
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Icon name="right-arrow" size="xLarge" />
          <h3 className="text-textAndIcon-darker">
            گوشی موبایل اپل مدل iPhone 13 Pro CH دو سیم‌ کارت ظرفیت 512 گیگابایت
            و 6 گیگابایت رم - نات اکتیو
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <p className="text-textAndIcon-darker text-headlineMedium">
              <FormattedNumber value={1087706} currency="IRR" />
            </p>
            <span className="mr-1 text-textAndIcon-darker">{CURRENCY.IR}</span>
          </div>
          <Button
            variant="outline"
            className="h-[48px] w-[132px] rounded-M border border-primary-main"
          >
            درخواست ادغام
          </Button>
        </div>
      </div>
      <ProductSummary />
    </div>
  );
}
