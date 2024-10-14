import BannerCard from "@/components/common/banner-card";
import DownloadApps from "@/components/common/download-apps";
import Instagram from "@/components/common/instagram";
import Subscription from "@/components/common/subscription";
import Support from "@/components/common/support";
import Container from "@/components/ui/container";
import Divider from "@/components/ui/divider";
import BannerSliderBlock from "@/containers/banner-slider-block";
import ExclusiveBlock from "@/containers/exclusive-block";
import BannerWithProducts from "@/containers/landing-page/banner-with-products";
import BrandBlock from "@/containers/landing-page/brand-block";
import CategoryBlock from "@/containers/landing-page/category-block";
import HeroWithCategoryFlash from "@/containers/landing-page/hero-with-category-flash";
import NewArrivalsProductFeed from "@/containers/landing-page/new-arrivals-product-feed";
import ProductsFlashSaleBlock from "@/containers/landing-page/product-flash-sale-block";
import ProductsFeatured from "@/containers/landing-page/products-featured";
import { homeFourBanner as banner } from "@/framework/basic-rest/static/banner";
import { ROUTES } from "@/utils/routes";
import { FC } from "react";

const VintageTheme: FC = () => {
  return (
    <>
      <Container>
        <HeroWithCategoryFlash />
      </Container>
      <BannerSliderBlock />
      <Container>
        <CategoryBlock sectionHeading="Shop By Category" />
        <BannerWithProducts
          sectionHeading="On Selling Products"
          categorySlug="/search"
          variant="reverse"
        />
        <BannerCard
          banner={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
        />
        <ProductsFeatured sectionHeading="Featured Products" variant="center" />
        <BannerCard
          banner={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
        />
        <ProductsFlashSaleBlock date={"2023-03-01T01:02:03"} />
        <BrandBlock sectionHeading="text-top-brands" />
        <ExclusiveBlock />
        <NewArrivalsProductFeed />
        <BannerCard
          banner={banner[2]}
          href={`${ROUTES.COLLECTIONS}/${banner[2].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        {/* <CategoryGridBlock sectionHeading="Categories" /> */}
        <DownloadApps />
        <Support />
        <Instagram />
        <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
};

export default VintageTheme;
