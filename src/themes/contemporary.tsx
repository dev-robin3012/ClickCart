import BannerCard from "@/components/common/banner-card";
import Container from "@/components/ui/container";
import HeroSlider from "@/containers/hero-slider";
import CategoryBlockIcon from "@/containers/landing-page/category-block-icon";
import CollectionBlock from "@/containers/landing-page/collection-block";
import NewArrivalsProductFeedWithTabs from "@/containers/landing-page/new-arrivals-product-feed-with-tabs";
import ProductsFeatured from "@/containers/landing-page/products-featured";
import TestimonialCarousel from "@/containers/testimonial-carousel";
import { homeSevenBanner as banner } from "@/framework/basic-rest/static/banner";
import { collectionContemporaryData as collection } from "@/framework/basic-rest/static/collection";
import { ROUTES } from "@/utils/routes";
// All data file
import DownloadApps from "@/components/common/download-apps";
import Instagram from "@/components/common/instagram";
import Subscription from "@/components/common/subscription";
import RecentProductFeed from "@/components/product/feeds/recent-product-feed";
import BrandTimerBlock from "@/containers/brand-timer-block";
import TrendingProductFeedWithTabs from "@/containers/landing-page/trending-product-feed-with-tabs";
import SaleBannerGrid from "@/containers/sale-banner-grid";
import {
  bannerDataContemporary,
  homeContemporaryHeroSlider as banners,
  contemporaryBanner1,
  contemporaryBanner2,
} from "@/framework/basic-rest/static/banner";

export default function ContemporaryTheme() {
  return (
    <>
      <HeroSlider
        data={banners}
        variantRounded="default"
        variant="fullWidth"
        prevNextButtons="none"
        className="!mb-12 !md:mb-14 !xl:mb-[60px]"
      />
      <Container className="border-b-2 border[#E6E6E6]">
        <CategoryBlockIcon sectionHeading="Browse Categories" variant="list" />
        <SaleBannerGrid
          data={bannerDataContemporary}
          className="mb-12 md:mb-14 xl:mb-16"
        />
        <NewArrivalsProductFeedWithTabs />
        <BrandTimerBlock
          sectionHeading="Top Brands Deal"
          className="mb-12 md:mb-14 xl:mb-16"
        />
        <ProductsFeatured
          limit={3}
          variant="modern"
          sectionHeading="Featured Products"
        />
        <BannerCard
          key={`banner--key${banner.id}`}
          banner={contemporaryBanner1}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5"
        />
        <TrendingProductFeedWithTabs />
        <BannerCard
          key={`banner--key1${banner.id}`}
          banner={contemporaryBanner2}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5"
        />

        <CollectionBlock
          variant="trendy"
          data={collection}
          sectionHeading="Trending Collection"
        />
        <RecentProductFeed />
        <DownloadApps
          className="bg-app-pattern mb-12 md:mb-14 xl:mb-16"
          variant="modern"
        />
        <TestimonialCarousel
          sectionHeading="Testimonial"
          type="list"
          className="relative mb-12 md:mb-14 xl:mb-16"
        />
        <Instagram className="mb-4 md:mb-5 xl:mb-16" variant="rounded" />
        <Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 mb-12 md:mb-14 xl:mb-16 !py-0 !md:py-0 !lg:py-0" />
      </Container>
    </>
  );
}
