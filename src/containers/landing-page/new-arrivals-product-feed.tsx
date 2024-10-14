import ProductsBlock from "@/containers/products-block";
import { Product } from "@/framework/basic-rest/types";
import { getProducts } from "@/services/product/get-products";
import { useQuery } from "react-query";

interface Props {
  hideProductDescription?: boolean;
  showCategory?: boolean;
  showRating?: boolean;
  demoVariant?: "ancient";
  disableBorderRadius?: boolean;
  className?: string;
}

export default function NewArrivalsProductFeed({
  hideProductDescription = false,
  showCategory = false,
  showRating = false,
  demoVariant,
  disableBorderRadius = false,
  className = "mb-9 md:mb-10 xl:mb-12",
}: Props) {
  const { data, isLoading } = useQuery<Product[], Error>(
    "new-arrivals-products",
    () => getProducts({ orderby: "date" }).then((products) => products)
  );

  return (
    <ProductsBlock
      className={className}
      hideProductDescription={hideProductDescription}
      showCategory={showCategory}
      showRating={showRating}
      sectionHeading="New Arrivals"
      products={data}
      loading={isLoading}
      uniqueKey="new-arrivals"
      demoVariant={demoVariant}
      disableBorderRadius={disableBorderRadius}
    />
  );
}
