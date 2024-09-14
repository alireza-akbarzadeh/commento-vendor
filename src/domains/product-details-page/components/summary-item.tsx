import { SummaryItemProps } from "../product-details-page-type";

export const SummaryItem = (props: SummaryItemProps) => {
  const { title, value, customValue, customTitle } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-7">
      {customTitle || (
        <h4 className="col-span-2 text-textAndIcon-light text-labelXLarge">
          {title}
        </h4>
      )}
      {customValue || (
        <p className="col-span-5 text-textAndIcon-darker text-labelXLarge">
          {value}
        </p>
      )}
    </div>
  );
};
