import nextClient from "@/api-config/next-client";
import Subscription from "@/components/common/subscription";
import Container from "@/components/ui/container";
import CategoryBanner from "@/containers/category-banner";
import { ProductGrid } from "@/containers/search-page/product-grid";
import { Product } from "@/framework/basic-rest/types";
import Layout from "@/layout/layout-one";
import API_ENDPOINTS from "@/utils/api.routes";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({
  query: { category },
}) => {
  try {
    const { data: products } = await nextClient.get(
      `${API_ENDPOINTS.Products.By_Category}?slug=${category}`
    );

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {},
      redirect: "/error/server-error",
    };
  }
};

export default function Category({ products }: { products: Product[] }) {
  return (
    <div className="border-t-2 border-borderBottom">
      <Container>
        <CategoryBanner />
        <div className="pb-16 lg:pb-20 grid grid-cols-12 gap-10">
          <div className="col-span-2">{/* <ShopFilters /> */}</div>
          <ProductGrid
            className="col-span-10 3xl:grid-cols-5"
            data={products}
          />
        </div>
        <Subscription />
      </Container>
    </div>
  );
}

Category.Layout = Layout;
