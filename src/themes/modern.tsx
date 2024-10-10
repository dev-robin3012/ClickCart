import BannerCard from "@/components/common/banner-card";
import DownloadApps from "@/components/common/download-apps";
import Instagram from "@/components/common/instagram";
import Subscription from "@/components/common/subscription";
import Support from "@/components/common/support";
import Container from "@/components/ui/container";
import Divider from "@/components/ui/divider";
import BannerSliderBlock from "@/containers/banner-slider-block";
import BrandGridBlock from "@/containers/brand-grid-block";
import ExclusiveBlock from "@/containers/exclusive-block";
import BannerBlock from "@/containers/landing-page/banner-block";
import BannerWithProducts from "@/containers/landing-page/banner-with-products";
import CategoryBlock from "@/containers/landing-page/category-block";
import NewArrivalsProductFeed from "@/containers/landing-page/new-arrivals-product-feed";
import ProductsFlashSaleBlock from "@/containers/landing-page/product-flash-sale-block";
import ProductsFeatured from "@/containers/landing-page/products-featured";
import {
  homeThreeBanner as banner,
  homeThreeMasonryBanner as masonryBanner,
} from "@/framework/basic-rest/static/banner";
import { ROUTES } from "@/utils/routes";

export default function ModernTheme() {
  return (
    <>
      <BannerBlock data={masonryBanner} />
      <Container>
        <ProductsFlashSaleBlock date={"2023-06-21T01:02:03"} />
      </Container>
      <BannerSliderBlock />
      <Container>
        <CategoryBlock sectionHeading="Shop by Category" type="rounded" />
        <ProductsFeatured sectionHeading="Featured Products" limit={5} />
        <BannerCard
          key={`banner--key${banner[0].id}`}
          banner={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <BrandGridBlock sectionHeading="Top Brands" />
        <BannerCard
          key={`banner--key${banner[1].id}`}
          banner={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <BannerWithProducts
          sectionHeading="On Selling Products"
          categorySlug="/search"
        />
        <ExclusiveBlock />
        <NewArrivalsProductFeed />
        <DownloadApps />
        <Support />
        <Instagram />
        <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}
