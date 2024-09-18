import { Table } from "components";

import {
  ColumnFiltersState,
  ColumnPinningState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import React, { ForwardedRef, RefObject } from "react";
import { DataTableBody } from "./table-body";
import { DataTableHeader } from "./table-header";
import { DataTablePagination } from "./table-pagination";
import { TableToolbar } from "./table-toolbar";
import { DataTableProps, TableRef } from "./table.types";

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
      size: 200,
      minSize: 50,
      maxSize: 500,
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
          <DataTableHeader table={table} />
          <DataTableBody navigate={navigate} table={table} />
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
    ref?: RefObject<TableRef<TData>>;
  },
) => ReturnType<typeof ForwardedDataTable>;
