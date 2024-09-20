import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form/form";
import { ComponentPropsWithoutRef } from "react";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { Checkbox, CheckboxPrimitiveRootType } from "./checkbox";
import { cn } from "lib/utils";

interface CheckBoxGroupControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  label: string;
  description?: string;
  itemClassName?: string;
  checkboxControll: Omit<ControllerProps<TFieldValues, TName>, "render">;
  checkboxProps?: ComponentPropsWithoutRef<CheckboxPrimitiveRootType>;
  checkItems: { id: string; label: string }[];
  view?: "column" | "row";
}

export function CheckboxGroupController<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: CheckBoxGroupControllerProps<TFieldValues, TName>) {
  const {
    checkboxControll,
    checkboxProps,
    label,
    itemClassName,
    description,
    checkItems,
    view = "column",
    ...rest
  } = props;

  return (
    <FormField
      {...checkboxControll}
      {...rest}
      render={({ field }) => (
        <FormItem>
          <div className="mb-4">
            {label && (
              <div className="space-y-1 leading-none">
                <FormLabel className="text-textAndIcon-darker text-titleMedium">
                  {label}
                </FormLabel>
              </div>
            )}
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </div>
          <div
            className={cn("flex gap-x-6 space-x-3", {
              "flex-col items-center space-y-3": view === "column",
            })}
          >
            {checkItems?.map((item) => (
              <FormField
                key={item.id}
                control={checkboxControll.control}
                name={field.name}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-start gap-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value?.filter(
                                    (value: string) => value !== item.id,
                                  ),
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-textAndIcon-dark text-labelXLarge">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
