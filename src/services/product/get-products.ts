import woo_client from "@/api-config/woo-client";
import { Product } from "@/framework/basic-rest/types";

const reduceProductListSize = (payload: Product[]) => {
  return payload.map((product: Product) => {
    delete product.yoast_head;
    delete product.yoast_head_json;
    return product;
  });
};

export const getProducts = async (queries = {}) => {
  try {
    const { data } = await woo_client.get(`products`, queries);
    const products = reduceProductListSize(data);

    return products;
  } catch (error) {
    console.log("product fetching failed for ==> ", error);
    return [];
  }
};

export const bestSellingProducts = async (queries = {}) => {
  try {
    const { data: topSellReport } = await woo_client.get(
      `reports/top_sellers`,
      queries
    );

    const productIDs = await topSellReport.map(
      ({ product_id }: any) => product_id
    );

    const { data } = await woo_client.get(`products`, { include: productIDs });

    const products = reduceProductListSize(data);

    return products;
  } catch (error) {
    console.log("best selling product fetching failed for ==> ", error);
    return [];
  }
};

export const productsByCategory = async (slug: any, queries = {}) => {
  try {
    const { data } = await woo_client.get(`products/categories?slug=${slug}`);

    const categoryID = data[0].id;

    const { data: products } = await woo_client.get(
      `products?category=${categoryID}`,
      queries
    );

    return products;
  } catch (error) {
    console.log("products by category fetching failed for ==> ", error);
    return [];
  }
};
