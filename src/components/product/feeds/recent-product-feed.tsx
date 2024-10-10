import ProductsBlockCarousel from "@/containers/products-block-carousel";
import { getProducts } from "@/services/product/get-products";
import { useQuery } from "react-query";

export default function RecentProductFeed() {
  const { data, isLoading } = useQuery("recent-products", () =>
    getProducts({ orderby: "date" }).then((res) => res)
  );

  return (
    <ProductsBlockCarousel
      sectionHeading="Recently View Products"
      products={data?.slice(2, 7)}
      loading={isLoading}
      uniqueKey="new-arrivals"
      type="gridTrendy"
      className="mb-12 md:mb-14 xl:mb-16"
      imgWidth={344}
      imgHeight={344}
    />
  );
}
