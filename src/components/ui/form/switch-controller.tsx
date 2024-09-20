import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form/form";
import { cn } from "lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Switch, type SwitchPrimitivesTypes } from "../switch";

interface SwitchControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  label: string;
  description?: string;
  itemClassName?: string;
  switchControll: Omit<ControllerProps<TFieldValues, TName>, "render">;
  switchProps?: ComponentPropsWithoutRef<SwitchPrimitivesTypes>;
}

export function SwitchController<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: SwitchControllerProps<TFieldValues, TName>) {
  const {
    switchControll,
    switchProps,
    label,
    itemClassName,
    description,
    ...rest
  } = props;

  return (
    <FormField
      render={({ field }) => (
        <FormItem className={cn("flex gap-x-4", itemClassName)}>
          {description && <FormDescription>{description}</FormDescription>}
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              {...field}
              {...switchProps}
            />
          </FormControl>
          {label && <FormLabel>{label}</FormLabel>}
          <FormMessage />
        </FormItem>
      )}
      {...switchControll}
      {...rest}
    />
  );
}
