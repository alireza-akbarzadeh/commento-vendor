import { LogoSvg } from 'assets';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link className="w-[84px] h-10 cursor-pointer" to="/">
      <img src={LogoSvg} alt="logo" className="size-full object-contain" />
    </Link>
  );
};
