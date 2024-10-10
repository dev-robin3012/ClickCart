import BannerCard from "@/components/common/banner-card";
import Carousel from "@/components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";

interface Props {
  className?: string;
  paginationPosition?: "left" | "center";
  bannerData?: any;
}

const HeroWithCategory: React.FC<Props> = ({
  className = "mb-12 md:mb-14 xl:mb-16",
  paginationPosition = "center",
  bannerData,
}) => {
  return (
    <div className={` ${className}`}>
      <div className="heightFull">
        <Carousel
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          buttonGroupClassName="hidden"
          paginationPosition={paginationPosition}
        >
          {bannerData?.map((banner: any) => (
            <SwiperSlide key={`banner--key${banner.id}`}>
              <BannerCard banner={banner} href="/" className="xl:h-full" />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroWithCategory;
