import { z } from "zod";

export const storeInfoSchema = z.object({
  mode: z.enum(["read", "edit"], {
    errorMap: () => ({ message: 'Mode must be either "read" or "edit".' }),
  }),
  storeName: z.string().min(2, {
    message: "Store name must be at least 2 characters.",
  }),
  vendorFullName: z.string().min(2, {
    message: "Vendor full name must be at least 2 characters.",
  }),
  nationalCode: z.string().min(2, {
    message: "National code must be at least 2 characters.",
  }),
  phoneNumber: z
    .string()
    .min(11, { message: "Phone number must be at least 11 characters." })
    .regex(/^\d+$/, { message: "Phone number must contain only digits." }),
  email: z.string().email({
    message: "Invalid email format.",
  }),
  website: z.string().min(10, {
    message: "Website must be at least 10 characters.",
  }),
  birthDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  postalCode: z
    .string()
    .min(10, { message: "Postal code must be at least 10 characters." })
    .regex(/^\d+$/, { message: "Postal code must contain only digits." }),
  tellphoneNumber: z
    .string()
    .min(10, { message: "Telephone number must be at least 10 characters." })
    .regex(/^\d+$/, { message: "Telephone number must contain only digits." }),
  whatsAppAddress: z
    .string()
    .min(10, { message: "WhatsApp address must be at least 10 characters." }),
  telegramAddress: z
    .string()
    .min(10, { message: "Telegram address must be at least 10 characters." }),
  instaGramAddress: z
    .string()
    .min(10, { message: "Instagram address must be at least 10 characters." }),
});

export type StoreInformationFormData = z.infer<typeof storeInfoSchema>;
