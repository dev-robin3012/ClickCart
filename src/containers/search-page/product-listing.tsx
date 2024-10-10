import ProductCard from "@/components/product/product-card";
import Button from "@/components/ui/button";
import ListBox from "@/components/ui/list-box";
import ProductFeedLoader from "@/components/ui/loaders/product-feed-loader";
import Text from "@/components/ui/text";
import FilterDrawer from "@/containers/common/filtering/filter-drawer";
import { Product } from "@/framework/basic-rest/types";
import {
  getProducts,
  productsByCategory,
} from "@/services/product/get-products";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const ProductListing: FC = () => {
  const [productState, setProductState] = useState({
    products: [],
    page: 1,
    paginating: false,
    fetching: true,
  });

  const { query } = useRouter();

  const handlePagination = async () => {
    const page = productState.page + 1;
    setProductState({ ...productState, paginating: true, page });

    try {
      let products = [];

      if (isEmpty(query) || !query.categories) {
        products = await getProducts({ per_page: 15, page }).then(
          (products) => products
        );
      } else {
        products = await productsByCategory(query.categories, {
          per_page: 15,
          page,
        }).then((products) => products);
      }

      setProductState({
        ...productState,
        page,
        paginating: false,
        products: productState.products.concat(products),
      });
    } catch (error) {
      setProductState({ ...productState, paginating: false });
    }
  };

  const fetchProducts = async () => {
    setProductState({ ...productState, fetching: true });

    let products = [];
    if (isEmpty(query) || !query.categories) {
      products = await getProducts({ per_page: 15 }).then(
        (products) => products
      );
    } else {
      products = await productsByCategory(query.categories, {
        per_page: 15,
      }).then((products) => products);
    }

    setProductState({ ...productState, products, fetching: false });
  };

  useEffect(() => {
    fetchProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="w-full lg:-ms-9">
      <div className="flex justify-between items-center mb-7">
        <Text variant="pageHeading" className="hidden lg:inline-flex pb-1">
          Products
        </Text>

        <FilterDrawer />

        <div className="flex items-center justify-end">
          <ListBox
            options={[
              { name: "Sorting Options", value: "options" },
              { name: "Newest", value: "newest" },
              { name: "Popularity", value: "popularity" },
              { name: "Price: low to high", value: "low-high" },
              { name: "Price: high to low", value: "high-low" },
            ]}
          />
        </div>
      </div>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8`}
      >
        {productState.fetching ? (
          <ProductFeedLoader limit={15} uniqueKey="search-product" />
        ) : (
          productState.products.map((product: Product, key) => {
            return <ProductCard key={key} product={product} variant="grid" />;
          })
        )}
      </div>

      <div className="pt-8 xl:pt-14 flex items-center justify-center">
        <Button
          loading={productState.paginating}
          disabled={productState.paginating}
          onClick={handlePagination}
          variant="slim"
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default ProductListing;
