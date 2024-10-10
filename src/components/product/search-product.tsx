import Link from "@/components/ui/link";
import { Product } from "@/framework/basic-rest/types";
import { ROUTES } from "@/utils/routes";
import Image from "next/image";

type SearchProductProps = {
  item: Product;
};

const SearchProduct: React.FC<SearchProductProps> = ({ item }) => {
  return (
    <Link
      href={`${ROUTES.PRODUCT}/${item?.slug}`}
      className="group w-full h-auto flex justify-start items-center"
    >
      <div className="relative flex w-24 h-24 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4">
        <Image
          src={item?.images[0]?.src ?? "/assets/placeholder/search-product.svg"}
          width={96}
          height={96}
          loading="eager"
          alt={item.name || "Product Image"}
          className="bg-gray-200 object-cover"
        />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <h3 className="truncate text-sm text-heading mb-2">{item.name}</h3>
        {/* <div className="text-heading font-semibold text-sm">
          {100}
          <del className="ps-2 text-gray-400 font-normal">{150}</del>
        </div> */}
        <div
          dangerouslySetInnerHTML={{ __html: item.price_html || "" }}
          className="font-semibold [&>del]:text-gray-400 text-heading [&>ins]:no-underline text-sm"
        ></div>
      </div>
    </Link>
  );
};

export default SearchProduct;
