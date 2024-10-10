import { QueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import nextClient from "src/api-config/next-client";

export const fetchFeaturedProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await nextClient.get(API_ENDPOINTS.FEATURED_PRODUCTS);
  return data as Product[];
};

const fetchAncientFeaturedProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await nextClient.get(
    API_ENDPOINTS.FEATURED_PRODUCTS_ANCIENT
  );
  return data as Product[];
};

export const useFeaturedProductsQuery = (options: QueryOptionsType) => {
  const products = useQuery<Product[], Error>(
    [API_ENDPOINTS.FEATURED_PRODUCTS, options],
    options.demoVariant === "ancient"
      ? fetchAncientFeaturedProducts
      : fetchFeaturedProducts
  );

  return products;
};
