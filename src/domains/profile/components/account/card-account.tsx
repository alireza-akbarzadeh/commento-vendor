import { Badge, Card, CardContent, Image } from 'components';
import { useIntl } from 'react-intl';
import { DefaultAccount } from './default-account';
import { profileMessages } from 'domains/profile/profile-details.messages';
import { DeleteAccount } from './delete-account';

type CardAccount = {
  cardNumber: string;
  owner: string;
  bankName: string;
  bankLogo: string;
  accountStatus?: 'default' | 'active' | 'inactive';
};

export function CardAccout(props: CardAccount) {
  const { accountStatus, bankLogo, bankName, cardNumber, owner } = props;
  const { formatMessage } = useIntl();
  return (
    <Card>
      <CardContent className="flex flex-col gap-y-2 p-6">
        <div className="flex items-center justify-between">
          <h4 className="text-labelXLarge text-textAndIcon-dark">
            {formatMessage(profileMessages.cardNumber)}
          </h4>
          <p className="text-labelXLarge text-textAndIcon-dark">
            <span>IR</span>
            {cardNumber}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-labelXLarge text-textAndIcon-dark">
            {formatMessage(profileMessages.bank)}
          </h4>
          <div className="flex gap-2">
            <Image src={bankLogo} alt={bankName} width={32} height={32} />
            <p className="text-labelXLarge text-textAndIcon-dark">{bankName}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-labelXLarge text-textAndIcon-dark">
            صاحب / صاحبان حساب
          </h4>
          <p className="text-labelXLarge text-textAndIcon-dark">{owner}</p>
        </div>
        <div className="flex items-center justify-between">
          {accountStatus ? (
            <Badge className="rounded-S" variant="success">
              پیش فرض
            </Badge>
          ) : (
            <span />
          )}
          {accountStatus === 'default' ? <DefaultAccount /> : <DeleteAccount />}
        </div>
      </CardContent>
    </Card>
  );
}
