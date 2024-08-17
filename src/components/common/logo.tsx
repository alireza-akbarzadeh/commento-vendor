import { LogoSvg } from 'assets';
export const Logo = () => {
  return (
    <div className="w-[84px] h-10">
      <img src={LogoSvg} alt="logo" className="size-full object-contain" />
    </div>
  );
};
