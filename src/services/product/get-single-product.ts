import woo_client from "@api/woo-client";

const getSingleProduct = async (slug: any, queries = {}) => {
  try {
    const { data: products } = await woo_client.get(`products`, {
      slug,
      ...queries,
    });

    const product = products[0];

    delete product.yoast_head;
    delete product.yoast_head_json;

    const { data: variations } = await woo_client.get(
      `products/${product.id}/variations`
    );

    return { ...product, variations };
  } catch (error) {
    console.log("Single Product Fetching failed for ==> ", error);
  }
};

export default getSingleProduct;
