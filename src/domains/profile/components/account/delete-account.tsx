import { MelatPng } from 'assets';
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
} from 'components';
import { profileMessages } from 'domains/profile/profile-details.messages';
import { globalMessages } from 'i18n/global.messages';
import { useIntl } from 'react-intl';

export function DeleteAccount() {
  const { formatMessage } = useIntl();
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            icon="Trash"
            iconPosition="left"
            variant="text"
            className="w-auto rounded-M  h-[56px] bg-background-lighter text-primary-main"
          >
            {formatMessage(profileMessages.deleteAccount)}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {formatMessage(profileMessages.deleteAccount)}
            </DialogTitle>
            <DialogDescription className="py-8 text-bodylarge text-textAndIcon-darker">
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

          <DialogFooter className="flex gap-4 mt-6">
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
