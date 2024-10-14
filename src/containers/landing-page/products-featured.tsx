import SectionHeader from "@/components/common/section-header";
import ProductOverlayCard from "@/components/product/product-overlay-card";
import Alert from "@/components/ui/alert";
import { Product } from "@/framework/basic-rest/types";
import { getProducts } from "@/services/product/get-products";
import cn from "classnames";
import Image from "next/image";
import { useQuery } from "react-query";

const themeVariant = process.env.THEME_Variant;
interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  limit?: number;
  variant?: "left" | "center" | "combined" | "flat" | "modern";
  demoVariant?: "ancient";
  hideBanner?: boolean;
  disableBorderRadius?: boolean;
}

const ProductsFeatured: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = "mb-12 md:mb-14 xl:mb-16",
  variant = "left",
  limit = 5,
  hideBanner = false,
  disableBorderRadius = false,
}) => {
  const { data, error } = useQuery<Product[], Error>(
    "top-selling-products",
    () => getProducts({ featured: true }).then((data) => data)
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
        <div
          className={cn(
            `grid grid-cols-4 grid-rows-2 gap-${
              themeVariant === "ancient" ? 1 : 3
            } md:gap-${themeVariant === "ancient" ? 2 : 5} xl:gap-${
              themeVariant === "ancient" ? 1 : 7
            }`,
            {
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4": variant === "modern",
            }
          )}
        >
          {hideBanner === false && variant === "modern" && (
            <div className="sm:row-span-2">
              <Image
                src="/assets/images/products/featured/featured-products-banner.png"
                width={435}
                height={647}
                className="rounded-md"
                alt=""
              />
            </div>
          )}
          {data?.slice(0, limit).map((product: Product, idx: number) => (
            <ProductOverlayCard
              disableBorderRadius={disableBorderRadius}
              key={`product--key${product.id}`}
              product={product}
              variant={variant}
              index={idx}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsFeatured;
