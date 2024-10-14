import { QueryOptionsType } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchFlashSaleProducts = async () => {
  const { data } = await http.get(API_ENDPOINTS.FLASH_SELL_PRODUCTS);
  return data;
};

export const useFlashSaleProductsQuery = (options: QueryOptionsType) => {
  return useQuery<any, Error>([API_ENDPOINTS.FLASH_SELL_PRODUCTS, options], fetchFlashSaleProducts);
};
