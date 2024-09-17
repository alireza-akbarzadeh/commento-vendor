import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "components";

import { useIntl } from "react-intl";
import { ProductItem } from "./components/product-item";
import { homeMessages } from "./home.messages";
import { cn } from "lib/utils";

export function TopProducts() {
  const { formatMessage } = useIntl();
  return (
    <div className="rounded-XL bg-background-lightest p-6">
      <div className="">
        <div className="grid flex-1 grid-cols-1 items-center gap-[20px] md:grid-cols-5">
          <h3 className="whitespace-nowrap text-titleMedium">
            {formatMessage(homeMessages.topProduct)}
          </h3>
          <Select>
            <SelectTrigger className="h-[48px] rounded-2xl" label="نوع نمایش">
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
            <SelectTrigger className="h-[48px] rounded-2xl" label="زمان">
              <SelectValue placeholder="زمان" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectGroup>
                <SelectItem value="tody">امروز</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="h-[48px] rounded-2xl" label="دسته بندی">
              <SelectValue placeholder="دسته بندی" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectGroup>
                <SelectItem value="all">همه</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="mt-4 py-2 text-primary-main text-labelLarge md:mt-0 md:px-[22px]">
            نمایش همه ۴۵۶۷۸۹۹ محصول
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Carousel opts={{ direction: "rtl" }}>
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4",
                )}
              >
                <ProductItem />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
