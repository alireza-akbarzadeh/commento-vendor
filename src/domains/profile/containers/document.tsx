import { Badge, Button, Image } from "components";
import { useIntl } from "react-intl";
import { profileMessages } from "../profile-details.messages";
import { globalMessages } from "i18n/global.messages";
import { MacBook } from "assets";

export function Document() {
  const { formatMessage } = useIntl();
  return (
    <div>
      <div className="text-left">
        <Button icon="Plus">
          {formatMessage(profileMessages.addDocument)}
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-[15px] md:grid-cols-3">
        <div className="flex flex-col gap-y-3 rounded-L border border-border-lighter p-6">
          <Image src={MacBook} alt="macbook" className="h-[124px] w-full" />
          <div className="flex items-center justify-between">
            <p>تصویر کارت ملی</p>
            <Badge variant="success">
              {formatMessage(globalMessages.approved)}
            </Badge>
          </div>
          <Button icon="Trash" fullWidth variant="outline" size="medium">
            {formatMessage(profileMessages.deleteDocument)}
          </Button>
        </div>
        <div className="flex flex-col gap-y-3 rounded-XL border border-border-lighter p-6">
          <Image src={MacBook} alt="macbook" className="h-[124px] w-full" />
          <div className="flex items-center justify-between">
            <p>تصویر کارت ملی</p>
            <Badge variant="error">
              {formatMessage(globalMessages.rejected)}
            </Badge>
          </div>
          <Button icon="Trash" fullWidth variant="outline" size="medium">
            {formatMessage(profileMessages.deleteDocument)}
          </Button>
        </div>
        <div className="flex flex-col gap-y-3 rounded-XL border border-border-lighter p-6">
          <Image src={MacBook} alt="macbook" className="h-[124px] w-full" />
          <div className="flex items-center justify-between">
            <p>تصویر کارت ملی</p>
            <Badge variant="secondary">
              {formatMessage(globalMessages.inProgress)}
            </Badge>
          </div>
          <Button icon="Trash" fullWidth variant="outline" size="medium">
            {formatMessage(profileMessages.deleteDocument)}
          </Button>
        </div>
      </div>
    </div>
  );
}
