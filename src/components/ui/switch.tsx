"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "lib/utils";
import * as React from "react";

type SwitchPrimitivesTypes = typeof SwitchPrimitives.Root;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<SwitchPrimitivesTypes>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-[32px] w-[50px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-main data-[state=unchecked]:bg-textAndIcon-lighter",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "shadow-elevation3 pointer-events-none block size-[24px] rounded-full bg-background-light ring-0 transition-transform data-[state=checked]:-translate-x-[20px] data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-background-light",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;
export { Switch, type SwitchPrimitivesTypes };
