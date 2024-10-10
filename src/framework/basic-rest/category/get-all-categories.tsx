import { CategoriesQueryOptionsType, Category } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

const fetchCategories = async () => {
  const { data } = await http.get(API_ENDPOINTS.CATEGORIES);

  return { categories: { data: data as Category[] } };
};

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  // @ts-ignore
  const { isLoading, data, error } = useQuery(API_ENDPOINTS.CATEGORIES, fetchCategories);
  // console.log(isLoading, data?.categories, error);

  return useQuery(API_ENDPOINTS.CATEGORIES, fetchCategories);
};
