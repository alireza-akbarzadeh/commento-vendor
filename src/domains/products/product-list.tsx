import { PageDirection } from "components";

import { ROUTE_NAME } from "constant";
import { useIntl } from "react-intl";
import { ProductTable } from "./components";
import { productsMessages } from "./products.messages";
import { useSearchParams } from "react-router-dom";
import { AddProduct } from "./add-product";

export function ProductListDomains() {
  const { formatMessage } = useIntl();

  const [searchParams] = useSearchParams();
  const name = searchParams.get("page");
  return (
    <div className="mt-6 rounded-S bg-background-lightest p-6">
      <PageDirection
        directions={[
          {
            title: formatMessage(productsMessages.productList),
            link: ROUTE_NAME.Products,
          },
          ...(name === "create"
            ? [
                {
                  title: formatMessage(productsMessages.addNewProduct),
                  link: ROUTE_NAME.Products,
                },
              ]
            : []),
        ]}
      />
      {name === "create" ? <AddProduct /> : <ProductTable />}
    </div>
  );
}
