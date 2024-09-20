import { z } from "zod";

export const settingsSchema = z.object({
  mode: z.enum(["read", "edit"], {
    invalid_type_error: 'Mode must be either "read" or "edit".',
  }),
  immediateDelivery: z.boolean(),
  paymentSpot: z.boolean(),
  bulkPurchase: z.boolean(),
  installmentPayment: z.boolean(),
  shippingMethod: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  yourResponseTime: z.string().min(1, "Response time is required"),
  link: z.string().url("Please provide a valid URL"),
  additionalInformation: z
    .string()
    .min(20, "Additional information must be at least 20 characters long"),
});

export type SettingsFormData = z.infer<typeof settingsSchema>;
