import { IphonePng } from "assets";
import { Badge, Button, Image } from "components";

export function ProductPicture() {
  return (
    <>
      <div className="rounded-M bg-background-lighter p-6">
        <div className="flex items-center justify-between">
          <p className="text-primary-main text-titleSmall">تصویر محصول</p>
          <Badge className="rounded-XS px-4" variant="success">
            انتشار یافته
          </Badge>
        </div>
        <div className="mt-3 rounded-S bg-background-light px-[51px] py-[48px]">
          <Image
            src={IphonePng}
            alt="iphone"
            className="mx-auto size-[289px]"
          />
        </div>
        <div className="mt-3 grid grid-cols-1 gap-x-2 md:grid-cols-4">
          <div className="relative rounded-XS bg-background-light p-2.5">
            <Image
              src={IphonePng}
              alt="iphone"
              className="mx-auto size-[74px]"
            />
            <div className="absolute -top-2 right-0 z-10 translate-x-[45px]">
              <Button iconOnly icon="Trash" variant="text" />
            </div>
          </div>
          <div className="relative rounded-XS bg-background-light p-2.5">
            <Image
              src={IphonePng}
              alt="iphone"
              className="mx-auto size-[74px]"
            />
            <div className="absolute -top-2 right-0 z-10 translate-x-[45px]">
              <Button iconOnly icon="Trash" variant="text" />
            </div>
          </div>
          <div className="relative rounded-XS bg-background-light p-2.5">
            <Image
              src={IphonePng}
              alt="iphone"
              className="mx-auto size-[74px]"
            />
            <div className="absolute -top-2 right-0 z-10 translate-x-[45px]">
              <Button iconOnly icon="Trash" variant="text" />
            </div>
          </div>
          <div className="flex items-center justify-center rounded-XS border-[3px] border-dashed border-border-lighter">
            <Button iconOnly icon="Add-New" iconSize="xLarge" variant="text" />
          </div>
        </div>
      </div>
      <div className="mt-3 flex gap-4">
        <Button fullWidth variant="outline" className="rounded-M">
          غیر فعال شدن محصول
        </Button>
        <Button fullWidth icon="Edit" className="rounded-M">
          ویرایش محصول
        </Button>
      </div>
    </>
  );
}
