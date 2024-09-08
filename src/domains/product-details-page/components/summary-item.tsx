import { SummaryItemProps } from '../product-details-page-type';

export const SummaryItem = (props: SummaryItemProps) => {
  const { title, value, customValue, customTitle } = props;
  return (
    <div className="flex items-center  gap-x-8">
      {customTitle || (
        <h4 className="text-textAndIcon-light text-labelXLarge w-[220px]">
          {title}
        </h4>
      )}
      {customValue || (
        <p className="text-textAndIcon-darker text-labelXLarge">{value}</p>
      )}
    </div>
  );
};
