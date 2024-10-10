import Accordion from "@/components/common/accordion";
import Counter from "@/components/common/counter";
import { Markdown } from "@/components/markdown";
import Button from "@/components/ui/button";
import { Product } from "@/framework/basic-rest/types";
import useCart from "@/hooks/useCart";
import { useSsrCompatible } from "@/utils/use-ssr-compatible";
import { isEmpty } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { ReactImageZoom } from "react-image-zoom";
import { useWindowSize } from "react-use";
import { ProductAttributes } from "./product-attributes";
import ProductMetaReview from "./product-meta-review";

interface IProps {
  product: Product;
}

const ProductSingleDetails: FC<IProps> = ({ product }) => {
  const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
  const [highlightImg, setHighlightImg] = useState(product.images[0]);

  const placeholderImage = `/assets/placeholder/products/product-grid.svg`;

  const [qty, setQty] = useState(1);

  const [variations, setVariations] = useState<any>(
    Object.assign(
      {},
      ...product?.attributes?.map(({ name }: any) => ({ [name]: "" }))
    )
  );

  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);

  const { addToCart } = useCart();

  let addToCartActive = isEmpty(variations) ? true : false;

  !isEmpty(variations) &&
    Object.entries(variations).every(
      ([_, value]) => (addToCartActive = !!value)
    );

  const variableProduct: any = product.variations.find((v: any) =>
    v.attributes?.every((att: any) => variations[att.name] === att.option)
  );

  const handleAddToCart = async () => {
    setAddToCartLoader(true);
    let payload;
    if (isEmpty(variations)) {
      payload = {
        id: product.id,
        parentID: product.id,
        price: product.price,
        regularPrice: product.regular_price,
        name: product.name,
        slug: product.slug,
        images: product.images,
        qty,
      };
    } else {
      // const variation = product.variations.find((v: any) =>
      //   v.attributes?.every((att: any) => variations[att.name] === att.option)
      // );

      payload = {
        // @ts-ignore
        id: variableProduct?.id,
        parentID: product.id,
        // @ts-ignore
        price: variableProduct?.price,
        // @ts-ignore
        regularPrice: Number(variableProduct.regular_price),
        name: product.name,
        slug: product.slug,
        images: product.images,
        qty,
      };
    }

    await addToCart(payload);
    setAddToCartLoader(false);
  };

  return (
    <div className="block lg:grid grid-cols-8 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
      <div className="col-span-4 flex items-center justify-center flex-col">
        {highlightImg ? (
          <ReactImageZoom
            img={highlightImg.src || ""}
            zoomPosition="original"
            width={width < 500 ? 350 : 600}
            height={width < 500 ? 350 : 600}
          />
        ) : (
          <Image
            src={placeholderImage}
            alt=""
            className={`h-[${width < 500 ? 350 : 600}px]`}
            width={500}
            height={600}
          />
        )}
        <div className="flex items-center gap-5">
          {product.images.map((img, index) => (
            <div
              key={index}
              className="hover:opacity-90 md:h-32 md:w-32 h-24 w-24"
            >
              <Image
                onClick={() => setHighlightImg(img)}
                src={
                  img?.src ?? "/assets/placeholder/products/product-gallery.svg"
                }
                alt={`${product?.name}--${index}`}
                className="object-cover w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-4 pt-8 lg:pt-0">
        <div className="pb-7 mb-7 border-b border-gray-300">
          <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
            {product?.name}
          </h2>

          <Markdown content={product?.short_description || ""} />
          {variableProduct ? (
            <h2 className="text-4xl font-bold text-heading">
              ৳{variableProduct.price}
            </h2>
          ) : (
            <Markdown content={product?.price_html || ""} />
          )}
        </div>

        <div className="pb-3 border-b border-gray-300">
          {product.attributes.map((att: any) => (
            <ProductAttributes
              key={`popup-attribute-key${att.id}`}
              title={att.name}
              attributes={att.options}
              onChange={(val: any) =>
                setVariations((pre: any) => ({ ...pre, ...val }))
              }
            />
          ))}
        </div>

        <div className="flex items-center space-s-4 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48 border-b border-gray-300 py-8">
          <Counter
            quantity={qty}
            onIncrement={() => setQty((prev) => prev + 1)}
            onDecrement={() => setQty((prev) => prev - 1)}
            disableDecrement={qty === 1}
          />
          <Button
            onClick={handleAddToCart}
            variant="slim"
            className={`w-full md:w-6/12 xl:w-full  ${
              !addToCartActive && "bg-gray-400 hover:bg-gray-400"
            }`}
            loading={addToCartLoader}
            disabled={!addToCartActive}
          >
            <span className="py-2 3xl:px-8">Add to cart</span>
          </Button>
        </div>
        <div className="py-6">
          <Accordion
            items={[
              {
                title: "Product Details",
                content: <Markdown content={product?.description || ""} />,
              },
              {
                title: "Additional Information",
                content: (
                  <ul className="text-sm space-y-5 pb-1">
                    <li>
                      <span className="font-semibold text-heading inline-block pe-2">
                        SKU:
                      </span>
                      {product?.sku}
                    </li>
                    <li>
                      <span className="font-semibold text-heading inline-block pe-2">
                        Category:
                      </span>
                      {product.categories.map((cat) => (
                        <Link
                          href="/"
                          className="transition hover:underline hover:text-heading"
                          key={cat.id}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </li>
                  </ul>
                ),
              },
            ]}
            translatorNS="Robin"
          />
        </div>

        <ProductMetaReview data={[]} />
      </div>
    </div>
  );
};

export default ProductSingleDetails;
