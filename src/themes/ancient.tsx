import DownloadApps from "@/components/common/download-apps";
import Instagram from "@/components/common/instagram";
import Subscription from "@/components/common/subscription";
import Container from "@/components/ui/container";
import BannerBlockAncient from "@/containers/banner-block-ancient";
import HireDesignerAncient from "@/containers/buy-designer-ancient";
import HeroSlider from "@/containers/hero-slider";
import BrandBlock from "@/containers/landing-page/brand-block";
import CategoryBlock from "@/containers/landing-page/category-block";
import NewArrivalsProductFeed from "@/containers/landing-page/new-arrivals-product-feed";
import PopularProductFeed from "@/containers/landing-page/popular-product-feed";
import ProductsFlashSaleBlock from "@/containers/landing-page/product-flash-sale-block";
import ProductsFeatured from "@/containers/landing-page/products-featured";
import TestimonialCarousel from "@/containers/testimonial-carousel";
import { ancientHeroBanner } from "@/framework/basic-rest/static/banner";
import Layout from "@/layout/layout-one";

export default function AncientTheme() {
  const sectionCommonStyle = "mb-7 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-[75px]";

  return (
    <>
      <HeroSlider
        data={ancientHeroBanner}
        variantRounded="default"
        variant="fullWidth"
        className={sectionCommonStyle}
        buttonGroupClassName="hidden"
      />

      <Container>
        <CategoryBlock
          type="rounded"
          sectionHeading="Browse Categories"
          roundedItemCount={5}
          roundedSpaceBetween={8}
          imgSize="large"
          demoVariant="ancient"
          disableBorderRadius={true}
          className={`${sectionCommonStyle} lg:pb-1 xl:pb-0`}
        />

        <NewArrivalsProductFeed
          demoVariant="ancient"
          hideProductDescription={true}
          showCategory={true}
          showRating={true}
          disableBorderRadius={true}
          className={sectionCommonStyle}
        />

        <BannerBlockAncient
          disableBorderRadius={true}
          largeFirst={true}
          dataVariant="two"
          demoVariant="ancient"
          className={sectionCommonStyle}
        />

        <ProductsFeatured
          sectionHeading="Featured Products"
          limit={4}
          variant="modern"
          hideBanner={true}
          demoVariant="ancient"
          disableBorderRadius={true}
          className={sectionCommonStyle}
        />

        <BannerBlockAncient
          // className={`${sectionCommonStyle} lg:pb-1 xl:pb-0`}
          disableBorderRadius={true}
          demoVariant="ancient"
          spaceBetween={10}
          className={sectionCommonStyle}
        />

        <BrandBlock
          disableBorderRadius={true}
          sectionHeading="Top Brands"
          showName={false}
          demoVariant="ancient"
          className={"mb-[14px] md:mb-6 lg:mb-7 xl:mb-8 2xl:mb-[45px]"}
        />

        <ProductsFlashSaleBlock
          itemVariant="listSmall"
          disableSectionBorder={true}
          disableSectionPadding={true}
          hideCountdown={true}
          limit={8}
          TwoXlCols={4}
          demoVariant="ancient"
          disableBorderRadius={true}
          className={sectionCommonStyle}
          bgGray={true}
        />
      </Container>

      <HireDesignerAncient />

      <Container>
        <PopularProductFeed
          disableBorderRadius={true}
          demoVariant="ancient"
          className={sectionCommonStyle}
        />

        <DownloadApps
          disableBorderRadius={true}
          className={`bg-app-pattern ${sectionCommonStyle}`}
          variant="ancient"
        />

        <TestimonialCarousel
          sectionHeading="Testimonial"
          type="list"
          className="relative mb-12 md:mb-14 xl:mb-16"
          disableBoarderRadius={true}
          reduceCardSpacing={true}
          demoVariant="ancient"
        />

        <Instagram
          disableContainerBorderRadius={true}
          className={`mb-11 lg:mb-12 xl:mb-14 2xl:mb-[75px] md:gap-[7px]`}
        />

        <Subscription
          disableBorderRadius={true}
          className="bg-opacity-0 px-5 sm:px-16 xl:px-0 mb-12 md:mb-14 xl:mb-16 !py-0 !md:py-0 !lg:py-0"
        />
      </Container>
    </>
  );
}

AncientTheme.Layout = Layout;
