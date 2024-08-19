import { CURRENCY } from 'constant';
import { formatPriceToPersian } from 'lib/utils';

type ReportItemProps = {
  title: string;
  price: number;
};
export function ReportItem(props: ReportItemProps) {
  const { price, title } = props;
  return (
    <div className="flex items-center justify-between pt-[6.5px]">
      <h4 className="text-labelLarge text-textAndIcon-light">{title}</h4>
      <p className="text-textAndIcon-darker space-x-2">
        <span className="ml-2">{formatPriceToPersian(price)}</span>
        <span>{CURRENCY.IR}</span>
      </p>
    </div>
  );
}
