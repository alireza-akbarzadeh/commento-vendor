import { MelatPng } from "assets";
import { useIntl } from "react-intl";

import { OpenNewAccount, CardAccout } from "../components";
import { profileMessages } from "../profile-details.messages";

export function BankAccount() {
  const { formatMessage } = useIntl();
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-textAndIcon-dark text-titleLarge">
          {formatMessage(profileMessages.backAccount)}
        </h3>
        <OpenNewAccount />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
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
