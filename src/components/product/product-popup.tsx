import woo_client from "@/api-config/woo-client";
import Counter from "@/components/common/counter";
import { Markdown } from "@/components/markdown";
import { ProductAttributes } from "@/components/product/product-attributes";
import Button from "@/components/ui/button";
import usePrice from "@/framework/basic-rest/product/use-price";
import useCart from "@/hooks/useCart";
import useModal from "@/hooks/useModal";
import { ROUTES } from "@/utils/routes";
import { isEmpty } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffectOnce } from "react-use";

export default function ProductPopup({ data }: any) {
  const [product, setProduct] = useState(data);
  const [viewCartBtn, setViewCartBtn] = useState(false);
  const [qty, setQty] = useState(1);

  const [variations, setVariations] = useState<any>(
    Object.assign(
      {},
      ...product?.attributes?.map(({ name }: any) => ({ [name]: "" }))
    )
  );

  const { closeModal } = useModal();
  const { addToCart, showCart } = useCart();

  const { slug, images, name, short_description, price_html } = product || {};

  let addToCartActive = !product.attributes.length;

  !isEmpty(variations) &&
    Object.entries(variations).every(
      ([_, value]) => (addToCartActive = !!value)
    );

  const variableProduct: any = product.variations.find((v: any) =>
    v.attributes?.every((att: any) => variations[att.name] === att.option)
  );

  const handleAddToCart = () => {
    let payload;
    if (isEmpty(variations)) {
      payload = {
        id: product.id,
        parentID: product.id,
        price: product.price,
        regularPrice: product.regular_price,
        name,
        slug,
        images,
        qty,
      };
    } else {
      // const variation = product.variations.find((v: any) =>
      //   v.attributes?.every((att: any) => variations[att.name] === att.option)
      // );

      payload = {
        id: variableProduct?.id,
        parentID: product.id,
        price: variableProduct?.price,
        regularPrice: Number(variableProduct?.regular_price),
        name,
        slug,
        images,
        qty,
      };
    }

    addToCart(payload);
    setViewCartBtn(true);
  };

  const { price, basePrice, discount } = usePrice({
    amount: data.sale_price ? data.sale_price : data.price,
    baseAmount: data.price,
    currencyCode: "USD",
  });

  useEffectOnce(() => {
    (async () => {
      const { data: variations } = await woo_client.get(
        `products/${data.id}/variations`
      );
      setProduct({ ...product, variations });
    })();
  });

  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden">
        <div className="flex-shrink-0 relative flex items-center justify-center w-full lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-gray-300">
          <Image
            src={
              images.length
                ? images[0].src
                : "/assets/placeholder/products/product-thumbnail.svg"
            }
            alt={name}
            layout="fill"
          />
        </div>

        <div className="flex flex-col p-5 md:p-8 w-full">
          <div className="pb-5">
            <div className="mb-2 md:mb-2.5 block -mt-1.5">
              <Link href={`${ROUTES.PRODUCT}/${slug}`}>
                <h2 className="text-heading text-lg md:text-xl cursor-pointer lg:text-2xl font-semibold hover:text-black">
                  {name}
                </h2>
              </Link>
            </div>

            <Markdown content={short_description} />

            {variableProduct ? (
              <h2 className="text-4xl font-bold text-heading">
                ৳{variableProduct.price}
              </h2>
            ) : (
              <Markdown content={price_html || ""} />
            )}

            <div className="flex items-center mt-3">
              <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                {price}
              </div>
              {discount && (
                <del className="font-segoe text-gray-400 text-base lg:text-xl ps-2.5 -mt-0.5 md:mt-0">
                  {basePrice}
                </del>
              )}
            </div>
          </div>

          {product.attributes?.map((att: any) => (
            <ProductAttributes
              key={`popup-attribute-key${att.id}`}
              title={att.name}
              attributes={att.options}
              onChange={(val: any) =>
                setVariations((pre: any) => ({ ...pre, ...val }))
              }
            />
          ))}

          {/* {Object.keys(variations).map((variation) => {
            return (
              <ProductAttributes
                key={`popup-attribute-key${variation}`}
                title={variation}
                attributes={variations[variation]}
                active={attributes[variation]}
                onClick={handleAttribute}
              />
            );
          })} */}

          <div className="pt-2 md:pt-4">
            <div className="flex items-center justify-between mb-4 space-s-3 sm:space-s-4">
              <Counter
                quantity={qty}
                onIncrement={() => setQty((prev: any) => prev + 1)}
                onDecrement={() => setQty((prev: any) => prev - 1)}
                disableDecrement={qty === 1}
              />
              <Button
                disabled={!addToCartActive}
                onClick={handleAddToCart}
                variant="flat"
                className={`w-full h-11 md:h-12 px-1.5 ${
                  !addToCartActive && "bg-gray-400 hover:bg-gray-400"
                }`}
                // loading={addToCartLoader}
              >
                Add To Cart
              </Button>
            </div>

            {viewCartBtn && (
              <button
                onClick={() => {
                  closeModal();
                  showCart();
                }}
                className="w-full mb-4 h-11 md:h-12 rounded bg-gray-100 text-heading focus:outline-none border border-gray-300 transition-colors hover:bg-gray-50 focus:bg-gray-50"
              >
                View Cart
              </button>
            )}

            <Link href={`products/${slug}`}>
              <Button
                variant="flat"
                className="w-full h-11 md:h-12"
                onClick={() => closeModal()}
              >
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
