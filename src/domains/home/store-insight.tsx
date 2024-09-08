import { StorPerformance } from './components/store-performance/store-performance';
import { StorSurvey } from './components/store-survey';
import { StoreBalance } from './components/store-balance';

export function StoreInsight() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <StoreBalance />
      <StorSurvey />
      <StorPerformance />
    </div>
  );
}
