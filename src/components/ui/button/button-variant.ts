import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap py-4 px-[22px] rounded-xl text-labelLarge  transition-colors disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-main text-primary-lighter focus:bg-primary-dark  hover:bg-primary-dark focus:ring-1 focus:ring-primary-main focus-visible:outline-none disabled:pointer-events-none disabled:bg-background-dark',
        secondary:
          'bg-primary-lighter  text-primary-main border-[1.5px] border-primary-main hover:bg-primary-light active:bg-primary-light  focus:bg-primary-light disabled:text-textAndIcon-light disabled:border-textAndIcon-light disabled:opacity-65',

        tertiary: 'bg-transparent',
        link: 'text-info-main  focus:bg-info-lighter focus:ring focus:ring-info-lighter disabled:opacity-75 disabled:text-textAndIcon-light   hover:bg-info-lighter',
        natural:
          'bg-background-dark  text-textAndIcon-darker border-[1.5px] border-border-darker hover:bg-background-lighter  focus:bg-background-darker disabled:border-border-lighter disabled:bg-background-lightest  disabled:text-textAndIcon-light  disabled:opacity-65',
        text: 'bg-transparent text-primary-main focus:ring-2 focus:ring-primary-light focus:ring-offset-1 disabled:opacity-60 disabled:text-textAndIcon-light',
        error:
          'bg-error-light text-destructive-f oreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground ',
        info: 'bg-sky-500/100 text-primary-foreground hover:bg-sky-600',
      },
      size: {
        big: 'h-14 w-[125px]',
        medium: 'h-12 w-[125px]',
        small: 'h-10 w-[125px]',
      },

      fullWidth: {
        true: 'w-full',
      },

      roundedFull: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      fullWidth: false,
      roundedFull: false,
    },
  }
);
