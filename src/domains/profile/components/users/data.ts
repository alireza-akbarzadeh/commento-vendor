export type Users = {
  id: string;
  fullName: string;
  phoneNumber: number;
  authorityLevel: string;
  email: string;
  lastLogged: string;
};

export const users: Users[] = [
  {
    id: "1",
    fullName: "John Doe",
    phoneNumber: 1234567890,
    authorityLevel: "Admin",
    email: "john.doe@example.com",
    lastLogged: "2023-09-15T10:30:00Z",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    phoneNumber: 9876543210,
    authorityLevel: "Manager",
    email: "jane.smith@example.com",
    lastLogged: "2023-09-14T14:45:00Z",
  },
  {
    id: "3",
    fullName: "Alice Johnson",
    phoneNumber: 5551234567,
    authorityLevel: "User",
    email: "alice.johnson@example.com",
    lastLogged: "2023-09-13T09:15:00Z",
  },
  {
    id: "4",
    fullName: "Bob Williams",
    phoneNumber: 4447890123,
    authorityLevel: "User",
    email: "bob.williams@example.com",
    lastLogged: "2023-09-12T16:20:00Z",
  },
  {
    id: "5",
    fullName: "Emma Brown",
    phoneNumber: 3339876543,
    authorityLevel: "Manager",
    email: "emma.brown@example.com",
    lastLogged: "2023-09-11T11:55:00Z",
  },
];

export type HistoryRecord = {
  fullName: string;
  id: string;
  dateTimeActivity: string;
  activityType: string;
};

export const historyRecord: HistoryRecord[] = [
  {
    id: "1",
    fullName: "John Doe",
    dateTimeActivity: "2023-09-15T10:30:00Z",
    activityType: "حذف سفارش",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    dateTimeActivity: "2023-09-15T10:30:00Z",
    activityType: "حذف سفارش",
  },
  {
    id: "3",
    fullName: "Alice Johnson",
    dateTimeActivity: "2023-09-15T10:30:00Z",
    activityType: "حذف سفارش",
  },
  {
    id: "4",
    fullName: "Bob Williams",
    dateTimeActivity: "2023-09-15T10:30:00Z",
    activityType: "حذف سفارش",
  },
  {
    id: "5",
    fullName: "Emma Brown",
    dateTimeActivity: "2023-09-15T10:30:00Z",
    activityType: "حذف سفارش",
  },
];
