import { CURRENCY } from 'constant';
import { SummaryItem } from './summary-item';
import { FormattedNumber } from 'react-intl';
import { Badge } from 'components';
import { Link } from 'react-router-dom';
import { ProductPicture } from './product-picture';

export const ProductSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 mt-6 gap-x-8">
      <div className="col-span-4  space-y-6">
        <SummaryItem title="دسته بندی" value="کالای دیجیتال" />
        <SummaryItem title="برند" value="اپل" />
        <SummaryItem
          title="تا کمترین قیمت"
          customValue={
            <div className="flex gap-1 items-center">
              <FormattedNumber value={1087706} currency="IRR" />
              <span className="text-textAndIcon-light">{CURRENCY.IR}</span>
            </div>
          }
        />
        <SummaryItem
          title="تا کمترین قیمت"
          customValue={
            <div className="flex gap-2 items-center">
              <Badge variant="error" className="px-4 rounded-S">
                نردبان شده
              </Badge>
              <Badge variant="info" className="px-4 rounded-S ">
                تخفیف
              </Badge>
            </div>
          }
        />
        <SummaryItem title="سطح شما" value="12" />
        <SummaryItem title="رتبه شما بین سایر فروشندگان" value="++A" />
        <SummaryItem title="آخرین بروزرسانی" value="۱۴۰۳/۰۹/۱۴" />
        <SummaryItem
          title="محتوای محصول"
          value="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، "
        />
        <SummaryItem
          customTitle={
            <div className="flex items-center gap-1 col-span-2">
              <h4 className="text-textAndIcon-light text-labelXLarge  ">
                لینک محصول آی تی بازار
              </h4>
              <span className="text-textAndIcon-light text-labelSmall">
                آیتی بازار
              </span>
            </div>
          }
          customValue={
            <Link
              className="text-info-main text-labelXLarge"
              to="https://www.itbazar.com/p_100083.aspx"
            >
              https://www.itbazar.com/p_100083.aspx
            </Link>
          }
        />
        <SummaryItem
          customTitle={
            <div className="flex items-center gap-1  col-span-2">
              <h4 className="text-textAndIcon-light text-labelXLarge  ">
                لینک محصول
              </h4>
              <span className="text-textAndIcon-light text-labelSmall">
                سایت شما
              </span>
            </div>
          }
          customValue={
            <Link
              className="text-info-main text-labelXLarge"
              to="https://www.itbazar.com/p_100083.aspx"
            >
              https://www.itbazar.com/p_100083.aspx
            </Link>
          }
        />
        <SummaryItem title="موجودی محصول" value="۱۶ عدد" />
        <SummaryItem title="گارانتی" value="دارد" />
        <SummaryItem title="تعداد کلیک" value="۳۴۵۶۷" />
        <SummaryItem
          customTitle={
            <div className="flex items-center gap-1  col-span-2">
              <h4 className="text-textAndIcon-light text-labelXLarge  ">
                رتبه تعداد کلیک
              </h4>
              <span className="text-textAndIcon-light text-labelSmall">
                بین محصولات شما
              </span>
            </div>
          }
          value="۱۳"
        />
        <SummaryItem title="نوع محصول" value="نو" />
      </div>
      <div className="col-span-2">
        <ProductPicture />
      </div>
    </div>
  );
};
