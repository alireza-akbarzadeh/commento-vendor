import { LogoSvg } from "assets";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link className="h-10 w-[84px] cursor-pointer" to="/">
      <img src={LogoSvg} alt="logo" className="size-full object-contain" />
    </Link>
  );
};
