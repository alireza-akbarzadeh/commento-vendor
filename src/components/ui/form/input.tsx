import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import { Icon, IconProps } from "components";
import * as React from "react";

import { Label } from "./label";
import { Button } from "../button/button";

const inputVariants = cva(
  "flex h-12 w-full border border-border-light bg-background-lightest px-3 text-sm ring-offset-background rounded-S file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-primary text-primary-foreground hover:border-primary/90 placeholder-primary-foreground focus-visible:ring-ring",
        destructive:
          "border-rose-600 focus:ring ring-rose-600 border-rose-400 hover:border-rose-600/90",
        outline: "border-none",
        secondary: "border-secondary  hover:border-secondary/80",
        info: "border-sky-500/100 text-sky-foreground hover:ring-sky-600 placeholder-sky-500/100",
        text: "border-b",
      },
      fullWidth: { true: "w-full" },
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
);

interface InputIconProps extends IconProps {
  position: "end" | "start";
  onIconCLick?: () => void;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: InputIconProps;
  fullWidth?: boolean;
  label?: string | React.ReactNode;
  labelClassName?: string;
  labelStyles?: React.CSSProperties;
  testId?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      fullWidth,
      variant,
      type,
      icon,
      label,
      labelClassName,
      labelStyles,
      testId,
      ...props
    },
    ref,
  ) => {
    const { onIconCLick, name, position, ...restIconProps } = icon || {};
    return (
      <div className="float-label-input relative">
        <input
          type={type}
          data-testid={testId}
          id={name}
          placeholder=""
          className={cn(inputVariants({ className, fullWidth, variant }))}
          ref={ref}
          {...props}
        />
        <Label
          htmlFor={props.id}
          className={`pointer-events-none absolute right-2 top-3 bg-white px-2 text-textAndIcon-dark transition duration-200 ease-in-out text-bodyMedium ${labelClassName}`}
          style={labelStyles}
        >
          {label}
        </Label>
        {icon && (
          <Button
            onClick={onIconCLick}
            asChild
            variant="text"
            className={cn(
              "absolute top-[50%] ml-2 -translate-x-1/2 -translate-y-1/2 transform",
              {
                "left-0": position === "start",
                "right-0": position === "end",
              },
            )}
          >
            <Icon
              size="medium"
              name={name as IconProps["name"]}
              {...restIconProps}
            />
          </Button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
