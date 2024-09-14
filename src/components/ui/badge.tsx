import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center  text-nowrap border px-4 py-1.5 text-labelXSmall transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        info: "border-info-lighter bg-info-lighter text-info-main",
        secondary:
          "border-secondary-lighter bg-secondary-lighter text-secondary-main",
        success: "border-success-lighter bg-success-lighter text-success-main",
        error: "border-error-lighter bg-error-lighter text-error-main",
        text: "bg-primary-lighter text-primary-main",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  ),
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
