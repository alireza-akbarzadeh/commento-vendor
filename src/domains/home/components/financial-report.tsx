import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components";
import { ReportItem } from "./financial-report/report-item";

export function FinancialReport() {
  const financialList = [
    { title: "هزینه حمل", price: 2300000000 },
    { title: "کمسیون", price: 2300000000 },
    { title: "تخفیف فروشنده ", price: 2300000000 },
    { title: "تسویه تا کنون ", price: 2300000000 },
    { title: "مانده تسویه", price: 2300000000 },
  ];
  return (
    <div className="col-span-12 space-y-4 rounded-XL bg-background-lightest p-6 md:col-span-3">
      <div className="flex items-center justify-between">
        <h3 className="text-textAndIcon-darker text-titleMedium">گزارش مالی</h3>
        <Select>
          <SelectTrigger className="w-[128px]">
            <SelectValue placeholder="هفته جاری" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="current_week">هفته جاری</SelectItem>
              <SelectItem value="current_month">ماه جاری</SelectItem>
              <SelectItem value="current_year">سال جاری</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-[16.5px]">
        {financialList.map((item) => (
          <ReportItem key={item.title} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}
