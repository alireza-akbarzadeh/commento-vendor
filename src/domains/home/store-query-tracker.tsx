import { CustomerQueryTracker } from './components/customer-query-tracker';
import { ErrorReportTracker } from './components/error-report-tracker';

export function StoreQueryTracker() {
  return (
    <div className="grid gap-6 grid-cols-4">
      <ErrorReportTracker />
      <CustomerQueryTracker />
    </div>
  );
}
