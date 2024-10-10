import ProductsBlock from "@/containers/products-block";
import { Product } from "@/framework/basic-rest/types";
import { bestSellingProducts } from "@/services/product/get-products";
import { useQuery } from "react-query";

export default function BestSellerProductFeed() {
  const { isLoading, data } = useQuery<Product[], Error>("best-sellers", () =>
    bestSellingProducts().then((products) => products as Product[])
  );

  return (
    <ProductsBlock
      sectionHeading="Best Sellers"
      products={data}
      loading={isLoading}
      uniqueKey="best-sellers"
    />
  );
}
