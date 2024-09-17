import { MacBook, uploadSvg } from "assets";
import { Icon, Image } from "components";

import { useIntl } from "react-intl";

export const UploadImage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-2">
            <Image src={uploadSvg} alt="upload-svg" />
            <p className="text-textAndIcon-darker text-labelXLarge">
              آپلود تصویر مدارک
            </p>
          </div>
          <div className="flex-1 rounded-M border border-dashed border-border-lighter p-6">
            <p className="text-textAndIcon-dark text-labelMedium">
              نوشته ها خوانا و عکس واضح باشد
            </p>
            <p className="text-textAndIcon-dark text-labelMedium before:size-2 before:rounded-full before:bg-gray-400">
              حجم عکس از ۵ مگابایت بیشتر نباشد
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="relative">
          <div className="absolute right-2 top-2 z-10 rounded-XSS bg-background-lightest p-1">
            <Icon name="Trash" />
          </div>
          <Image
            src={MacBook}
            alt="macbook"
            className="h-[150px] w-[120px] rounded-XS"
          />
          <span className="mt-3 text-textAndIcon-light text-labelMedium">
            123kb
          </span>
        </div>
      </div>
    </>
  );
};
