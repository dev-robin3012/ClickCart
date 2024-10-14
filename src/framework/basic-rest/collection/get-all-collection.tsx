import { useQuery } from "react-query";
import { Collection, CollectionsQueryOptionsType } from "../types";
import { API_ENDPOINTS } from "../utils/api-endpoints";
import http from "../utils/http";

export const fetchCollections = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;

  const {
    data: { data },
  } = await http.get(API_ENDPOINTS.COLLECTIONS);
  return { collections: { data: data as Collection[] } };
};

export const useCollectionsQuery = (options: CollectionsQueryOptionsType) => {
  return useQuery<{ collections: { data: Collection[] } }, Error>(
    [API_ENDPOINTS.COLLECTIONS, options],
    fetchCollections
  );
};
