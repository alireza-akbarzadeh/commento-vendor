import { DataVisualizer, FinancialReport } from './components';

export const Report = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-9 gap-6">
      <FinancialReport />
      <DataVisualizer />
    </div>
  );
};
