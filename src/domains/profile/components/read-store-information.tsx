import { useIntl } from 'react-intl';
import { profileMessages } from '../profile-details.messages';
import { RowInfo } from './row-info';
import { Image } from 'components';
import { MapPng } from 'assets';

export function ReadStoreInformation() {
  const { formatMessage } = useIntl();
  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row justify-between md:items-center flex-wrap gap-y-8">
        <RowInfo title="storeName" value="دیجی لند" />
        <RowInfo title="vendorFullName" value="حسام صادقی" />
        <RowInfo title="vendorNationalCode" value="۰۵۲۰۸۷۴۵۷۶" />
        <RowInfo title="phoneNumber" value="۰۹۱۲۳۴۵۶۷۴۷" />
        <RowInfo title="emailAddress" value="dijital_land@gmail.com" />
        <RowInfo title="websiteAddress" value="www.dijiland.com" />
        <RowInfo title="birthDate" value="تاریخ تولد" />
        <RowInfo title="state" value="تهران" />
        <RowInfo title="city" value="تهران" />
        <div className="flex flex-col gap-y-8 basis-[66%]">
          <div className="flex gap-3 flex-1">
            <h4 className="text-textAndIcon-light text-labelXLarge">
              {formatMessage(profileMessages.address)}
            </h4>
            <p className="text-textAndIcon-darker text-labelXLarge">
              خیابان وزرا روبه روی سینما آزادی پلاک ۲۰ خیابان وزرا روبه روی
              سینما آزادی پلاک ۲۰
            </p>
          </div>
          <div className="columns-2">
            <div className="flex gap-3">
              <h4 className="text-textAndIcon-light text-labelXLarge">
                {formatMessage(profileMessages.postalCode)}
              </h4>
              <p className="text-textAndIcon-darker text-labelXLarge">
                ۱۳۸۷۶۵۹۸۵۴
              </p>
            </div>
            <div className="flex gap-3">
              <h4 className="text-textAndIcon-light text-labelXLarge">
                {formatMessage(profileMessages.telephoneNumber)}
              </h4>
              <p className="text-textAndIcon-darker text-labelXLarge">
                ۰۲۱۲۳۴۵۶۷۶
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 basis-[33%]">
          <Image src={MapPng} alt="map" />
        </div>
        <RowInfo icon="whatsapp" value="www.dijiland.com" />
        <RowInfo icon="telegram" value="dijital_land@gmail.com" />
        <RowInfo icon="instagram" value="۰۹۱۲۳۴۵۶۷۴۷" />
      </div>
    </div>
  );
}
