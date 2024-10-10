import BannerCard from "@/components/common/banner-card";
import DownloadApps from "@/components/common/download-apps";
import Subscription from "@/components/common/subscription";
import Support from "@/components/common/support";
import Container from "@/components/ui/container";
import Divider from "@/components/ui/divider";
import BannerGridBlock from "@/containers/banner-grid-block";
import FeatureBlock from "@/containers/feature-block";
import BestSellerProductFeed from "@/containers/landing-page/best-seller-product-feed";
import BrandBlock from "@/containers/landing-page/brand-block";
import CollectionBlock from "@/containers/landing-page/collection-block";
import HeroWithCategory from "@/containers/landing-page/hero-with-category";
import NewArrivalsProductFeed from "@/containers/landing-page/new-arrivals-product-feed";
import ProductsWithFlashSale from "@/containers/landing-page/products-with-flash-sale";
import {
  homeOneBanner as banner,
  homeTwoHeroBanner as heroBanner,
} from "@/framework/basic-rest/static/banner";
import { collectionData as collection } from "@/framework/basic-rest/static/collection";
import { ROUTES } from "@/utils/routes";
import { FC } from "react";

const flashSaleCarouselBreakpoint = {
  "1280": { slidesPerView: 1, spaceBetween: 28 },
  "768": { slidesPerView: 2, spaceBetween: 20 },
  "0": { slidesPerView: 1, spaceBetween: 12 },
};

const MinimalTheme: FC = () => {
  return (
    <Container>
      <HeroWithCategory bannerData={heroBanner} />
      <ProductsWithFlashSale carouselBreakpoint={flashSaleCarouselBreakpoint} />
      <BannerGridBlock />
      {/* <CategoryGridBlock sectionHeading="Featured Categories" /> */}
      <Divider />
      <BestSellerProductFeed />
      <BannerCard
        key={`banner--key${banner.id}`}
        banner={banner}
        href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
        className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
      />
      <NewArrivalsProductFeed />
      <Divider />
      <BrandBlock sectionHeading="Top Brands" />
      <FeatureBlock />
      <CollectionBlock data={collection} />
      <DownloadApps />
      <Support />
      <Subscription />
    </Container>
  );
};

export default MinimalTheme;
