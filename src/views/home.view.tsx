import { HomeDomains } from "domains";
import { useLoaderData } from "react-router-dom";

function HomeView() {
  const { contacts } = useLoaderData();
  console.log(contacts);

  return <HomeDomains />;
}

export default HomeView;
