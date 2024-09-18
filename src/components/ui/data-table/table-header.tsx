import { flexRender, Table } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "../table";

type DataTableHeaderProps<TData> = {
  table: Table<TData>;
};

export function DataTableHeader<TData>(props: DataTableHeaderProps<TData>) {
  const { table } = props;
  return (
    <TableHeader className="bg-background-lighter">
      {table.getHeaderGroups().map((headerGroup, index) => {
        const isLastHeader = index === headerGroup.headers.length - 1;
        return (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  colSpan={header.colSpan}
                  className="relative"
                  key={header.id}
                >
                  <div style={{ width: `${header.getSize()}px` }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {!isLastHeader && (
                      <span className="absolute left-0 top-1/2 block h-[16px] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-border-light" />
                    )}
                  </div>
                </TableHead>
              );
            })}
          </TableRow>
        );
      })}
    </TableHeader>
  );
}
