import { format, isValid } from "date-fns-jalali";

export function formatDate(date: number | Date) {
  return isValid(date) ? format(date, "do MMMM yyyy") : "N/A";
}
