import { ColumnDef } from "@tanstack/react-table";
import {
  Button,
  Checkbox,
  DataTable,
  DataTableColumnHeader,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from "components";
import { useIntl } from "react-intl";
import { profileMessages } from "../profile-details.messages";
import { format } from "path";

export function ContractTable() {
  const { formatMessage } = useIntl();

  type Contract = {
    id: string;
    contractNumber: number;
    status: "pending" | "processing" | "success" | "failed";
    contractSubject: string;
    StartDate: string;
    endDate: string;
    downloadContract: string;
  };
  const contract: Contract[] = [
    {
      id: "16872673817263",
      contractNumber: 123456789,
      status: "pending",
      contractSubject: "Contract Subject",
      StartDate: "2023-06-15",
      endDate: "2023-06-1",
      downloadContract: "https://example.com/contract.pdf",
    },
    {
      id: "16872673817264",
      contractNumber: 123456790,
      status: "processing",
      contractSubject: "Software License Agreement",
      StartDate: "2023-07-01",
      endDate: "2024-06-30",
      downloadContract: "https://example.com/contract_123456790.pdf",
    },
    // ... (continue with 58 more entries)
    {
      id: "16872673817323",
      contractNumber: 123456849,
      status: "success",
      contractSubject: "Maintenance Service Agreement",
      StartDate: "2023-12-01",
      endDate: "2024-11-30",
      downloadContract: "https://example.com/contract_123456849.pdf",
    },
    {
      id: "168723123673817323",
      contractNumber: 123456849,
      status: "success",
      contractSubject: "Maintenance Service Agreement",
      StartDate: "2023-12-01",
      endDate: "2024-11-30",
      downloadContract: "https://example.com/contract_123456849.pdf",
    },
    {
      id: "16872671233817323",
      contractNumber: 123456849,
      status: "success",
      contractSubject: "Maintenance Service Agreement",
      StartDate: "2023-12-01",
      endDate: "2024-11-30",
      downloadContract: "https://example.com/contract_123456849.pdf",
    },
    {
      id: "16872671233817323",
      contractNumber: 123456849,
      status: "success",
      contractSubject: "Maintenance Service Agreement",
      StartDate: "2023-12-01",
      endDate: "2024-11-30",
      downloadContract: "https://example.com/contract_123456849.pdf",
    },
  ];

  const columns: ColumnDef<Contract>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const payment = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="text" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <Icon name="Menu-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Actions</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    {
      accessorKey: "contractNumber",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(profileMessages.contractNumber)}
        />
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(profileMessages.state)}
        />
      ),
    },
    {
      accessorKey: "contractSubject",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(profileMessages.contractSubject)}
        />
      ),
    },
    {
      accessorKey: "StartDate",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(profileMessages.startContract)}
        />
      ),
    },
    {
      accessorKey: "endDate",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(profileMessages.endContract)}
        />
      ),
    },
    {
      accessorKey: "endDate",
      header: () => formatMessage(profileMessages.downloadContract),
      cell() {
        return (
          <div className="flex items-center justify-center">
            <a rel="noopener noreferrer">
              <Icon name="download-1" className="text-info-main" />
            </a>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <h3 className="mt-6 pb-5 text-textAndIcon-darker text-titleLarge">
        {formatMessage(profileMessages.contractHistory)}
      </h3>
      <DataTable columns={columns} data={contract} />
    </>
  );
}
