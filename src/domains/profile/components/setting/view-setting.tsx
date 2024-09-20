import { NavLink } from "react-router-dom";
import { RowInfo } from "../row-info";

export function ViewSettings() {
  return (
    <div>
      <div className="mt-8 space-y-8">
        <div className="flex flex-col flex-wrap justify-between gap-y-8 rounded-XS border border-border-lighter py-4 pr-4 md:flex-row md:items-center">
          <RowInfo title="immediateDelivery" value="دارم" />
          <RowInfo title="installmentPayment" value="ندارم" />
          <RowInfo title="paymentSpot" value="ندارم" />
          <RowInfo title="shippingMerhod" value="باربری" />
          <RowInfo title="bulkPurchase" value="دارم" />
          <RowInfo title="yourResponseTime" value="۲ روز" />
        </div>
        <div className="flex max-w-[395px] gap-x-8 rounded-XS border border-border-lighter py-8 pr-4">
          <h3 className="text-textAndIcon-darker text-titleSmall">
            لینک شرایط خرید و ارسال در سایت شما
          </h3>
          <NavLink to="/" className="text-info-main text-labelLarge">
            مشاهده لینک
          </NavLink>
        </div>
        <div className="flex flex-col gap-x-8 gap-y-3 rounded-XS border border-border-lighter py-4 pr-4">
          <h3 className="text-textAndIcon-darker text-titleSmall">
            توضیحات تکمیلی
          </h3>
          <p className="text-textAndIcon-dark text-bodyLarge">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده،
          </p>
        </div>
      </div>
    </div>
  );
}
