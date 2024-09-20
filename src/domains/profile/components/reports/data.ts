export type Reports = {
  id: string;
  title: string;
  reportType: string;
  openReportTime: string;
  closeReportTime: string;
  status: "success" | "progress" | "failed";
  reportDescription: string;
  adminDescription: string;
};

export const reports: Reports[] = [
  {
    id: "1",
    title: "Wireless Earbuds Performance Report",
    reportType: "Product Performance",
    openReportTime: "2024-09-01T09:00:00Z",
    closeReportTime: "2024-09-01T17:00:00Z",
    status: "failed",
    reportDescription:
      "Analysis of Wireless Earbuds sales and customer feedback",
    adminDescription: "Report generation failed due to data inconsistencies",
  },
  {
    id: "2",
    title: "Smart Watch Market Analysis",
    reportType: "Market Research",
    openReportTime: "2024-09-05T10:00:00Z",
    closeReportTime: "2024-09-05T18:00:00Z",
    status: "progress",
    reportDescription: "Comprehensive market analysis for Smart Watch category",
    adminDescription:
      "Report is being processed, estimated completion in 2 hours",
  },
  {
    id: "3",
    title: "4K LED TV Sales Report",
    reportType: "Sales Analysis",
    openReportTime: "2024-09-10T08:00:00Z",
    closeReportTime: "2024-09-10T16:00:00Z",
    status: "success",
    reportDescription: "Detailed sales report for 4K LED TV category",
    adminDescription: "Report successfully generated and available for review",
  },
  {
    id: "4",
    title: "Gaming Laptop Inventory Status",
    reportType: "Inventory Management",
    openReportTime: "2024-09-12T11:00:00Z",
    closeReportTime: "2024-09-12T19:00:00Z",
    status: "success",
    reportDescription:
      "Current inventory status and restocking needs for Gaming Laptops",
    adminDescription: "Inventory report completed, action items highlighted",
  },
  {
    id: "5",
    title: "Noise Cancelling Headphones Customer Feedback",
    reportType: "Customer Satisfaction",
    openReportTime: "2024-09-08T09:30:00Z",
    closeReportTime: "2024-09-08T17:30:00Z",
    status: "success",
    reportDescription:
      "Analysis of customer reviews and feedback for Noise Cancelling Headphones",
    adminDescription: "Feedback report generated with key insights",
  },
];
