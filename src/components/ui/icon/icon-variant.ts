import { cva } from "class-variance-authority";

export const iconVariants = cva("", {
  variants: {
    sizes: {
      xxSmall: "w-4 h-4",
      xSmall: "w-[18px] h-[18px]",
      medium: "w-6 h-6",
      large: "w-7 h-7",
      xLarge: "w-8 h-8",
    },
    colors: {
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
    },
  },
  defaultVariants: {
    sizes: "medium",
    colors: "primary",
  },
});
