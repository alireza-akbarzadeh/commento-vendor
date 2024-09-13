import { Button, Form, Image, InputController } from 'components';
import { globalMessages } from 'i18n/global.messages';
import { useIntl } from 'react-intl';
import { profileMessages } from '../profile-details.messages';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { StoreInformationFormData, storeInfoSchema } from 'schemas';
import { MapPng } from 'assets';
import { ReadStoreInformation } from '../components';

export function StoreInformation() {
  const { formatMessage } = useIntl();

  const form = useForm<StoreInformationFormData>({
    resolver: zodResolver(storeInfoSchema),
    defaultValues: {
      mode: 'read',
    },
  });
  const onSubmit = (formValuse: StoreInformationFormData) => {
    console.log(formValuse);
  };

  const { mode } = useWatch({ control: form.control });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <h3 className="text-titleLarge text-textAndIcon-dark">
            {formatMessage(profileMessages.storeInformation)}
          </h3>
          <Button
            type={mode === 'edit' ? 'submit' : 'button'}
            onClick={() => {
              if (mode === 'read') {
                form.setValue('mode', 'edit');
              }
            }}
            className="w-[154px]"
            variant={mode === 'read' ? 'outline' : 'primary'}
            {...(mode === 'read' ? { icon: 'Edit' } : null)}
            {...(mode === 'read' ? { iconPosition: 'left' } : null)}
          >
            {formatMessage(
              mode === 'read'
                ? globalMessages.editInformation
                : globalMessages.submitChanges
            )}
          </Button>
        </div>
        {mode === 'read' ? (
          <ReadStoreInformation />
        ) : (
          <div className="grid grid-cols-4  md:grid-cols-8 lg:grid-cols-12 gap-x-3">
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.storeName)}
                inputControll={{
                  control: form.control,
                  name: 'storeName',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.vendorFullName)}
                inputControll={{
                  control: form.control,
                  name: 'vendorFullName',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.vendorNationalCode)}
                inputControll={{
                  control: form.control,
                  name: 'nationalCode',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.phoneNumber)}
                inputControll={{
                  control: form.control,
                  name: 'phoneNumber',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.emailAddress)}
                inputControll={{
                  control: form.control,
                  name: 'email',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.websiteAddress)}
                inputControll={{
                  control: form.control,
                  name: 'website',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.birthDate)}
                inputControll={{
                  control: form.control,
                  name: 'birthDate',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.city)}
                inputControll={{
                  control: form.control,
                  name: 'city',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.state)}
                inputControll={{
                  control: form.control,
                  name: 'state',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-8">
              <InputController
                label={formatMessage(profileMessages.address)}
                inputControll={{
                  control: form.control,
                  name: 'address',
                  rules: { required: true },
                }}
              />
              <div className="grid grid-cols-2 gap-3">
                <InputController
                  label={formatMessage(profileMessages.postalCode)}
                  inputControll={{
                    control: form.control,
                    name: 'postalCode',
                    rules: { required: true },
                  }}
                />
                <InputController
                  label={formatMessage(profileMessages.telephoneNumber)}
                  inputControll={{
                    control: form.control,
                    name: 'tellphoneNumber',
                    rules: { required: true },
                  }}
                />
              </div>
            </div>
            <div className="col-span-4">
              <Image className=" w-full h-auto" src={MapPng} alt="map" />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.addressWhatsApp)}
                inputControll={{
                  control: form.control,
                  name: 'whatsAppAddress',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.addressTelegram)}
                inputControll={{
                  control: form.control,
                  name: 'telegramAddress',
                  rules: { required: true },
                }}
              />
            </div>
            <div className="col-span-4">
              <InputController
                label={formatMessage(profileMessages.addressInstagram)}
                inputControll={{
                  control: form.control,
                  name: 'instaGramAddress',
                  rules: { required: true },
                }}
              />
            </div>
          </div>
        )}
      </form>
    </Form>
  );
}
