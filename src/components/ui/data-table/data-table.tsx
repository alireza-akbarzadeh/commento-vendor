import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "components";

import {
  ColumnFiltersState,
  ColumnPinningState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import React, { ForwardedRef } from "react";
import { DataTablePagination } from "./table-pagination";
import { TableToolbar } from "./table-toolbar";
import { DataTableProps, TableRef } from "./table.types";
import { useNavigate } from "react-router-dom";

export const defaultColumnSizing = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER,
};

function ForwardedDataTable<TData, TValue>(
  props: DataTableProps<TData, TValue>,
  ref: ForwardedRef<TableRef<TData>>,
) {
  const { columns, data, columnControl, hasPaginate, hasSearch, navigate } =
    props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({
    left: [],
    right: [],
  });
  const push = useNavigate();

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnPinningChange: setColumnPinning,
    columnResizeDirection: "rtl",
    defaultColumn: {
      size: 200, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 500, //enforced during column resizing
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      columnPinning,
    },
    initialState: {
      columnPinning: {
        left: ["expand-column"],
        right: ["actions-column"],
      },
    },
  });

  React.useImperativeHandle(ref, () => ({
    table,
  }));
  return (
    <>
      <TableToolbar
        table={table}
        hasSearch={hasSearch}
        columnControl={columnControl}
      />
      <div className="rounded-md border">
        <Table>
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
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {hasPaginate && <DataTablePagination table={table} />}
    </>
  );
}

export const DataTable = React.forwardRef(ForwardedDataTable) as <
  TData,
  TValue = undefined,
>(
  props: DataTableProps<TData, TValue> & {
    ref?: ForwardedRef<TableRef<TData>>;
  },
) => ReturnType<typeof ForwardedDataTable>;
