import { ColumnDef } from "@tanstack/react-table";
import { Badge, DataTableColumnHeader } from "components";
import { DataTable } from "components/ui/data-table";
import React from "react";
import { useIntl } from "react-intl";

import { TableRef } from "components/ui/data-table/table.types";
import { FORMAT } from "constant";
import { format } from "date-fns-jalali";
import { productsMessages } from "domains/products/products.messages";
import { profileMessages } from "domains/profile/profile-details.messages";
import { globalMessages } from "i18n/global.messages";
import { reports, Reports } from "./data";
import { ReportDialog } from "./report-dialog";

export function ReportTable() {
  const { formatMessage } = useIntl();
  const tableRef = React.useRef<TableRef<Reports>>(null);

  const columns: ColumnDef<Reports>[] = [
    {
      accessorKey: "title",
      header: () => (
        <p className="pr-5 text-textAndIcon-light text-labelLarge">
          {formatMessage(globalMessages.title)}
        </p>
      ),
      enablePinning: true,
      size: 150,
      cell: ({ row }) => (
        <p className="text-textAndIcon-darker text-labelLarge">
          {row.getValue("title")}
        </p>
      ),
    },
    {
      accessorKey: "reportType",
      size: 136,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(profileMessages.reportType)}
        />
      ),
    },
    {
      accessorKey: "openReportTime",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(profileMessages.openReportTime)}
        />
      ),
      cell: ({ row }) => (
        <p className="text-background-darker text-labelLarge">
          {format(row.getValue("openReportTime"), FORMAT.DAY_AND_MONTH)}
        </p>
      ),
    },
    {
      accessorKey: "status",
      size: 130,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.productStatus)}
        />
      ),
      cell: ({ row }) => {
        const status = row.getValue("status") as
          | "success"
          | "progress"
          | "failed";
        return (
          <Badge
            variant={
              status === "success"
                ? "success"
                : status === "failed"
                  ? "error"
                  : "secondary"
            }
          >
            {row.getValue("status")}
          </Badge>
        );
      },
    },
    {
      accessorKey: "reportDescription",
      size: 130,
      header: () => (
        <p className="pr-5 text-textAndIcon-light text-labelLarge">
          {formatMessage(profileMessages.reportDescription)}
        </p>
      ),
      cell: ({ row }) => (
        <ReportDialog
          title={formatMessage(profileMessages.userReportIssue)}
          descrption={row.getValue("reportDescription")}
        />
      ),
    },
    {
      accessorKey: "closeReportTime",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(profileMessages.closeReportTime)}
        />
      ),
      cell: ({ row }) => (
        <p className="text-background-darker text-labelLarge">
          {format(row.getValue("closeReportTime"), FORMAT.DAY_AND_MONTH)}
        </p>
      ),
    },
    {
      accessorKey: "adminDescription",
      size: 130,
      header: () => (
        <p className="pr-5 text-textAndIcon-light text-labelLarge">
          {formatMessage(profileMessages.adminDescription)}
        </p>
      ),
      cell: ({ row }) => (
        <ReportDialog
          title={formatMessage(profileMessages.adminDescription)}
          descrption={row.getValue("adminDescription")}
        />
      ),
    },
  ];

  return (
    <DataTable
      hasSearch
      navigate={{ url: "product", accessorKey: "title" }}
      hasPaginate
      ref={tableRef}
      columns={columns}
      data={reports}
    />
  );
}
