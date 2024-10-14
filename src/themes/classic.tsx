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
import BannerWithProducts from "@/containers/landing-page/banner-with-products";
import CategoryBlock from "@/containers/landing-page/category-block";
import NewArrivalsProductFeed from "@/containers/landing-page/new-arrivals-product-feed";
import ProductsFlashSaleBlock from "@/containers/landing-page/product-flash-sale-block";
import ProductsFeatured from "@/containers/landing-page/products-featured";
import { ROUTES } from "@/utils/routes";

// All data file
import BannerBlock from "@/containers/landing-page/banner-block";
import {
  homeFiveBanner as banner,
  bannerDataOne,
  bannerDataTwo,
} from "@/framework/basic-rest/static/banner";

export default function ClassicTheme() {
  return (
    <>
      <ExclusiveBlock className="mb-12 md:mb-14 xl:mb-16 px-2.5 mx-auto max-w-[1920px]" />
      <Container>
        <CategoryBlock sectionHeading="Shop by Category" />
        <ProductsFeatured sectionHeading="Featured Products" variant="center" />
      </Container>
      <BannerBlock data={bannerDataOne} />
      <Container>
        <BannerWithProducts
          sectionHeading="On Selling Products"
          categorySlug="/#"
        />
      </Container>
      <BannerSliderBlock />
      <Container>
        <ProductsFlashSaleBlock date={"2023-03-01T01:02:03"} />
      </Container>
      <BannerBlock data={bannerDataTwo} />
      <Container>
        <BrandGridBlock sectionHeading="Top Brands" />
        <BannerCard
          banner={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
          effectActive={true}
        />
        <NewArrivalsProductFeed />
        <DownloadApps />
        <Support />
        <Instagram />
        <Subscription className="bg-opacity-0 px-8 sm:px-16 xl:px-0" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}
