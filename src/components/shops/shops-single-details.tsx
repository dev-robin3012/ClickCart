import { Drawer } from "@components/common/drawer";
import motionProps from "@components/common/drawer/motion";
import ShopSidebar from "@components/shops/shop-sidebar";
import ShopSidebarDrawer from "@components/shops/shop-sidebar-drawer";
import Container from "@components/ui/container";
import { Text } from "@components/ui/text";
import { ProductGrid } from "@containers/search-page/product-grid";
import { useUI } from "@contexts/ui.context";
import { useShopQuery } from "@framework/shop/get-shop";
import { getDirection } from "@utils/get-direction";
import Image from "next/image";
import { useRouter } from "next/router";
import StickyBox from "react-sticky-box";

export default function ShopsSingleDetails() {
  const {
    query: { slug },
  } = useRouter();
  const { data, isLoading } = useShopQuery(slug as string);
  const { openShop, displayShop, closeShop } = useUI();
  const { locale } = useRouter();
  const dir = getDirection(locale);
  const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex lg:hidden items-center px-8 py-4 border-b border-gray-300 mb-4">
        <div className="flex flex-shrink-0">
          <Image
            src={data?.logo?.original!}
            alt={`${data?.name}`}
            width={62}
            height={62}
            className="rounded-md"
          />
        </div>
        <div className="ps-4">
          <Text variant="heading">{data?.name}</Text>
          <button
            className="font-semibold text-sm text-heading transition-all opacity-80 hover:opacity-100"
            onClick={openShop}
          >
            More Info
          </button>
        </div>
      </div>
      <Container>
        <div className="flex flex-col lg:flex-row lg:pt-7 pb-16 lg:pb-20">
          <div className="flex-shrink-0 hidden lg:block lg:w-80 xl:w-96 border border-gray-300 rounded-lg">
            <StickyBox offsetTop={50} offsetBottom={20}>
              <ShopSidebar data={data} />
            </StickyBox>
          </div>

          <div className="w-full lg:ps-7">
            <div className="flex mb-5 lg:mb-7">
              <Image
                src={data?.cover_image?.original!}
                alt={`${data?.name}`}
                width={2760}
                height={1020}
                className="rounded-xl bg-gray-300"
              />
            </div>
            <ProductGrid data={[]} />
          </div>
        </div>
      </Container>
      {/* TODO: need to use just one drawer component */}
      <Drawer
        placement={dir === "rtl" ? "right" : "left"}
        open={displayShop}
        onClose={closeShop}
        contentWrapperStyle={contentWrapperCSS}
        {...motionProps}
      >
        <ShopSidebarDrawer data={data} />
      </Drawer>
    </>
  );
}
