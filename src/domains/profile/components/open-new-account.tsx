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
  Input,
} from 'components';
import { useIntl } from 'react-intl';
import { profileMessages } from '../profile-details.messages';
import { globalMessages } from 'i18n/global.messages';

export function OpenNewAccount() {
  const { formatMessage } = useIntl();
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            icon="Plus-Square"
            iconPosition="left"
            className="w-[196px] rounded-M  h-[56px]"
          >
            {formatMessage(profileMessages.openNewAccount)}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {formatMessage(profileMessages.openNewAccount)}
            </DialogTitle>
            <DialogDescription className="text-textAndIcon-darker pt-6">
              شماره شبا باید متعلق به کدملی که با آن ثبت نام شده باشد.
            </DialogDescription>
          </DialogHeader>
          <Input label="شماره شبا *" />
          <DialogFooter className="flex gap-4 mt-6">
            <DialogClose asChild>
              <Button fullWidth variant="outline">
                {formatMessage(globalMessages.cancel)}
              </Button>
            </DialogClose>
            <Button fullWidth>
              {formatMessage(profileMessages.addAccount)}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
