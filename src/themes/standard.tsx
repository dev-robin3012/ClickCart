import BannerCard from "@/components/common/banner-card";
import DownloadApps from "@/components/common/download-apps";
import Subscription from "@/components/common/subscription";
import Support from "@/components/common/support";
import Container from "@/components/ui/container";
import Divider from "@/components/ui/divider";
import BannerCarouselBlock from "@/containers/banner-carousel-block";
import FeatureBlock from "@/containers/feature-block";
import HeroBlock from "@/containers/hero-block";
import BestSellerProductFeed from "@/containers/landing-page/best-seller-product-feed";
import BrandBlock from "@/containers/landing-page/brand-block";
import CategoryBlock from "@/containers/landing-page/category-block";
import CollectionBlock from "@/containers/landing-page/collection-block";
import FlashSaleBlock from "@/containers/landing-page/flash-sale-product-feed";
import NewArrivalsProductFeed from "@/containers/landing-page/new-arrivals-product-feed";
import {
  homeOneBanner as banner,
  promotionBannerTwo as promotionBanners,
} from "@/framework/basic-rest/static/banner";
import { collectionData as collection } from "@/framework/basic-rest/static/collection";
import useModal from "@/hooks/useModal";
import { ROUTES } from "@/utils/routes";
import { useEffect } from "react";

export default function StandardTheme() {
  const { openModal } = useModal();

  useEffect(() => {
    setTimeout(() => {
      openModal("NEWSLETTER_VIEW");
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeroBlock />
      <Container>
        <FlashSaleBlock />
        <BannerCarouselBlock bannerData={promotionBanners} />
        <CategoryBlock sectionHeading="Shop By Category" />
        <Divider />
        <BestSellerProductFeed />
        <BannerCard
          key={`banner--key${banner.id}`}
          banner={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="h-28 sm:h-auto"
        />
        <NewArrivalsProductFeed />
        <Divider />
        <BrandBlock sectionHeading="Top Brands" />
        <CollectionBlock data={collection} />
        <FeatureBlock />
        <DownloadApps className="bg-linen" />
        <Support />
        <Subscription className="bg-linen px-5 sm:px-8 md:px-16 2xl:px-24" />
      </Container>
    </>
  );
}
