import { Badge, Button } from "components";
import { globalMessages } from "i18n/global.messages";
import { useIntl } from "react-intl";
import { profileMessages } from "../profile-details.messages";

export function CardContract() {
  const { formatMessage } = useIntl();

  return (
    <div className="flex flex-col gap-4 rounded-S border border-primary-light p-4">
      <div className="flex items-center justify-between">
        <span className="text-textAndIcon-light text-labelXLarge">
          {formatMessage(profileMessages.contractNumber)}
        </span>
        <p className="text-textAndIcon-darker text-labelLarge">
          DSC-01-02-3245-123678
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-textAndIcon-light text-labelXLarge">
          {formatMessage(globalMessages.status)}
        </span>
        <Badge variant="success">
          {formatMessage(profileMessages.acceptable)}
        </Badge>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-textAndIcon-light text-labelXLarge">
          {formatMessage(profileMessages.contractSubject)}
        </span>
        <p className="text-textAndIcon-darker text-labelLarge">لورم ایپسوم </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-textAndIcon-light text-labelXLarge">
          {formatMessage(profileMessages.startContract)}
        </span>
        <p className="text-textAndIcon-darker text-labelLarge">۱۴۰۲/۰۱/۰۱</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-textAndIcon-light text-labelXLarge">
          {formatMessage(profileMessages.endContract)}
        </span>
        <p className="text-textAndIcon-darker text-labelLarge">۱۴۰۲/۱۲/۲۹</p>
      </div>
      <div className="text-left">
        <Button icon="download-1" variant="outline" className="w-[152px]">
          {formatMessage(profileMessages.downloadContract)}
        </Button>
      </div>
    </div>
  );
}
