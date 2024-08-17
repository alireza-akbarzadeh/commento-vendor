import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { icons, LucideProps } from 'lucide-react';
import { forwardRef } from 'react';

const iconVariants = cva('', {
  variants: {
    sizes: {
      medium: 'size-6',
      xxSmall: 'size-4',
      xSmall: 'size-[18px]',
      large: 'size-7',
      xLarge: 'size-8',
    },
    colors: {
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
  },
  defaultVariants: {
    sizes: 'medium',
    colors: 'primary',
  },
});

export interface IconProps
  extends Omit<LucideProps, 'ref'>,
    VariantProps<typeof iconVariants> {
  name: keyof typeof icons;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name, sizes = 'medium', className, colors, ...rest } = props;
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      ref={ref}
      className={cn('rounded-full', iconVariants({ sizes, colors, className }))}
      {...rest}
    />
  );
});

Icon.displayName = 'Icon';

export { iconVariants, Icon };
