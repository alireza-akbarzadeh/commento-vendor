import { CURRENCY } from "constant";
import { FormattedNumber } from "react-intl";

type ReportItemProps = {
  title: string;
  price: number;
};
export function ReportItem(props: ReportItemProps) {
  const { price, title } = props;
  return (
    <div className="flex items-center justify-between pt-[6.5px]">
      <h4 className="text-textAndIcon-light text-labelLarge">{title}</h4>
      <p className="space-x-2 text-textAndIcon-darker">
        <span className="ml-2">
          <FormattedNumber value={price} currency="IRR" />
        </span>
        <span>{CURRENCY.IR}</span>
      </p>
    </div>
  );
}
