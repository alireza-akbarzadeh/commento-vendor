import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  DatePickerController,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components";

import { globalMessages } from "i18n/global.messages";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { z } from "zod";
import { profileMessages } from "../profile-details.messages";
import { UploadImage } from "./upload-image";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});
export const AddDocument = () => {
  const { formatMessage } = useIntl();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const onSubmit = () => {};
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button icon="Trash" fullWidth variant="outline" size="medium">
          {formatMessage(profileMessages.deleteDocument)}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[532px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>
                {formatMessage(profileMessages.deleteAccount)}
              </DialogTitle>
              <DialogDescription className="py-8 text-textAndIcon-darker text-bodylarge">
                {formatMessage(profileMessages.deleteAccountConfirmation)}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-6">
              <Select>
                <SelectTrigger
                  className="h-[48px] rounded-2xl"
                  label="نوع مدارک"
                >
                  <SelectValue placeholder="نوع مدرک را انتخاب کنید" />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  <SelectGroup>
                    <SelectItem value="current_week">
                      پرکلیک ترین محصولات
                    </SelectItem>
                    <SelectItem value="product">رین محصولات</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <DatePickerController
                form={{ control: form.control, name: "dob" }}
                label="تاریخ اعتبار مدرک"
                placeholder="تاریخ اعتبار مدرک را وارد کنید"
                calendar={{
                  mode: "single",
                  className: "rounded-md border",
                  initialFocus: true,
                }}
              />
              <UploadImage />
            </div>
            <DialogFooter className="mt-6 flex gap-4">
              <DialogClose asChild>
                <Button fullWidth variant="outline">
                  {formatMessage(globalMessages.cancel)}
                </Button>
              </DialogClose>
              <Button fullWidth>
                {formatMessage(profileMessages.addDocument).replace("جدید", "")}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
