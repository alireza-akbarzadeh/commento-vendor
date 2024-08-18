import { DataVisualizer, FinancialReport } from './components';

export const Report = () => {
  return (
    <div className="grid grid-cols-3 bg-orange-100">
      <FinancialReport />
      <DataVisualizer />
    </div>
  );
};
