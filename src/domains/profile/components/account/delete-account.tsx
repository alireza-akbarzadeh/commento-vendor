import { MelatPng } from "assets";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Image,
} from "components";
import { profileMessages } from "domains/profile/profile-details.messages";
import { globalMessages } from "i18n/global.messages";
import { useIntl } from "react-intl";

export function DeleteAccount() {
  const { formatMessage } = useIntl();
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            icon="Trash"
            variant="text"
            className="h-[56px] w-auto rounded-M bg-background-lighter text-primary-main"
          >
            {formatMessage(profileMessages.deleteAccount)}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {formatMessage(profileMessages.deleteAccount)}
            </DialogTitle>
            <DialogDescription className="py-8 text-textAndIcon-darker text-bodylarge">
              {formatMessage(profileMessages.deleteAccountConfirmation)}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image src={MelatPng} alt="bank-logo" />
              <p className="text-textAndIcon-darker text-labelXLarge">
                ۰۶ ۲۹۶۰ ۰۰۰۰ ۰۰۱۰ ۰۳۲۴ ۲۰۰۰ ۰۱
              </p>
            </div>
            <p className="text-textAndIcon-light text-labelMedium">
              بانک ملی ایران
            </p>
          </div>

          <DialogFooter className="mt-6 flex gap-4">
            <DialogClose asChild>
              <Button fullWidth variant="outline">
                {formatMessage(globalMessages.cancel)}
              </Button>
            </DialogClose>
            <Button fullWidth>{formatMessage(globalMessages.confirm)}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
