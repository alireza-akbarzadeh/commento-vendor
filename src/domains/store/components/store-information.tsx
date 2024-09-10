import { useIntl } from 'react-intl';
import { storeDetailsMessages } from '../store-details.messages';
import { Button } from 'components';
import { globalMessages } from 'i18n/global.messages';

export function StoreInformation() {
  const { formatMessage } = useIntl();

  return (
    <div className="col-span-8">
      <div className="flex items-center justify-between">
        <h3 className="text-titleLarge text-textAndIcon-dark">
          {formatMessage(storeDetailsMessages.storeInformation)}
        </h3>
        <Button>{formatMessage(globalMessages.submitChanges)}</Button>
      </div>
    </div>
  );
}
