import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'components/ui/form/form';
import { Input, InputProps } from 'components/ui/form/input';
import { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

interface InputControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  label: string;
  description?: string;
  inputControll: Omit<ControllerProps<TFieldValues, TName>, 'render'>;
  inputProps?: InputProps;

  //   render?: (field: ControllerRenderProps<FieldValues, TName>) => ReactNode;
}

export function InputController<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: InputControllerProps<TFieldValues, TName>) {
  const { inputControll, inputProps, label, description, ...rest } = props;

  return (
    <FormField
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              label={
                <FormLabel className="text-bodySmall text-textAndIcon-dark">
                  {label}
                  {inputControll.rules?.required ? ' *' : ''}
                </FormLabel>
              }
              {...field}
              {...inputProps}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      {...inputControll}
      {...rest}
    />
  );
}
