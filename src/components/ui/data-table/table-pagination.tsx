import { useState } from "react";
import { Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { Button } from "../button";
import { Icon } from "../icon/icon";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const [showMore, setShowMore] = useState(false);
  const totalPages = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;
  const visiblePages = 3;

  const startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  const endPage = Math.min(
    startPage + (showMore ? visiblePages - 1 : 2),
    totalPages,
  );

  return (
    <div className="mt-4 flex items-center justify-between gap-1">
      <div className="text-sm text-textAndIcon-dark">
        {table.getFilteredSelectedRowModel().rows.length} از{" "}
        {table.getFilteredRowModel().rows.length} سطر انتخاب شده است.
      </div>
      <div className="flex items-center gap-x-2 lg:gap-x-4">
        <div className="flex items-center gap-x-2">
          <p className="text-sm font-medium">تعداد سطر در هر صفحه</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[80px] rounded-XS">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {Array.from(
                {
                  length: Math.ceil(
                    table.getFilteredRowModel().rows.length / 10,
                  ),
                },
                (_, index) => (index + 1) * 10,
              ).map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          صفحه {currentPage} از {totalPages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <Icon name="double-chevron" className="rotate-180" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Icon name="right-arrow-3" />
          </Button>

          {Array.from(
            { length: endPage - startPage + 1 },
            (_, index) => startPage + index,
          ).map((page) => (
            <Button
              key={page}
              variant="outline"
              className={`h-8 w-8 p-0 ${page === currentPage ? "bg-slate-800 font-bold text-white" : "text-black"}`}
              onClick={() => table.setPageIndex(page - 1)}
            >
              {page}
            </Button>
          ))}

          {!showMore && endPage < totalPages && (
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => setShowMore(true)}
            >
              ...
            </Button>
          )}

          {showMore && endPage < totalPages && (
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.setPageIndex(endPage)}
            >
              {endPage + 1}
            </Button>
          )}

          {showMore && endPage + 1 < totalPages && (
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.setPageIndex(endPage + 1)}
            >
              {endPage + 2}
            </Button>
          )}

          {showMore && totalPages > endPage + 1 && (
            <>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.setPageIndex(totalPages - 2)}
              >
                {totalPages - 1}
              </Button>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => table.setPageIndex(totalPages - 1)}
              >
                {totalPages}
              </Button>
            </>
          )}

          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(totalPages - 1)}
            disabled={!table.getCanNextPage()}
          >
            <Icon name="double-chevron" />
          </Button>
        </div>
      </div>
    </div>
  );
}
