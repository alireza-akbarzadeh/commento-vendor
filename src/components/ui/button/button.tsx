import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import * as React from 'react';
import { buttonVariants } from './button-variant';
import { Spin } from '../spin';
import { Icon, IconProps } from '../icon/icon';

export interface ButtonPropsBase
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  roundedFull?: boolean;
  iconPosition?: 'left' | 'right';
}

export type ButtonProps =
  | (ButtonPropsBase & { iconOnly?: false; icon?: IconProps['name'] })
  | (ButtonPropsBase & { iconOnly: true; icon: IconProps['name'] });

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      fullWidth,
      variant,
      size,
      roundedFull,
      asChild = false,
      children,
      loading,
      disabled,
      iconOnly,
      icon,
      iconPosition = 'right',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const renderIcon = () =>
      icon && (
        <Icon
          className={iconPosition === 'left' ? 'ml-2' : 'mr-2'}
          name={icon}
        />
      );

    const buttonContent = (
      <>
        {iconOnly ? (
          renderIcon()
        ) : (
          <>
            {iconPosition === 'left' && renderIcon()}
            {loading ? <Spin size="18px" variant="light" /> : children}
            {iconPosition === 'right' && renderIcon()}
          </>
        )}
      </>
    );

    return (
      <Comp
        disabled={loading || disabled}
        className={cn(
          buttonVariants({ variant, size, fullWidth, roundedFull, className })
        )}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
