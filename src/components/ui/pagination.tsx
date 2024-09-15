import { cn } from "lib/utils";
import * as React from "react";
import { ButtonProps, buttonVariants } from "./button";
import { Icon } from "./icon/icon";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-2", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "medium",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "primary" : "text",
        roundedFull: true,
        size,
      }),
      `${className} size-6`,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="medium"
    className={cn("gap-1 rounded-full border border-border-lighter", className)}
    {...props}
  >
    <Icon name="left-arrow-2" className="rotate-180" />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationEnd = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="medium"
    className={cn("gap-1 rounded-full border border-border-lighter", className)}
    {...props}
  >
    <Icon name="double-chevron" />
  </PaginationLink>
);
PaginationEnd.displayName = "PaginationEnd";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="medium"
    className={cn(
      "size-6 gap-1 rounded-full border border-border-lighter",
      className,
    )}
    {...props}
  >
    <Icon name="left-arrow-2" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationStart = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="medium"
    className={cn(
      "size-6 gap-1 rounded-full border border-border-lighter",
      className,
    )}
    {...props}
  >
    <Icon name="double-chevron" className="rotate-180" />
  </PaginationLink>
);
PaginationStart.displayName = "PaginationStart";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <span className="sr-only">more page</span>
    <span>...</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationStart,
  PaginationEnd,
};
