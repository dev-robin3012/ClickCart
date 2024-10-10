import woo_client from "@/api-config/woo-client";
import { Category } from "@/framework/basic-rest/types";

const categoryFetcher = async (parent: number, per_page: any, page: any) => {
  const { data } = await woo_client.get(
    `products/categories?parent=${parent}&per_page=${per_page}&page=${page}`
  );

  const categories = data.map((category: any) => {
    delete category._links;
    delete category.yoast_head;
    delete category.yoast_head_json;

    return category;
  });

  return categories;
};

const getCategories = async (per_page = 10, page = 1) => {
  try {
    const mainCategories = await categoryFetcher(0, per_page, page);

    const categoriesWithSub = await new Promise(async (resolve) => {
      let categories: Category[] = [];

      for (const category of mainCategories) {
        const subCategories = await categoryFetcher(category.id, 10, 1);
        categories.push({ ...category, subCategories });
      }

      resolve(categories);
    });

    return categoriesWithSub;
  } catch (error) {
    console.log("categories fetching failed for ==> ", error);
    return [];
  }
};

export default getCategories;
