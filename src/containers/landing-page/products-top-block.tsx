import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/product/product-card";
import Alert from "@/components/ui/alert";
import ProductListFeedLoader from "@/components/ui/loaders/product-list-feed-loader";
import { Product } from "@/framework/basic-rest/types";
import { getProducts } from "@/services/product/get-products";
import { useQuery } from "react-query";

interface Props {
  sectionHeading: string;
  className?: string;
  carouselBreakpoint?: {} | any;
}

const ProductsTopBlock: React.FC<Props> = ({
  sectionHeading,
  className = "mb-12 md:mb-14 xl:mb-16",
}) => {
  const { data, isLoading, error } = useQuery<Product[], Error>(
    "on-selling-products",
    () =>
      getProducts({ orderby: "popularity", per_page: 9 }).then((data) => data)
  );

  return (
    <div className={`${className}`}>
      <SectionHeader sectionHeading={sectionHeading} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 xl:-mt-1.5 2xl:mt-0">
        {error ? (
          <div className="col-span-full">
            <Alert message={error?.message} />
          </div>
        ) : isLoading ? (
          <ProductListFeedLoader limit={4} />
        ) : (
          data?.map((product) => (
            <ProductCard
              key={`product--key-${product.id}`}
              product={product}
              imgWidth={265}
              imgHeight={265}
              imageContentClassName="flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64"
              contactClassName="ps-3.5 sm:ps-5 md:ps-4 xl:ps-5 2xl:ps-6 3xl:ps-10"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsTopBlock;
