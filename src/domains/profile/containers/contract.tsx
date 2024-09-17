import { useIntl } from "react-intl";
import { CardContract, ContractTable } from "../components";
import { profileMessages } from "../profile-details.messages";

export function Contract() {
  const { formatMessage } = useIntl();
  return (
    <div>
      <h3 className="mt-4 text-textAndIcon-darker text-titleLarge md:mt-0">
        {formatMessage(profileMessages.currentcontract)}
      </h3>
      <div className="mt-8 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
        <CardContract />
        <CardContract />
        <CardContract />
      </div>
      <ContractTable />
    </div>
  );
}
