import { CollectionFilters } from "@/components/collection/collection-filters";
import CollectionTopBar from "@/components/collection/collection-top-bar";
import { BreadcrumbItems } from "@/components/common/breadcrumb";
import Subscription from "@/components/common/subscription";
import ActiveLink from "@/components/ui/active-link";
import Container from "@/components/ui/container";
import { ProductGrid } from "@/containers/search-page/product-grid";
import Layout from "@/layout/layout-one";
import { ROUTES } from "@/utils/routes";
import StickyBox from "react-sticky-box";

export default function Collections() {
  return (
    <div className="border-t-2 border-borderBottom">
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
                    href={ROUTES.SEARCH}
                    activeClassName="font-semibold text-heading"
                  >
                    <span>Collections</span>
                  </ActiveLink>
                </BreadcrumbItems>
              </div>
              <CollectionFilters />
            </StickyBox>
          </div>

          <div className="w-full lg:-ms-9">
            <CollectionTopBar />
            <ProductGrid data={[]} />
          </div>
        </div>
        <Subscription />
      </Container>
    </div>
  );
}

Collections.Layout = Layout;

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale!, [
//         "common",
//         "forms",
//         "menu",
//         "footer",
//       ])),
//     },
//   };
// };
