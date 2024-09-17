import { ColumnDef } from "@tanstack/react-table";
import {
  Badge,
  Button,
  Checkbox,
  DataTableColumnHeader,
  Icon,
  Image,
  Input,
} from "components";
import { DataTable } from "components/ui/data-table";
import { useRef } from "react";
import { FormattedNumber, useIntl } from "react-intl";

import { MacBook } from "assets";
import { TableRef } from "components/ui/data-table/table.types";
import { CURRENCY } from "constant";
import { productsMessages } from "../products.messages";
import { NavLink } from "react-router-dom";
import { globalMessages } from "i18n/global.messages";

export function ProductTable() {
  const { formatMessage } = useIntl();

  type Products = {
    id: string;
    picture: string;
    title: string;
    numClick: number;
    price: number;
    lowestPrice: number;
    vendorCount: number;
    vendorRank: number;
    lastUpdate: string;
    category: string;
    brand: string;
    inventory: number;
    viewNumber: number;
    status: "success" | "progress" | "failed";
    link: string;
    commercial: string;
    type: string;
    hasInsurance: boolean;
  };

  const products: Products[] = [
    {
      id: "1",
      picture: MacBook,
      title: "Wireless Earbuds",
      numClick: 345,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 5,
      vendorRank: 1,
      lastUpdate: "2024-09-01",
      category: "Electronics",
      status: "failed",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: true,
    },
    {
      id: "2",
      picture: MacBook,
      title: "Smart Watch",
      numClick: 550,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 8,
      vendorRank: 2,
      lastUpdate: "2024-09-05",
      category: "Wearables",
      status: "progress",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: false,
    },
    {
      id: "3",
      picture: MacBook,
      title: "4K LED TV",
      numClick: 720,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 4,
      vendorRank: 1,
      lastUpdate: "2024-09-10",
      category: "Home Entertainment",
      status: "success",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: false,
    },
    {
      id: "4",
      picture: MacBook,
      title: "Gaming Laptop",
      numClick: 290,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 3,
      vendorRank: 1,
      lastUpdate: "2024-09-12",
      category: "Computers",
      status: "success",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: true,
    },
    {
      id: "5",
      picture: MacBook,
      title: "Noise Cancelling Headphones",
      numClick: 480,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 6,
      vendorRank: 2,
      lastUpdate: "2024-09-08",
      category: "Audio",
      status: "success",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: true,
    },
    {
      id: "6",
      picture: MacBook,
      title: "Smartphone",
      numClick: 850,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 10,
      vendorRank: 1,
      lastUpdate: "2024-09-15",
      status: "progress",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: false,
      category: "Mobile Phones",
    },
    {
      id: "7",
      picture: MacBook,
      title: "Bluetooth Speaker",
      numClick: 130,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 7,
      vendorRank: 3,
      lastUpdate: "2024-09-14",
      category: "Audio",
      status: "success",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: true,
    },
    {
      id: "8",
      picture: MacBook,
      title: "Home Security Camera",
      numClick: 250,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 4,
      vendorRank: 2,
      lastUpdate: "2024-09-13",
      category: "Smart Home",
      status: "progress",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: true,
    },
    {
      id: "9",
      picture: MacBook,
      title: "Electric Toothbrush",
      numClick: 150,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 5,
      vendorRank: 4,
      lastUpdate: "2024-09-16",
      category: "Health & Personal Care",
      status: "success",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: false,
    },
    {
      id: "10",
      picture: MacBook,
      title: "Air Purifier",
      numClick: 340,
      price: 12000000,
      lowestPrice: 200003232,
      vendorCount: 6,
      vendorRank: 2,
      lastUpdate: "2024-09-07",
      category: "Home Appliances",
      status: "failed",
      link: "/something",
      brand: "samsung",
      inventory: 120,
      viewNumber: 200,
      commercial: "آیتی بازار",
      type: "Accessory",
      hasInsurance: true,
    },
  ];

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
  const tableRef = useRef<TableRef<Products>>(null);

  return (
    <>
      <div className="mt-[30px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3>محصولات شما </h3>
          <div className="flex h-[54px] w-[363px] items-center gap-2 rounded-S bg-background-lighter py-[6px]">
            <div className="pr-2">
              <Icon name="Research" className="" />
            </div>
            <Input
              className="w-[323px] border-none bg-transparent focus:ring-0"
              placeholder={formatMessage(productsMessages.searchWithTitle)}
            />
          </div>
        </div>
        <Button>آپدیت و افزودن محصول جدید</Button>
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
