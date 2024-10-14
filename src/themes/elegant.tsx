import BannerCard from "@/components/common/banner-card";
import SubscriptionWithBg from "@/components/common/subscription-with-bg";
import Container from "@/components/ui/container";
import BrandGridBlock from "@/containers/brand-grid-block";
import ExclusiveBlock from "@/containers/exclusive-block";
import HeroSlider from "@/containers/hero-slider";
import CategoryBlockIcon from "@/containers/landing-page/category-block-icon";
import CollectionBlock from "@/containers/landing-page/collection-block";
import NewArrivalsProductFeed from "@/containers/landing-page/new-arrivals-product-feed";
import ProductsFlashSaleCarousel from "@/containers/landing-page/product-flash-sale-carousel";
import ProductsFeatured from "@/containers/landing-page/products-featured";
import TestimonialCarousel from "@/containers/testimonial-carousel";
import { homeSevenBanner as banner } from "@/framework/basic-rest/static/banner";
import { collectionModernData as collection } from "@/framework/basic-rest/static/collection";
import { ROUTES } from "@/utils/routes";

// All data file
import BannerBlock from "@/containers/landing-page/banner-block";
import ProductsTopBlock from "@/containers/landing-page/products-top-block";
import {
  bannerDataThree,
  homeElegantHeroSlider as banners,
} from "@/framework/basic-rest/static/banner";

export default function ElegantTheme() {
  return (
    <>
      <HeroSlider data={banners} variantRounded="default" variant="fullWidth" />
      <Container>
        <BannerBlock
          data={bannerDataThree}
          className="mb-12 md:mb-14 xl:mb-16"
        />
        <CategoryBlockIcon
          sectionHeading="Browse Categories"
          variant="modern"
        />
        <ProductsFeatured
          limit={4}
          variant="combined"
          sectionHeading="Featured Products"
        />
        <ProductsFlashSaleCarousel />
        <BannerCard
          key={`banner--key${banner.id}`}
          banner={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5"
        />
        <BrandGridBlock
          sectionHeading="Top Brands"
          limit={12}
          variant="6column"
        />
        <ProductsTopBlock sectionHeading="Top Products" />
        <ExclusiveBlock variant="modern" />
        <NewArrivalsProductFeed />
        <TestimonialCarousel sectionHeading="Testimonial" />
        <CollectionBlock variant="modern" data={collection} />
        <SubscriptionWithBg />
      </Container>
    </>
  );
}
