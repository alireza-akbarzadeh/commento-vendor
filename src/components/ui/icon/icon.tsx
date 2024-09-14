import IcoMoon from "react-icomoon";

import { iconNames, IconType } from "./icon-names";
import iconSet from "./selection.json";
import { cn } from "lib/utils";

type IconSize = "xxSmall" | "xSmall" | "small" | "medium" | "large" | "xLarge";

type IconProps = {
  size?: IconSize | number;
  name: IconType;
  style?: React.CSSProperties;
  className?: string;
  parentClassName?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

export const sizes: Record<IconSize, number> = {
  xxSmall: 16,
  xSmall: 18,
  small: 20,
  medium: 24,
  large: 28,
  xLarge: 32,
};

const Icon = (props: IconProps): JSX.Element => {
  const {
    name,
    size = "medium",
    onClick,
    disabled = false,
    parentClassName,
    className,
    style,
    ...rest
  } = props;
  return (
    <div className={cn(parentClassName)}>
      <IcoMoon
        className={cn(`text-content-primary ${className}`)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        iconSet={iconSet as any}
        icon={name}
        size={typeof size !== "number" ? sizes[size] : size}
        style={{
          cursor: disabled ? "not-allowed !important" : "pointer",
          ...style,
        }}
        onClick={(event) => {
          if (!disabled) {
            onClick?.(event);
          }
        }}
        {...rest}
      />
    </div>
  );
};

export type { IconProps, IconType, IconSize };
export { Icon, iconNames };
