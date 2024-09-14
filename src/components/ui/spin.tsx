import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";

const spinVariants = cva(
  "animate-spin inline-block border-current border-t-transparent rounded-full",
  {
    variants: {
      variant: {
        primary: "text-primary-main",
        info: "text-info-main",
        light: "text-textAndIcon-lightest",
        error: "text-error-main",
        success: "text-success-main",
        warning: "text-warning-main",
      },
      size: {
        xs: "w-4 h-4 border-[1px]",
        sm: "w-6 h-6 border-[1.5px]",
        md: "w-8 h-8 border-2",
        lg: "w-10 h-10 border-[2.5px]",
        xl: "w-12 h-12 border-3",
      },
      speed: {
        slow: "animate-spin-slow",
        normal: "animate-spin",
        fast: "animate-spin-fast",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      speed: "normal",
    },
  },
);

type SpinVariants = VariantProps<typeof spinVariants>;

export interface SpinProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<SpinVariants, "size"> {
  label?: string;
  size?: SpinVariants["size"] | `${number}${"px" | "rem" | "em" | "%"}`;
  color?: string;
}

export const Spin: React.FC<SpinProps> = ({
  variant,
  size = "md",
  speed,
  className,
  label = "Loading...",
  color,
  style,
  ...props
}) => {
  const isCustomSize =
    typeof size === "string" && !["xs", "sm", "md", "lg", "xl"].includes(size);

  const spinClasses = cn(
    spinVariants({
      variant: color ? undefined : variant,
      size: isCustomSize ? undefined : (size as SpinVariants["size"]),
      speed,
    }),
    className,
  );

  const spinStyle: React.CSSProperties = {
    ...style,
    ...(isCustomSize ? { width: size, height: size } : {}),
    ...(color ? { color } : {}),
  };

  return (
    <div
      className={spinClasses}
      role="status"
      aria-label={label}
      style={spinStyle}
      {...props}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
};

Spin.displayName = "Spin";
