import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "components/ui/data-table";
import { useIntl } from "react-intl";

import { FORMAT } from "constant";
import { format } from "date-fns-jalali";
import { profileMessages } from "domains/profile/profile-details.messages";
import { historyRecord, HistoryRecord } from "./data";

export function UsersRecordTable() {
  const { formatMessage } = useIntl();

  const columns: ColumnDef<HistoryRecord>[] = [
    {
      accessorKey: "fullName",
      header: () => formatMessage(profileMessages.fullName),
    },
    {
      accessorKey: "dateTimeActivity",
      header: () => formatMessage(profileMessages.dateTimeActivity),
      cell: ({ row }) => (
        <p className="text-background-darker text-labelLarge">
          {format(row.getValue("dateTimeActivity"), FORMAT.DAY_AND_MONTH)}
        </p>
      ),
    },
    {
      accessorKey: "activityType",
      header: () => formatMessage(profileMessages.activityType),
    },
  ];

  return (
    <DataTable
      hasSearch
      navigate={{ url: "product", accessorKey: "title" }}
      hasPaginate
      columns={columns}
      data={historyRecord}
    />
  );
}
