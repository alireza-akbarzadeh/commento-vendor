import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "./userList";

const fetchUsers = (userId: string): Promise<User> =>
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.data);

export function UserITem({ userId }: { userId: string }) {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => fetchUsers(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="mb-4 rounded-md bg-gray-100 p-4 shadow-md">
      <h3 className="mb-2 text-xl font-semibold">{user?.name}</h3>
      <p>
        <strong>Username:</strong> {user?.username}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
    </div>
  );
}
