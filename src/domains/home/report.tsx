import { DataVisualizer, FinancialReport } from "./components";

export const Report = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <FinancialReport />
      <DataVisualizer />
    </div>
  );
};
