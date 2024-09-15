import { ColumnDef } from "@tanstack/react-table";
import {
  Button,
  Checkbox,
  DataTableColumnHeader,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from "components";
import { DataTable } from "components/ui/data-table/data-table";
import { useIntl } from "react-intl";
import { profileMessages } from "../profile-details.messages";

export function ContractTable() {
  const { formatMessage } = useIntl();

  type Contract = {
    id: string;
    contractNumber: number;
    status: "pending" | "processing" | "success" | "failed" | "completed";
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
      contractSubject: "Web Development Agreement",
      StartDate: "2023-06-15",
      endDate: "2024-06-15",
      downloadContract: "https://example.com/contract_123456789.pdf",
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
    {
      id: "16872673817265",
      contractNumber: 123456791,
      status: "success",
      contractSubject: "Consulting Services Agreement",
      StartDate: "2023-07-20",
      endDate: "2023-12-31",
      downloadContract: "https://example.com/contract_123456791.pdf",
    },
    {
      id: "16872673817266",
      contractNumber: 123456792,
      status: "pending",
      contractSubject: "Non-Disclosure Agreement",
      StartDate: "2023-08-01",
      endDate: "2024-07-31",
      downloadContract: "https://example.com/contract_123456792.pdf",
    },
    {
      id: "16872673817267",
      contractNumber: 123456793,
      status: "failed",
      contractSubject: "Partnership Agreement",
      StartDate: "2023-09-15",
      endDate: "2024-09-15",
      downloadContract: "https://example.com/contract_123456793.pdf",
    },
    {
      id: "16872673817268",
      contractNumber: 123456794,
      status: "completed",
      contractSubject: "Employment Contract",
      StartDate: "2023-10-01",
      endDate: "2024-09-30",
      downloadContract: "https://example.com/contract_123456794.pdf",
    },
    {
      id: "16872673817269",
      contractNumber: 123456795,
      status: "pending",
      contractSubject: "Freelance Agreement",
      StartDate: "2023-11-01",
      endDate: "2024-10-31",
      downloadContract: "https://example.com/contract_123456795.pdf",
    },
    {
      id: "16872673817270",
      contractNumber: 123456796,
      status: "success",
      contractSubject: "Lease Agreement",
      StartDate: "2023-12-01",
      endDate: "2025-11-30",
      downloadContract: "https://example.com/contract_123456796.pdf",
    },
    {
      id: "16872673817271",
      contractNumber: 123456797,
      status: "processing",
      contractSubject: "Supply Contract",
      StartDate: "2024-01-01",
      endDate: "2024-12-31",
      downloadContract: "https://example.com/contract_123456797.pdf",
    },
    {
      id: "16872673817272",
      contractNumber: 123456798,
      status: "completed",
      contractSubject: "Maintenance Agreement",
      StartDate: "2023-06-01",
      endDate: "2024-05-31",
      downloadContract: "https://example.com/contract_123456798.pdf",
    },
    {
      id: "16872673817273",
      contractNumber: 123456799,
      status: "failed",
      contractSubject: "Joint Venture Agreement",
      StartDate: "2023-07-01",
      endDate: "2024-06-30",
      downloadContract: "https://example.com/contract_123456799.pdf",
    },
    {
      id: "16872673817274",
      contractNumber: 123456800,
      status: "success",
      contractSubject: "Service Level Agreement",
      StartDate: "2023-08-15",
      endDate: "2024-08-14",
      downloadContract: "https://example.com/contract_123456800.pdf",
    },
    {
      id: "16872673817275",
      contractNumber: 123456801,
      status: "pending",
      contractSubject: "Subcontractor Agreement",
      StartDate: "2023-09-01",
      endDate: "2024-08-31",
      downloadContract: "https://example.com/contract_123456801.pdf",
    },
    {
      id: "16872673817276",
      contractNumber: 123456802,
      status: "processing",
      contractSubject: "Partnership Agreement",
      StartDate: "2023-10-01",
      endDate: "2024-09-30",
      downloadContract: "https://example.com/contract_123456802.pdf",
    },
    {
      id: "16872673817277",
      contractNumber: 123456803,
      status: "success",
      contractSubject: "Consultancy Agreement",
      StartDate: "2023-11-01",
      endDate: "2024-10-31",
      downloadContract: "https://example.com/contract_123456803.pdf",
    },
    {
      id: "16872673817278",
      contractNumber: 123456804,
      status: "processing",
      contractSubject: "Vendor Agreement",
      StartDate: "2023-12-01",
      endDate: "2024-11-30",
      downloadContract: "https://example.com/contract_123456804.pdf",
    },
    // Continue similarly for more entries...
  ];

  const columns: ColumnDef<Contract>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          className="mr-4"
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
