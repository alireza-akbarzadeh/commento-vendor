import { ColumnDef, Table as TableInstance } from "@tanstack/react-table";

interface TableRef<TData> {
  table: TableInstance<TData>;
}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  columnControl?: boolean;
  hasSearch?: boolean;
  hasPaginate?: boolean;
  navigate?: { url: string; accessorKey: string };
}

export type { DataTableProps, TableRef };
