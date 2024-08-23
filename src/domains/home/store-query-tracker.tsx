import { CustomerQueryTracker } from './components/customer-query-tracker';
import { ErrorReportTracker } from './components/error-report-tracker';

export function StoreQueryTracker() {
  return (
    <div className="grid grid-cols-4 px-6">
      <ErrorReportTracker />
      <CustomerQueryTracker />
    </div>
  );
}
