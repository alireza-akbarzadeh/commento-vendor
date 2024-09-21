import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components";
import { profileMessages } from "domains/profile/profile-details.messages";
import { globalMessages } from "i18n/global.messages";
import React from "react";
import { useIntl } from "react-intl";

type ReportDialogProps = {
  title: string;
  type: "add" | "delete" | "change";
};

export const UserDialog = (props: ReportDialogProps) => {
  const { title, type } = props;
  const { formatMessage } = useIntl();
  const [valuse, setValuse] = React.useState();
  const onChange = () => {
    // do something
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          {type === "change" && (
            <Button
              variant="text"
              className="text-info-main"
              iconOnly
              icon="Edit"
              size="medium"
            />
          )}
          {type === "add" && (
            <Button icon="Plus">
              {formatMessage(profileMessages.addNewUser)}
            </Button>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[532px] p-8">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {type !== "delete" && (
          <>
            <Input fullWidth label={formatMessage(profileMessages.fullName)} />
            {type === "add" && (
              <Input
                fullWidth
                label={formatMessage(profileMessages.phoneNumber)}
              />
            )}
            <Select onValueChange={onChange} defaultValue={valuse}>
              <SelectTrigger>
                <SelectValue
                  placeholder={formatMessage(profileMessages.authorityLevel)}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="super-admin">سوپر ادمین</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {type === "add" && (
              <Input fullWidth label={formatMessage(profileMessages.email)} />
            )}
          </>
        )}
        {type === "delete" && (
          <p className="text-textAndIcon-darker text-bodyLarge">
            {formatMessage(globalMessages.approvedDelete, { msg: "کاربر" })}
          </p>
        )}
        <div className="mt-1 flex gap-2">
          <DialogClose asChild>
            <Button fullWidth variant="outline" className="w-full">
              {formatMessage(globalMessages.cancel)}
            </Button>
          </DialogClose>
          <Button fullWidth className="w-full">
            {formatMessage(
              type === "change"
                ? globalMessages.saveChanges
                : type === "delete"
                  ? globalMessages.delete
                  : globalMessages.create,
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
