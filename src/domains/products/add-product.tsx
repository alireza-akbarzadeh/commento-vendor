import { Button, Icon } from "components";

export function AddProduct() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <Icon name="tag-2" />
          <h3 className="text-textAndIcon-darker text-titleMedium">
            افزودن تکی محصول
          </h3>
        </div>
        <p className="text-textAndIcon-darker text-bodylarge">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،{" "}
        </p>
        <Button className="w-[173px]">افزودن محصول با اکسل</Button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <Icon name="document" />
          <h3 className="text-textAndIcon-darker text-titleMedium">
            افزودن تکی محصول
          </h3>
        </div>
        <p className="text-textAndIcon-darker text-bodylarge">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،{" "}
        </p>
        <Button className="w-[173px]">افزودن محصول با ربات</Button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <Icon name="tag-2" />
          <h3 className="text-textAndIcon-darker text-titleMedium">
            افزودن تکی محصول
          </h3>
        </div>
        <p className="text-textAndIcon-darker text-bodylarge">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،{" "}
        </p>
        <Button className="w-[173px]">افزودن محصول جدید</Button>
      </div>
    </div>
  );
}
