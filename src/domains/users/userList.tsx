import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const fetchUsers = (): Promise<User[]> =>
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.data);

export function Users() {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return users?.map((user) => (
    <div className="mb-4 rounded-md bg-gray-100 p-4 shadow-md">
      <h3 className="mb-2 text-xl font-semibold">{user?.name}</h3>
      <p>
        <strong>Username:</strong> {user?.username}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
    </div>
  ));
}
