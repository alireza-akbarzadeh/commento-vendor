import { Button, Icon } from 'components';
import { PageDirection } from './components';
import { CURRENCY } from 'constant';
import { FormattedNumber } from 'react-intl';
import { ProductSummary } from './components/product-summary';

export function ProductInfo() {
  return (
    <div className="bg-background-lightest mt-6 rounded-S p-6">
      <PageDirection />
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-1 items-center">
          <Icon name="right-arrow" size="xLarge" />
          <h3 className="text-textAndIcon-darker">
            گوشی موبایل اپل مدل iPhone 13 Pro CH دو سیم‌ کارت ظرفیت 512 گیگابایت
            و 6 گیگابایت رم - نات اکتیو
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <p className="text-headlineMedium text-textAndIcon-darker">
              <FormattedNumber value={1087706} currency="IRR" />
            </p>
            <span className="text-textAndIcon-darker mr-1">{CURRENCY.IR}</span>
          </div>
          <Button
            variant="outline"
            className="rounded-M w-[132px] h-[48px] border border-primary-main"
          >
            درخواست ادغام
          </Button>
        </div>
      </div>
      <ProductSummary />
    </div>
  );
}
