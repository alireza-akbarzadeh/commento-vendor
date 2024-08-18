import { type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';
import { icons, LucideProps } from 'lucide-react';
import { forwardRef } from 'react';
import { iconVariants } from './icon-variant';

export interface IconProps
  extends Omit<LucideProps, 'ref'>,
    VariantProps<typeof iconVariants> {
  name: keyof typeof icons;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name, sizes = 'medium', className, colors, ...rest } = props;
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      ref={ref}
      className={cn('', iconVariants({ sizes, colors }), className)}
      {...rest}
    />
  );
});

Icon.displayName = 'Icon';
