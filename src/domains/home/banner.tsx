import { Image } from "components";
import { Banner2Png, BannerPng } from "assets";

export function Banner() {
  return (
    <div className="columns-2 gap-6">
      <Image src={Banner2Png} className="" alt="banner" />
      <Image src={BannerPng} alt="banner" className="" />
    </div>
  );
}
