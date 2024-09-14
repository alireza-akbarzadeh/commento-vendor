import { useIntl } from "react-intl";
import { profileMessages } from "../profile-details.messages";
import { Icon, IconProps } from "components";

type RowInfoProps = {
  title?: keyof typeof profileMessages;
  value: string;
  icon?: IconProps["name"];
};

export function RowInfo(props: RowInfoProps) {
  const { title, value, icon } = props;
  const { formatMessage } = useIntl();
  return (
    <div className="flex basis-1/3 gap-3">
      {icon ? (
        <Icon name={icon} className="text-textAndIcon-light" />
      ) : (
        <h4 className="text-textAndIcon-light text-labelXLarge">
          {title && formatMessage(profileMessages[title])}
        </h4>
      )}
      <p className="text-textAndIcon-darker text-labelXLarge">{value}</p>
    </div>
  );
}
