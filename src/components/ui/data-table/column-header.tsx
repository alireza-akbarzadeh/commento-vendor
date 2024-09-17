import { Column } from "@tanstack/react-table";
import { cn } from "lib/utils";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { useIntl } from "react-intl";
import { tableMessages } from "./table-messages";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }
  const { formatMessage } = useIntl();

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="text"
            size="small"
            className="data-[state=open]:bg-accent -ml-3 flex h-8"
          >
            {column.getIsSorted() === "desc" ? (
              <Icon
                name="down-arrow"
                className="ml-1 text-textAndIcon-light"
                size="xSmall"
              />
            ) : column.getIsSorted() === "asc" ? (
              <Icon
                name="up-arrow"
                className="ml-1 text-textAndIcon-light"
                size="xSmall"
              />
            ) : (
              <Icon
                name="Filters"
                className="ml-1 text-textAndIcon-light"
                size="xxSmall"
              />
            )}
            <span>{title}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <Icon
              size="small"
              name="up-arrow"
              className="text-muted-foreground/70 mr-2 h-3.5 w-3.5"
            />
            <span className="text-textAndIcon-light text-labelMedium">
              {formatMessage(tableMessages.asc)}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <Icon
              size="small"
              name="down-arrow"
              className="text-muted-foreground/70 mr-2 h-3.5 w-3.5"
            />
            <span className="text-textAndIcon-light text-labelMedium">
              {formatMessage(tableMessages.Desc)}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="space-x-2"
            onClick={() => column.toggleVisibility(false)}
          >
            <Icon
              size="xSmall"
              name="eye"
              className="text-muted-foreground/70 mr-2 h-3.5 w-3.5"
            />
            <span className="text-textAndIcon-light text-labelMedium">
              {formatMessage(tableMessages.hide)}
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center"
            onClick={() => column.clearSorting()}
          >
            <Icon
              size="xSmall"
              name="No-Filter"
              className="text-muted-foreground/70 mr-2 h-3.5 w-3.5"
            />
            <span className="pt-1 text-textAndIcon-light text-labelMedium">
              {formatMessage(tableMessages.removeFilter)}
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
