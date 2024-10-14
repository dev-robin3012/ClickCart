import { Shop } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import nextClient from "src/api-config/next-client";

export const fetchShop = async (_slug: string) => {
  const { data } = await nextClient.get(`${API_ENDPOINTS.SHOP}`);
  return data;
};

export const useShopQuery = (slug: string) => {
  return useQuery<Shop, Error>([API_ENDPOINTS.SHOP, slug], () =>
    fetchShop(slug)
  );
};
