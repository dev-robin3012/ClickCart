import nextClient from "@/api-config/next-client";
import { Brand, QueryOptionsType } from "@/framework/basic-rest/types";
import { API_ENDPOINTS } from "@/framework/basic-rest/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchBrands = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await nextClient.get(API_ENDPOINTS.BRANDS);
  return data;
};
const fetchAncientBrands = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await nextClient.get(API_ENDPOINTS.BRANDS_ANCIENT);
  return data;
};

export const useBrandsQuery = (options: QueryOptionsType) => {
  const bands_ancient = useQuery<
    { brands: Brand[]; brandsGrid: Brand[]; brandsTimer: Brand[] },
    Error
  >([API_ENDPOINTS.BRANDS_ANCIENT, options], fetchAncientBrands);

  const bands = useQuery<
    { brands: Brand[]; brandsGrid: Brand[]; brandsTimer: Brand[] },
    Error
  >([API_ENDPOINTS.BRANDS, options], fetchBrands);

  if (options.demoVariant === "ancient") return bands_ancient;

  return bands;
};
