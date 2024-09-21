import { useIntl } from "react-intl";
import { UsersRecordTable, UsersTable } from "../components";
import { profileMessages } from "../profile-details.messages";
import { UserDialog } from "../components/users/user-dialog";
import { Button } from "components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { globalMessages } from "i18n/global.messages";

export function UserAuthority() {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3>{formatMessage(profileMessages.usersAuthority)}</h3>

        {user === "history-record" ? (
          <Button
            variant="outline"
            icon="left-arrow-2"
            iconPosition="left"
            onClick={() => navigate("/profile?page=user-authority")}
          >
            {formatMessage(globalMessages.back)}
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() =>
                navigate("/profile?page=user-authority&user=history-record")
              }
            >
              {formatMessage(profileMessages.userHistoryRecord)}
            </Button>
            <UserDialog
              type="add"
              title={formatMessage(profileMessages.addNewUser)}
            />
          </div>
        )}
      </div>
      {user === "history-record" ? <UsersRecordTable /> : <UsersTable />}
    </div>
  );
}
