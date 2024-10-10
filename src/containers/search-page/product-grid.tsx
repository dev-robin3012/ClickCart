import ProductCard from "@/components/product/product-card";
import { Product } from "@/framework/basic-rest/types";
import type { FC } from "react";

interface ProductGridProps {
  className?: string;
  data: Product[];
}

export const ProductGrid: FC<ProductGridProps> = ({ className = "", data }) => {
  //   const {
  //     isFetching: isLoading,
  //     isFetchingNextPage: loadingMore,
  //     fetchNextPage,
  //     hasNextPage,
  //     error,
  //   } = useProductsQuery({ limit: 10, ...query });

  //   if (error) return <p>{error.message}</p>;

  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
      >
        {data?.map((product) => {
          return (
            <ProductCard
              key={`product--key${product.id}`}
              product={product}
              variant="grid"
            />
          );
        })}
        {/* {isLoading && !data?.length ? (
          <ProductFeedLoader limit={20} uniqueKey="search-product" />
        ) : (
          data?.map((product) => {
            return (
              <ProductCard key={`product--key${product.id}`} product={product} variant="grid" />
            );
          })
        )}
      </div>
      <div className="text-center pt-8 xl:pt-14">
        {hasNextPage && (
          <Button
            loading={loadingMore}
            disabled={loadingMore}
            onClick={() => fetchNextPage()}
            variant="slim"
          >
           Load more
          </Button>
        )} */}
      </div>
    </>
  );
};
