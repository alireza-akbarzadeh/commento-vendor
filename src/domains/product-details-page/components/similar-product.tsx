import { ProductItem } from 'domains/home/components/product-item';
import { globalMessages } from 'i18n/global.messages';
import { useIntl } from 'react-intl';
import { pdpMessages } from '../pdp.messages';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from 'components/ui/carousel';
import { cn } from 'lib/utils';

export function SimilarProduct() {
  const { formatMessage } = useIntl();
  return (
    <section className="bg-background-lightest p-6 rounded-XL">
      <div className="flex items-center justify-between py-[9px]">
        <h3 className="text-titleMedium text-textAndIcon-dark">
          {formatMessage(pdpMessages.vendorSimilarProduct)}
        </h3>
        <p className="text-labelLarge text-primary-main flex gap-1">
          <span>{formatMessage(globalMessages.viewAll)}</span>
          <span>1312423</span>
        </p>
      </div>
      <div className="mt-8">
        <Carousel opts={{ direction: 'rtl' }}>
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  'basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
                )}
              >
                <ProductItem hasAction />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
