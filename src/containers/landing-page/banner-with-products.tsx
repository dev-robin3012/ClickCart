import BannerCard from "@/components/common/banner-card";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/product/product-card";
import Alert from "@/components/ui/alert";
import ProductCardListSmallLoader from "@/components/ui/loaders/product-card-small-list-loader";
import { homeThreeProductsBanner as banner } from "@/framework/basic-rest/static/banner";
import { Product } from "@/framework/basic-rest/types";
import { getProducts } from "@/services/product/get-products";
import { ROUTES } from "@/utils/routes";
import { useQuery } from "react-query";

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  variant?: "default" | "reverse";
}

const BannerWithProducts: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  variant = "default",
  className = "mb-12 md:mb-14 xl:mb-16",
}) => {
  const { data, isLoading, error } = useQuery<Product[], Error>(
    "on-selling-products",
    () => getProducts({ on_sale: true, per_page: 12 }).then((data) => data)
  );

  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div className="grid grid-cols-4 gap-3 lg:gap-5 xl:gap-7">
          {variant === "reverse" ? (
            <BannerCard
              banner={banner[1]}
              href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
              className="hidden 3xl:block"
              effectActive={true}
            />
          ) : (
            <BannerCard
              banner={banner[0]}
              href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
              className="hidden 3xl:block"
              effectActive={true}
            />
          )}
          <div
            className={`col-span-full 3xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 ${
              variant === "reverse" ? "row-span-full" : ""
            }`}
          >
            {isLoading
              ? Array.from({ length: 9 }).map((_, idx) => (
                  <ProductCardListSmallLoader
                    key={idx}
                    uniqueKey={`on-selling-${idx}`}
                  />
                ))
              : data?.map((product: Product) => (
                  <ProductCard
                    key={`product--key${product.id}`}
                    product={product}
                    imgWidth={176}
                    imgHeight={176}
                    variant="listSmall"
                  />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerWithProducts;
