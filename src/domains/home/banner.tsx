import { Image } from "components";
import { Banner2Png, BannerPng } from "assets";

export function Banner() {
  return (
    <div className="columns-1 space-y-6 md:columns-2 lg:space-x-6">
      <Image src={Banner2Png} alt="banner" />
      <Image src={BannerPng} alt="banner" className="" />
    </div>
  );
}
