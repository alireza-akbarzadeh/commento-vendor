import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  CheckboxGroupController,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  InputController,
  SwitchController,
} from "components";
import { globalMessages } from "i18n/global.messages";
import { useForm, useWatch } from "react-hook-form";
import { useIntl } from "react-intl";
import { SettingsFormData, storeInfoSchema } from "schemas";
import { ViewSettings } from "../components/setting/view-setting";
import { profileMessages } from "../profile-details.messages";
import { Textarea } from "components/ui/textarea";

export function StoreSttings() {
  const { formatMessage } = useIntl();

  const form = useForm<SettingsFormData>({
    resolver: zodResolver(storeInfoSchema),
    mode: "all",
    defaultValues: {
      mode: "read",
      shippingMethod: ["post"],
    },
  });
  const onSubmit = (formValuse: SettingsFormData) => {
    //  do something
  };

  const { mode } = useWatch({ control: form.control });

  const items = [
    {
      id: "post",
      label: "پست",
    },
    {
      id: "freight",
      label: "باربری",
    },
    {
      id: "courier",
      label: "پیک",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-6 flex items-center justify-between md:mt-0">
          <h3 className="text-textAndIcon-dark text-titleLarge">
            {formatMessage(profileMessages.storeSetting)}
          </h3>
          <Button
            type={mode === "edit" ? "submit" : "button"}
            onClick={() => {
              if (mode === "read") {
                form.setValue("mode", "edit");
              }
            }}
            className="w-[154px]"
            variant={mode === "read" ? "outline" : "primary"}
            {...(mode === "read" ? { icon: "Edit" } : null)}
          >
            {formatMessage(
              mode === "read"
                ? globalMessages.editInformation
                : globalMessages.submitChanges,
            )}
          </Button>
        </div>
        {mode === "read" ? (
          <ViewSettings />
        ) : (
          <>
            <div className="mt-8 grid grid-cols-4 gap-x-3 gap-y-4 rounded-S border p-4 md:grid-cols-8 md:gap-y-8 lg:grid-cols-12">
              <div className="col-span-12 md:col-span-3">
                <SwitchController
                  label={formatMessage(profileMessages.immediateDelivery)}
                  switchControll={{
                    control: form.control,
                    name: "immediateDelivery",
                  }}
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <SwitchController
                  label={formatMessage(profileMessages.paymentSpot)}
                  switchControll={{
                    control: form.control,
                    name: "paymentSpot",
                  }}
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <SwitchController
                  label={formatMessage(profileMessages.bulkPurchase)}
                  switchControll={{
                    control: form.control,
                    name: "bulkPurchase",
                  }}
                />
              </div>
              <div className="col-span-12 md:col-span-3">
                <SwitchController
                  label={formatMessage(profileMessages.installmentPayment)}
                  switchControll={{
                    control: form.control,
                    name: "installmentPayment",
                  }}
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <CheckboxGroupController
                  view="row"
                  checkItems={items}
                  label={formatMessage(profileMessages.shippingMerhod)}
                  checkboxControll={{
                    control: form.control,
                    name: "shippingMethod",
                  }}
                />
              </div>
            </div>
            <div className="my-8 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="col-span-12 md:col-span-4">
                <InputController
                  label={formatMessage(profileMessages.yourResponseTime)}
                  inputControll={{
                    control: form.control,
                    name: "yourResponseTime",
                    rules: { required: true },
                  }}
                />
              </div>
              <div className="col-span-12 md:col-span-4">
                <InputController
                  label={formatMessage(profileMessages.conditionLink)}
                  inputControll={{
                    control: form.control,
                    name: "link",
                    rules: { required: true },
                  }}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="additionalInformation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {formatMessage(profileMessages.additionalInformation)}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <p className="pt-1 text-left text-textAndIcon-light text-bodySmall">
                    20/5
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
      </form>
    </Form>
  );
}
