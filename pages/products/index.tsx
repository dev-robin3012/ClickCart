import Container from "@/components/ui/container";
import Layout from "@/layout/layout-one";
import Subscription from "@/components/common/subscription";
import ShopDiscount from "@/components/shop/discount";
import StickyBox from "react-sticky-box";
import ActiveLink from "@/components/ui/active-link";
import { BreadcrumbItems } from "@/components/common/breadcrumb";
import { ShopFilters } from "@/containers/common/filtering";
import ProductListing from "@/containers/search-page/product-listing";
import ROUTES from "@/utils/routes";

export default function Products() {
  return (
    <>
      <ShopDiscount />
      <Container>
        <div className={`flex pt-8 pb-16 lg:pb-20`}>
          <div className="flex-shrink-0 pe-24 hidden lg:block w-96">
            <StickyBox offsetTop={50} offsetBottom={20}>
              <div className="pb-7">
                <BreadcrumbItems separator="/">
                  <ActiveLink
                    href={"/"}
                    activeClassName="font-semibold text-heading"
                  >
                    <span>Home</span>
                  </ActiveLink>
                  <ActiveLink
                    href={ROUTES.PRODUCT}
                    activeClassName="font-semibold text-heading"
                  >
                    <span>Products</span>
                  </ActiveLink>
                </BreadcrumbItems>
              </div>
              <ShopFilters />
            </StickyBox>
          </div>

          <ProductListing />
        </div>
        <Subscription />
      </Container>
    </>
  );
}

Products.Layout = Layout;
