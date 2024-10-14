import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import Alert from "@components/ui/alert";
import { useQuery } from "react-query";
import { Product } from "@framework/types";
import { getProducts } from "@services/product/get-products";

interface ProductsProps {
  sectionHeading: string;
  className?: string;
  related_ids: [];
}

const RelatedProducts: React.FC<ProductsProps> = ({
  sectionHeading,
  related_ids,
  className = "mb-9 lg:mb-10 xl:mb-14",
}) => {
  const { data, isLoading, error } = useQuery<Product[], Error>(
    "related-products",
    () => getProducts({ include: related_ids }).then((products) => products)
  );

  return (
    <div className={className}>
      <SectionHeader sectionHeading={sectionHeading} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
        {error ? (
          <div className="col-span-full">
            <Alert message={error?.message} />
          </div>
        ) : isLoading ? (
          <ProductFeedLoader limit={5} uniqueKey="related-product" />
        ) : (
          data?.map((product: any) => (
            <ProductCard
              key={`product--key${product.id}`}
              product={product}
              imgWidth={340}
              imgHeight={440}
              variant="grid"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
