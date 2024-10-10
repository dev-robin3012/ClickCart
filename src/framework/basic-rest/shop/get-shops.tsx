import { ShopsQueryOptionsType, Shop } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import nextClient from "src/api-config/next-client";

export const fetchShops = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await nextClient.get(API_ENDPOINTS.SHOPS);
  return { shop: { data } };
};

export const useShopsQuery = (options: ShopsQueryOptionsType) => {
  return useQuery<{ shop: { data: Shop[] } }, Error>(
    [API_ENDPOINTS.SHOPS, options],
    fetchShops
  );
};
