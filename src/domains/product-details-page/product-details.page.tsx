import { Comment, SimilarProduct } from "./components";
import { SellerProduct } from "./components/seller-product";
import { ProductInfo } from "./product-info";

export function ProductDetailsPageDomain() {
  return (
    <div className="flex flex-col gap-6">
      <ProductInfo />
      <SellerProduct />
      <Comment />
      <SimilarProduct />
    </div>
  );
}
