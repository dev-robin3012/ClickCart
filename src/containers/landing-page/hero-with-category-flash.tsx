import BannerCard from "@/components/common/banner-card";
import CategoryListCard from "@/components/common/category-list-card";
import SellWithProgress from "@/components/common/sale-with-progress";
import Carousel from "@/components/ui/carousel/carousel";
import CategoryListCardLoader from "@/components/ui/loaders/category-list-card-loader";
import { CategoryContext } from "@/contexts/index";
import { homeFourGridBanners as banners } from "@/framework/basic-rest/static/banner";
import { Product } from "@/framework/basic-rest/types";
import { getProducts } from "@/services/product/get-products";
import { ROUTES } from "@/utils/routes";
import { useSsrCompatible } from "@/utils/use-ssr-compatible";
import { useWindowSize } from "@/utils/use-window-size";
import { useContext } from "react";
import { useQuery } from "react-query";
import { SwiperSlide } from "swiper/react";

interface Props {
  className?: string;
}

const categoryResponsive = {
  "768": { slidesPerView: 3, spaceBetween: 14 },
  "480": { slidesPerView: 2, spaceBetween: 12 },
  "0": { slidesPerView: 1, spaceBetween: 12 },
};

const HeroWithCategoryFlash: React.FC<Props> = ({
  className = "mb-12 md:mb-14 xl:mb-16",
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-7 2xl:grid-cols-9 gap-5 xl:gap-7 lg:gap-y-14 ${className}`}
    >
      <CategoryListCardSection />
      <div className="col-span-full lg:col-span-5 xl:col-span-5 row-span-full lg:row-auto grid grid-cols-2 gap-2 md:gap-3.5 lg:gap-5 xl:gap-7">
        {banners.map((banner: any) => (
          <BannerCard
            key={`banner--key${banner.id}`}
            banner={banner}
            href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
            className={banner.type === "large" ? "col-span-2" : "col-span-1"}
          />
        ))}
      </div>
      <SellWithProgressCardSection />
    </div>
  );
};

// CategoryList section
export function CategoryListCardSection() {
  const { width } = useSsrCompatible(useWindowSize(), { height: 0, width: 0 });

  const { categories, isLoading } = useContext(CategoryContext);

  return (
    <>
      {width < 1024 ? (
        <div className="col-span-full">
          <Carousel
            breakpoints={categoryResponsive}
            autoplay={{
              delay: 4000,
            }}
            buttonSize="small"
          >
            {isLoading
              ? Array.from({ length: 7 }).map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <CategoryListCardLoader
                      uniqueKey={`category-list-${idx}`}
                    />
                  </SwiperSlide>
                ))
              : categories?.map((category: any) => (
                  <SwiperSlide key={`sm-category--key${category.id}`}>
                    <CategoryListCard category={category} />
                  </SwiperSlide>
                ))}
          </Carousel>
        </div>
      ) : (
        <div className="col-span-full lg:col-span-2 grid grid-cols-1 gap-3 justify-between">
          {isLoading
            ? Array.from({ length: 7 }).map((_, idx) => (
                <CategoryListCardLoader
                  key={idx}
                  uniqueKey={`category-list-${idx}`}
                />
              ))
            : categories
                ?.slice(0, 7)
                .map((category: any) => (
                  <CategoryListCard
                    key={`lg-category--key${category.id}`}
                    category={category}
                  />
                ))}
        </div>
      )}
    </>
  );
}

// ProgressCard section
export function SellWithProgressCardSection() {
  const { width } = useSsrCompatible(useWindowSize(), { height: 0, width: 0 });

  const { data, isLoading } = useQuery<Product[], Error>("flash-sale", () =>
    getProducts({ on_sale: true }).then((products) => products as Product[])
  );

  return (
    <>
      {width < 1441 ? (
        <SellWithProgress
          products={data || []}
          className="col-span-full"
          loading={isLoading}
          // error={error?.message}
        />
      ) : (
        <SellWithProgress
          products={data || []}
          productVariant="gridSlim"
          loading={isLoading}
          imgWidth={330}
          imgHeight={425}
          // error={error?.message}
          className="col-span-full 2xl:col-span-2 2xl:row-auto"
        />
      )}
    </>
  );
}

export default HeroWithCategoryFlash;
