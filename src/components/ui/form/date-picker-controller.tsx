import { cn } from "lib/utils";
import { Button } from "../button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { format } from "date-fns-jalali";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../dropdown-menu";
import { Icon } from "../icon/icon";
import { Calendar, CalendarProps } from "../calendar";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { FORMAT } from "constant";

interface DatePickerControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  label: string;
  description?: string;
  form: Omit<ControllerProps<TFieldValues, TName>, "render">;
  calendar: Omit<CalendarProps, "selected" | "onSelect">;
  placeholder?: string;
}
export function DatePickerController<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: DatePickerControllerProps<TFieldValues, TName>) {
  const { form, placeholder, label, calendar, description, ...rest } = props;

  return (
    <FormField
      render={({ field }) => (
        <FormItem className="relative flex flex-col">
          <FormLabel className="absolute right-1 -translate-y-1 bg-background-lightest px-2 font-thin text-textAndIcon-dark text-bodySmall">
            {label}
          </FormLabel>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "flex h-[48px] w-full justify-between border-border-light",
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value ? (
                    format(field.value, FORMAT.DATE)
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <Icon
                    name="calendar"
                    className="ml-auto h-4 w-4 opacity-50"
                  />
                </Button>
              </FormControl>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-0" align="start">
              <Calendar
                selected={field.value}
                onSelect={field.onChange}
                {...calendar}
              />
            </DropdownMenuContent>
          </DropdownMenu>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      control={form.control}
      {...form}
      {...rest}
    />
  );
}
