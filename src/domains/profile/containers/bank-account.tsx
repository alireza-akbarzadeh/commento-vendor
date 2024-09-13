import { MelatPng } from 'assets';
import { useIntl } from 'react-intl';
import { CardAccout } from '../components';
import { OpenNewAccount } from '../components/open-new-account';
import { profileMessages } from '../profile-details.messages';

export function BankAccount() {
  const { formatMessage } = useIntl();
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-titleLarge text-textAndIcon-dark">
          {formatMessage(profileMessages.backAccount)}
        </h3>
        <OpenNewAccount />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 mt-8">
        <CardAccout
          cardNumber="۰۶ ۲۹۶۰ ۰۰۰۰ ۰۰۱۰ ۰۳۲۴ ۲۰۰۰ ۰۱"
          bankName="ملت"
          owner="حسام صادقی"
          accountStatus="default"
          bankLogo={MelatPng}
        />
        <CardAccout
          cardNumber="۰۶ ۲۹۶۰ ۰۰۰۰ ۰۰۱۰ ۰۳۲۴ ۲۰۰۰ ۰۱"
          bankName="ملت"
          owner="حسام صادقی"
          bankLogo={MelatPng}
        />
        <CardAccout
          cardNumber="۰۶ ۲۹۶۰ ۰۰۰۰ ۰۰۱۰ ۰۳۲۴ ۲۰۰۰ ۰۱"
          bankName="ملت"
          owner="حسام صادقی"
          bankLogo={MelatPng}
        />
      </div>
    </div>
  );
}
