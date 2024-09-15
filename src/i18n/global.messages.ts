import { defineMessages } from "react-intl";

const scope = "Domains.globalMessages";

export const globalMessages = defineMessages({
  viewAll: {
    id: `${scope}.viewAll`,
    defaultMessage: "نمایش همه",
  },
  wishToSell: {
    id: `${scope}.wishToSell`,
    defaultMessage: "میخواهم بفروشم",
  },
  submitChanges: {
    id: `${scope}.submitChanges`,
    defaultMessage: "ثبت تغییرات",
  },
  editInformation: {
    id: `${scope}.editInformation`,
    defaultMessage: "ویرایش اطلاعات",
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: "انصراف",
  },
  confirm: {
    id: `${scope}.confirm`,
    defaultMessage: "تایید",
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: "وضعیت",
  },
  approved: {
    id: `${scope}.approved`,
    defaultMessage: "تایید شده",
  },
  rejected: {
    id: `${scope}.rejected`,
    defaultMessage: "رد شده",
  },
  inProgress: {
    id: `${scope}.inProgress`,
    defaultMessage: "در انتظار تایید",
  },
});
