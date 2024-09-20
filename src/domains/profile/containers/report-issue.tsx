import { useIntl } from "react-intl";
import { ReportTable } from "../components";
import { profileMessages } from "../profile-details.messages";

export function ReportIssue() {
  const { formatMessage } = useIntl();
  return (
    <>
      <h3 className="text-textAndIcon-darker text-titleLarge">
        {formatMessage(profileMessages.customerIssueReport)}
      </h3>
      <div className="mt-8">
        <ReportTable />
      </div>
    </>
  );
}
