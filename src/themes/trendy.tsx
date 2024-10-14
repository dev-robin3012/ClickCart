import BannerCard from "@/components/common/banner-card";
import SubscriptionWithBg from "@/components/common/subscription-with-bg";
import Container from "@/components/ui/container";
import BrandGridBlock from "@/containers/brand-grid-block";
import HeroSlider from "@/containers/hero-slider";
import CategoryBlockIcon from "@/containers/landing-page/category-block-icon";
import NewArrivalsProductFeed from "@/containers/landing-page/new-arrivals-product-feed";
import ProductsFlashSaleCarousel from "@/containers/landing-page/product-flash-sale-carousel";
import ProductsFeatured from "@/containers/landing-page/products-featured";
import SaleBannerWithProducts from "@/containers/landing-page/sale-banner-with-products";
import SaleBannerGrid from "@/containers/sale-banner-grid";
import TestimonialCarousel from "@/containers/testimonial-carousel";
import {
  homeSixCoupons as banner,
  homeSixHeroSlider as banners,
} from "@/framework/basic-rest/static/banner";
import { ROUTES } from "@/utils/routes";

export default function TrendyTheme() {
  return (
    <>
      <Container>
        <HeroSlider data={banners} buttonGroupClassName="hidden" />
        <SaleBannerGrid />
        <CategoryBlockIcon sectionHeading="Featured Categories" />
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
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
        />
        <NewArrivalsProductFeed />

        <SaleBannerWithProducts
          sectionHeading="On Selling Products"
          categorySlug="/search"
        />
        <BrandGridBlock
          sectionHeading="Top Brands"
          limit={12}
          variant="6column"
        />
        <TestimonialCarousel sectionHeading="Testimonial" />
        <SubscriptionWithBg />
      </Container>
    </>
  );
}
