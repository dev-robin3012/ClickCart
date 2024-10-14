import BannerCard from "@/components/common/banner-card";
import Instagram from "@/components/common/instagram";
import SubscriptionWithBg from "@/components/common/subscription-with-bg";
import Container from "@/components/ui/container";
import BannerBlock from "@/containers/landing-page/banner-block";
import BrandBlock from "@/containers/landing-page/brand-block";
import CategoryBlockIcon from "@/containers/landing-page/category-block-icon";
import CollectionBlock from "@/containers/landing-page/collection-block";
import HeroWithCategory from "@/containers/landing-page/hero-with-category";
import NewArrivalsProductFeed from "@/containers/landing-page/new-arrivals-product-feed";
import ProductsFlashSaleCarousel from "@/containers/landing-page/product-flash-sale-carousel";
import ProductsFeatured from "@/containers/landing-page/products-featured";
import ProductsTopBlock from "@/containers/landing-page/products-top-block";
import SaleBannerWithProducts from "@/containers/landing-page/sale-banner-with-products";
import TestimonialCarousel from "@/containers/testimonial-carousel";
import {
  homeEightCoupons as banner,
  bannerDataFour,
  bannerDataFourMobile,
  homeEightWinterBanner as bannerWinter,
  homeEightHeroBanner as heroBanner,
} from "@/framework/basic-rest/static/banner";
import { collectionModernData as collection } from "@/framework/basic-rest/static/collection";
import { ROUTES } from "@/utils/routes";

export default function RefinedTheme() {
  return (
    <>
      <Container>
        <HeroWithCategory
          bannerData={heroBanner}
          paginationPosition="left"
          className="hero-slider-pagination-area mb-12 md:mb-14 xl:mb-16"
        />
        <BrandBlock sectionHeading="Top Brands" />
        <SaleBannerWithProducts
          sectionHeading="On Selling Products"
          categorySlug="/search"
          variant="center"
        />
        <ProductsFeatured
          variant="flat"
          sectionHeading="Featured Products"
          limit={8}
        />
        <BannerBlock
          data={bannerDataFour}
          className="mb-12 md:mb-14 xl:mb-16 hidden sm:flex"
        />
        <BannerBlock
          data={bannerDataFourMobile}
          className="mb-12 md:mb-14 xl:mb-16 sm:hidden"
        />
        <CategoryBlockIcon
          sectionHeading="Browse Categories"
          variant="circle"
        />
        <NewArrivalsProductFeed />
        <BannerCard
          banner={bannerWinter}
          href={`${ROUTES.COLLECTIONS}/${bannerWinter.slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <ProductsFlashSaleCarousel />
        <ProductsTopBlock sectionHeading="Top Products" />
        <CollectionBlock variant="modern" data={collection} />
        <BannerCard
          banner={banner}
          href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <TestimonialCarousel sectionHeading="Testimonial" />
        <Instagram className="mb-12 md:mb-14 xl:mb-16" />
        <SubscriptionWithBg />
      </Container>
    </>
  );
}
