import { PageDirection } from "components";

import { ROUTE_NAME } from "constant";
import { useIntl } from "react-intl";
import { ProductTable } from "./components";
import { productsMessages } from "./products.messages";

export function ProductListDomains() {
  const { formatMessage } = useIntl();
  return (
    <div className="mt-6 rounded-S bg-background-lightest p-6">
      <PageDirection
        directions={[
          {
            title: formatMessage(productsMessages.productList),
            link: ROUTE_NAME.Products,
          },
        ]}
      />
      <ProductTable />
    </div>
  );
}
