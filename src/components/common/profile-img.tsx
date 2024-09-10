import { Avatar, AvatarFallback, AvatarImage } from 'components';
import { cn } from 'lib/utils';

type ProfileImgProps = {
  src: string;
  fallback?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
};
export function ProfileImg(props: ProfileImgProps) {
  const { fallback = 'CO', src, size = 'medium', className } = props;
  const sizes = {
    small: 'size-6',
    medium: 'size-[42px]',
    large: 'size-[120px]',
  };

  return (
    <Avatar className={cn(sizes[size], className)}>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
