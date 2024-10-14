import CategoryCard from "@/components/common/category-card";
import SectionHeader from "@/components/common/section-header";
import Carousel from "@/components/ui/carousel/carousel";
import { CategoryContext } from "@/contexts/index";
import { useSsrCompatible } from "@/utils/use-ssr-compatible";
import { useWindowSize } from "@/utils/use-window-size";
import { useContext } from "react";
import { SwiperSlide } from "swiper/react";

interface CategoriesProps {
  sectionHeading: string;
  className?: string;
}

const breakpoints = {
  "1220": {
    slidesPerView: 4,
    spaceBetween: 28,
  },
  "768": {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  "440": {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  "0": {
    slidesPerView: 1,
    spaceBetween: 12,
  },
};

const CategoryGridBlock: React.FC<CategoriesProps> = ({
  sectionHeading = "text-section-title",
  className = "mb-12 md:mb-14 xl:mb-16",
}) => {
  const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });

  const { categories } = useContext(CategoryContext);

  return (
    <div className={className}>
      <SectionHeader sectionHeading={sectionHeading} />
      <>
        {width < 1025 ? (
          <div className="relative">
            <Carousel
              breakpoints={breakpoints}
              autoplay={{
                delay: 4000,
              }}
            >
              {categories?.map((category) => (
                <SwiperSlide key={`category--key${category.id}`}>
                  <CategoryCard category={category} />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-5 xl:gap-7">
            {categories?.map((category) => (
              <CategoryCard
                key={`category--key${category.id}`}
                category={category}
              />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default CategoryGridBlock;
