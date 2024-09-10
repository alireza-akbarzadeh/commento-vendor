import { Button, ProfileImg } from 'components';
import { useIntl } from 'react-intl';
import { profileMessages } from '../profile-details.messages';

export function StoreSidebar() {
  const { formatMessage } = useIntl();
  return (
    <div className="col-span-4 border border-border-lighter rounded-S p-6">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <ProfileImg size="large" src="https://github.com/shadcn.png" />
        <h3 className="text-textAndIcon-dark text-titleMedium">
          فروشگاه دیجی لند
        </h3>
      </div>
      <div className="flex flex-col gap-2 mt-60">
        <Button
          icon="account"
          fullWidth
          className="justify-start text-labelLarge text-textAndIcon-lightest"
          iconPosition="left"
        >
          {formatMessage(profileMessages.storeInformation)}
        </Button>
      </div>
    </div>
  );
}
