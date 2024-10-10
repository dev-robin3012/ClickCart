import Container from "@components/ui/container";
import Layout from "@layout/layout-one";
import Subscription from "@components/common/subscription";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { GetServerSideProps } from "next";
import RelatedProducts from "@containers/product-details/related-products";
import getSingleProduct from "@services/product/get-single-product";
import dynamic from "next/dynamic";

const ProductSingleDetails = dynamic(
  () => import("@components/product/product-single-details")
);

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug },
}) => {
  try {
    const product = await getSingleProduct(slug);

    return { props: { product } };
  } catch (error) {
    return {
      props: {},
      redirect: "/error/server-error",
    };
  }
};

export default function ProductPage({ product }: any) {
  return (
    <>
      <Divider className="mb-0" />
      <Container>
        <div className="pt-8">
          <Breadcrumb />
        </div>
        <ProductSingleDetails product={product} />
        <RelatedProducts
          sectionHeading="Related Products"
          related_ids={product.related_ids}
        />
        <Subscription />
      </Container>
    </>
  );
}

ProductPage.Layout = Layout;
