import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components';
import { useIntl } from 'react-intl';
import { ProductItem } from './components/product-item';
import { homeMessages } from './home.messages';

export function TopProducts() {
  const { formatMessage } = useIntl();
  return (
    <div className="p-6 bg-background-lightest rounded-XL">
      <div className="flex items-center justify-between gap-20">
        <div className="flex gap-[20px] items-center flex-1">
          <h3 className="text-titleMedium whitespace-nowrap">
            {formatMessage(homeMessages.topProduct)}
          </h3>
          <Select>
            <SelectTrigger className="h-[48px] rounded-2xl">
              <SelectValue placeholder="نوع نمایش" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectGroup>
                <SelectItem value="current_week">
                  پرکلیک ترین محصولات
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-[48px] rounded-2xl">
              <SelectValue placeholder="زمان" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectGroup>
                <SelectItem value="tody">امروز</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-[48px] rounded-2xl">
              <SelectValue placeholder="دسته بندی" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectGroup>
                <SelectItem value="all">همه</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p className="text-labelLarge text-primary-main px-[22px] py-2">
          نمایش همه ۴۵۶۷۸۹۹ محصول
        </p>
      </div>
      <div className="grid grid-cols-8 gap-6 mt-8">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
