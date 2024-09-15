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
} from "components";
import { useIntl } from "react-intl";

import { globalMessages } from "i18n/global.messages";
import { profileMessages } from "domains/profile/profile-details.messages";

export function OpenNewAccount() {
  const { formatMessage } = useIntl();
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button icon="Plus-Square" className="h-[56px] w-[196px] rounded-M">
            {formatMessage(profileMessages.openNewAccount)}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {formatMessage(profileMessages.openNewAccount)}
            </DialogTitle>
            <DialogDescription className="pt-6 text-textAndIcon-darker">
              شماره شبا باید متعلق به کدملی که با آن ثبت نام شده باشد.
            </DialogDescription>
          </DialogHeader>
          <Input label="شماره شبا *" />
          <DialogFooter className="mt-6 flex gap-4">
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
