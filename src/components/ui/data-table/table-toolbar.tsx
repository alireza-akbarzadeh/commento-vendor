import { Input } from "components";

import { Table } from "@tanstack/react-table";

import { DataTableViewOptions } from "./table-view-options";

type TableToolbar<TData> = {
  table: Table<TData>;
  hasSearch?: boolean;
  columnControl?: boolean;
};

export function TableToolbar<TData>(props: TableToolbar<TData>) {
  const { table, hasSearch, columnControl } = props;
  return (
    <div className="flex items-center justify-between py-4">
      {hasSearch && (
        <div className="w-[280px]">
          <Input
            fullWidth
            placeholder="جستوجو کنید"
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
      )}
      {columnControl && (
        <div className="flex items-center space-x-2">
          <DataTableViewOptions table={table} />
        </div>
      )}
    </div>
  );
}
