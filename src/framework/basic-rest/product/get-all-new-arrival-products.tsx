import { QueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import nextClient from "src/api-config/next-client";

export const fetchNewArrivalProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await nextClient.get(API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS);

  return data as Product[];
};

const fetchNewArrivalAncientProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await nextClient.get(
    API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS_ANCIENT
  );

  return data as Product[];
};

export const useNewArrivalProductsQuery = (options: QueryOptionsType) => {
  const queryKey =
    options.demoVariant === "ancient"
      ? API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS_ANCIENT
      : API_ENDPOINTS.PRODUCTS_ANCIENT;

  const products = useQuery<Product[], Error>(
    [queryKey, options],
    options.demoVariant === "ancient"
      ? fetchNewArrivalAncientProducts
      : fetchNewArrivalProducts
  );

  return products;
};
