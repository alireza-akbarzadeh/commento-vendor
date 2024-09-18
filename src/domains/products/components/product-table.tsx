import { ColumnDef } from "@tanstack/react-table";
import {
  Badge,
  Button,
  DataTableColumnHeader,
  Icon,
  Image,
  Input,
} from "components";
import { DataTable } from "components/ui/data-table";
import React from "react";
import { FormattedNumber, useIntl } from "react-intl";

import { TableRef } from "components/ui/data-table/table.types";
import { CURRENCY } from "constant";
import { globalMessages } from "i18n/global.messages";
import { NavLink, useNavigate } from "react-router-dom";
import { products, Products } from "../data";
import { productsMessages } from "../products.messages";

export function ProductTable() {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const tableRef = React.useRef<TableRef<Products>>(null);

  const columns: ColumnDef<Products>[] = [
    {
      enablePinning: true,
      accessorKey: "picture",
      size: 120,
      header: () => (
        <p className="pr-5 text-textAndIcon-light text-labelLarge">تصویر</p>
      ),
      cell: ({ row }) => (
        <div className="size-[60px] rounded-XS border border-border-lightest p-3">
          <Image src={row.getValue("picture")} alt={row.getValue("title")} />
        </div>
      ),
    },
    {
      accessorKey: "title",
      enablePinning: true,
      size: 215,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.productTitle)}
        />
      ),
      cell: ({ row }) => (
        <p className="text-textAndIcon-darker text-labelLarge">
          {row.getValue("title")}
        </p>
      ),
    },
    {
      accessorKey: "numClick",
      size: 136,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.numClick)}
        />
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.yourPrice)}
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <FormattedNumber value={row.getValue("price")} currency="IRR" />
          <span className="text-textAndIcon-light">{CURRENCY.IR}</span>
        </div>
      ),
    },
    {
      accessorKey: "lowestPrice",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.lowestPrice)}
        />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <FormattedNumber
            value={row.getValue("lowestPrice ")}
            currency="IRR"
          />
          <span className="text-textAndIcon-light">{CURRENCY.IR}</span>
        </div>
      ),
    },
    {
      accessorKey: "vendorCount",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.vendorCount)}
        />
      ),
    },
    {
      accessorKey: "vendorRank",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.lowestPrice)}
        />
      ),
    },
    {
      accessorKey: "lastUpdate",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.lastUpdate)}
        />
      ),
      cell: ({ row }) => <p>{row.getValue("lastUpdate")}</p>,
    },
    {
      accessorKey: "category",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.category)}
        />
      ),
    },
    {
      accessorKey: "brand",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.brand)}
        />
      ),
    },
    {
      accessorKey: "inventory",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.inventroy)}
        />
      ),
    },
    {
      accessorKey: "numClick",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.numClick)}
        />
      ),
    },
    {
      accessorKey: "status",
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
      accessorKey: "link",
      size: 150,
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.productLink)}
        />
      ),
      cell: ({ row }) => (
        <NavLink to={row.getValue("link")}>
          <Icon name="Link-1" className="text-info-main" />
        </NavLink>
      ),
    },
    {
      accessorKey: "commercial",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.commercial)}
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
            {row.getValue("commercial")}
          </Badge>
        );
      },
    },
    {
      accessorKey: "type",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.productType)}
        />
      ),
    },
    {
      accessorKey: "hasInsurance",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title={formatMessage(productsMessages.insurance)}
        />
      ),
      cell: ({ row }) => (
        <p>
          {formatMessage(
            row.getValue("hasInsurance")
              ? globalMessages.has
              : globalMessages.hasnt,
          )}
        </p>
      ),
    },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const api = tableRef.current?.table;
    if (api) {
      api.getColumn("title")?.setFilterValue(event.target.value);
    }
  };
  return (
    <>
      <div className="mt-[30px] flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <h3>محصولات شما </h3>
          <div className="flex h-[54px] w-[363px] items-center gap-2 rounded-S bg-background-lighter py-[6px]">
            <div className="pr-2">
              <Icon name="Research" className="" />
            </div>
            <Input
              onChange={handleSearchChange}
              className="w-[323px] border-none bg-transparent focus:ring-0"
              placeholder={formatMessage(productsMessages.searchWithTitle)}
            />
          </div>
        </div>
        <Button onClick={() => navigate("/products?page=create")}>
          آپدیت و افزودن محصول جدید
        </Button>
      </div>
      <p className="mt-6 flex justify-end gap-1 text-textAndIcon-dark text-labelMedium">
        <span>{formatMessage(productsMessages.totalProduct)}</span>
        <span>۳۵۶۵۶۷ عدد</span>
      </p>
      <DataTable
        navigate={{ url: "product", accessorKey: "title" }}
        hasPaginate
        ref={tableRef}
        columns={columns}
        data={products}
      />
    </>
  );
}
