import { IphonePng } from 'assets';
import { Badge, Button, Image } from 'components';

export function ProductPicture() {
  return (
    <>
      <div className="bg-background-lighter rounded-M p-6">
        <div className="flex items-center justify-between">
          <p className="text-titleSmall text-primary-main">تصویر محصول</p>
          <Badge className=" rounded-XS px-4" variant="success">
            انتشار یافته
          </Badge>
        </div>
        <div className="bg-background-light mt-3 rounded-S px-[51px] py-[48px]">
          <Image
            src={IphonePng}
            alt="iphone"
            className="size-[289px] mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-3 gap-x-2">
          <div className="bg-background-light relative  rounded-XS p-2.5">
            <Image
              src={IphonePng}
              alt="iphone"
              className="size-[74px] mx-auto"
            />
            <div className="absolute z-10  -top-2  translate-x-[45px] right-0">
              <Button iconOnly icon="Trash" variant="text" />
            </div>
          </div>
          <div className="bg-background-light relative  rounded-XS p-2.5">
            <Image
              src={IphonePng}
              alt="iphone"
              className="size-[74px] mx-auto"
            />
            <div className="absolute z-10  -top-2  translate-x-[45px] right-0">
              <Button iconOnly icon="Trash" variant="text" />
            </div>
          </div>
          <div className="bg-background-light relative  rounded-XS p-2.5">
            <Image
              src={IphonePng}
              alt="iphone"
              className="size-[74px] mx-auto"
            />
            <div className="absolute z-10  -top-2  translate-x-[45px] right-0">
              <Button iconOnly icon="Trash" variant="text" />
            </div>
          </div>
          <div className="border-dashed border-[3px] border-border-lighter  rounded-XS flex items-center justify-center">
            <Button iconOnly icon="Add-New" iconSize="xLarge" variant="text" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-3">
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
