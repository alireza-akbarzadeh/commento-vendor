import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "components";
import { DataTable } from "components/ui/data-table";
import { useIntl } from "react-intl";

import { FORMAT } from "constant";
import { format } from "date-fns-jalali";
import { profileMessages } from "domains/profile/profile-details.messages";
import { users, Users } from "./data";
import { UserDialog } from "./user-dialog";

export function UsersTable() {
  const { formatMessage } = useIntl();

  const columns: ColumnDef<Users>[] = [
    {
      accessorKey: "fullName",
      header: () => formatMessage(profileMessages.fullName),
    },
    {
      accessorKey: "phoneNumber",
      header: () => formatMessage(profileMessages.phoneNumber),
    },
    {
      accessorKey: "authorityLevel",
      header: () => formatMessage(profileMessages.authorityLevel),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <p className="text-background-darker text-labelLarge">
            {row.getValue("authorityLevel")}
          </p>
          <UserDialog
            type="change"
            title={formatMessage(profileMessages.changeUserAuthority)}
          />
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: () => formatMessage(profileMessages.email),
    },
    {
      accessorKey: "lastLogged",
      header: () => formatMessage(profileMessages.lastLogged),
      cell: ({ row }) => (
        <p className="text-background-darker text-labelLarge">
          {format(row.getValue("lastLogged"), FORMAT.DAY_AND_MONTH)}
        </p>
      ),
    },
  ];

  return (
    <DataTable
      hasSearch
      navigate={{ url: "product", accessorKey: "title" }}
      hasPaginate
      columns={columns}
      data={users}
    />
  );
}
