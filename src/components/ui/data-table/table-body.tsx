import { ColumnDef, flexRender, Table } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { TableBody, TableCell, TableRow } from "../table";

type DataTableBodyProps<TData, TValue> = {
  table: Table<TData>;
  navigate?: {
    url: string;
    accessorKey: string;
  };
  columns: ColumnDef<TData, TValue>[];
};

export function DataTableBody<TData, TValue>(
  props: DataTableBodyProps<TData, TValue>,
) {
  const { table, navigate, columns } = props;
  const push = useNavigate();

  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            style={{ cursor: navigate ? "pointer" : "default" }}
            key={row.id}
            {...(navigate
              ? {
                  onDoubleClick: () =>
                    push(
                      `/${navigate.url}/${row.getValue(navigate.accessorKey)}`,
                    ),
                }
              : {})}
            data-state={row.getIsSelected() && "selected"}
          >
            {row.getVisibleCells().map((cell) => {
              if (!table) return [];
              const isLeftPinned = table
                .getState()
                ?.columnPinning?.left?.includes(cell.column.id);
              const isRightPinned = table
                .getState()
                ?.columnPinning?.right?.includes(cell.column.id);

              const stickyClass = isLeftPinned
                ? "sticky left-0 z-10 bg-white"
                : isRightPinned
                  ? "sticky right-0 z-10 bg-white"
                  : "";
              return (
                <TableCell key={cell.id} className={`${stickyClass}`}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <div className="flex items-center justify-center">
            هیچ رکوردی یافت نشد
          </div>
        </TableRow>
      )}
    </TableBody>
  );
}
