import { Badge, Button, Card, CardContent, Image } from 'components';
import { useIntl } from 'react-intl';
import { profileMessages } from '../profile-details.messages';

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
          <h4 className="text-labelXLarge text-textAndIcon-dark">شماره شبا</h4>
          <p className="text-labelXLarge text-textAndIcon-dark">
            <span>IR</span>
            {cardNumber}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-labelXLarge text-textAndIcon-dark">بانک</h4>
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
          <Button
            icon="Edit"
            iconPosition="left"
            className="w-auto rounded-M  h-[56px] bg-background-lighter text-primary-main"
          >
            {formatMessage(profileMessages.backToDefaultAccount)}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
