import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/product/product-card";
import Carousel from "@/components/ui/carousel/carousel";
import ProductCardGridLoader from "@/components/ui/loaders/product-card-grid-loader";
import { Product } from "@/framework/basic-rest/types";
import { getProducts } from "@/services/product/get-products";
import { useQuery } from "react-query";
import { SwiperSlide } from "swiper/react";

interface ProductsProps {
  sectionHeading?: string;
  className?: string;
  date?: any;
}

const breakpoints = {
  "1500": { slidesPerView: 5, spaceBetween: 28 },
  "1025": { slidesPerView: 4, spaceBetween: 20 },
  "768": { slidesPerView: 3, spaceBetween: 20 },
  "480": { slidesPerView: 3, spaceBetween: 12 },
  "0": { slidesPerView: 2, spaceBetween: 12 },
};

const ProductsFlashSaleCarousel: React.FC<ProductsProps> = ({
  sectionHeading = "Flash sale",
  className = "mb-10 md:mb-12 xl:mb-14",
}) => {
  const { data, isLoading } = useQuery<Product[], Error>("flash-sale", () =>
    getProducts({ on_sale: true }).then((data) => data)
  );

  return (
    <div className={`${className} 2xl:pt-2`}>
      <div className="flex justify-between items-center flex-wrap mb-5 md:mb-6">
        <SectionHeader sectionHeading={sectionHeading} className="mb-0" />
      </div>

      <Carousel
        autoplay={{ delay: 3500 }}
        breakpoints={breakpoints}
        buttonGroupClassName="-mt-10 md:-mt-12 xl:-mt-14"
      >
        {isLoading
          ? Array.from({ length: 10 }).map((_, idx) => (
              <SwiperSlide key={`product--key-${idx}`}>
                <ProductCardGridLoader uniqueKey={`flash-sale-${idx}`} />
              </SwiperSlide>
            ))
          : data?.map((product: any) => (
              <SwiperSlide key={`product--key-${product.id}`}>
                <ProductCard
                  product={product}
                  imgWidth={335}
                  imgHeight={335}
                  variant="gridSlim"
                />
              </SwiperSlide>
            ))}
      </Carousel>
    </div>
  );
};

export default ProductsFlashSaleCarousel;
