import ProductsBlock from "@/containers/products-block";
import { Product } from "@/framework/basic-rest/types";
import { getProducts } from "@/services/product/get-products";
import { useQuery } from "react-query";

interface Props {
  demoVariant?: "ancient";
  disableBorderRadius?: boolean;
  className?: string;
}

export default function PopularProductFeed({
  demoVariant,
  disableBorderRadius = false,
  className = "mb-7 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[75px]",
}: Props) {
  const { data, isLoading } = useQuery<Product[]>("popular-product", () =>
    getProducts({ orderby: "popularity" }).then((data) => data)
  );

  return (
    <>
      <ProductsBlock
        sectionHeading="Popular Products"
        products={data}
        loading={isLoading}
        uniqueKey="popular-products"
        demoVariant={demoVariant}
        disableBorderRadius={disableBorderRadius}
        className={className}
      />
    </>
  );
}
