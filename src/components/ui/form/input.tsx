import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { Icon, IconProps } from 'components';
import * as React from 'react';

import { Label } from './label';
import { Button } from '../button/button';

const inputVariants = cva(
  'flex h-12 w-full border border-border-light bg-background-lightest px-3 text-sm ring-offset-background rounded-S file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border-primary text-primary-foreground hover:border-primary/90 placeholder-primary-foreground focus-visible:ring-ring',
        destructive:
          'border-rose-600 focus:ring ring-rose-600 border-rose-400 hover:border-rose-600/90',
        outline: 'border-none',
        secondary: 'border-secondary  hover:border-secondary/80',
        info: 'border-sky-500/100 text-sky-foreground hover:ring-sky-600 placeholder-sky-500/100',
        text: 'border-b',
      },
      fullWidth: { true: 'w-full' },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
);

interface InputIconProps extends IconProps {
  position: 'end' | 'start';
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
    ref
  ) => {
    const { onIconCLick, name, position, ...restIconProps } = icon || {};
    return (
      <div className="relative float-label-input">
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
          className={`absolute top-4 right-2 text-gray-400 pointer-events-none transition duration-200 ease-in-out bg-white px-2 text-grey-darker ${labelClassName}`}
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
              'ml-2 absolute  top-[50%] transform -translate-y-1/2 -translate-x-1/2',
              {
                'left-0': position === 'start',
                'right-0': position === 'end',
              }
            )}
          >
            <Icon
              size="medium"
              name={name as IconProps['name']}
              {...restIconProps}
            />
          </Button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
