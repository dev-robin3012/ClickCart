import { useRouter } from "next/router";
import { FC } from "react";
import CategoryFilter from "./category-filter";
import BrandFilter from "./brand-filter";
import PriceFilter from "./price-filter";

export const ShopFilters: FC = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="pt-1">
      <div className="border-b border-gray-300 pb-7 mb-7">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="font-semibold text-heading text-xl md:text-2xl">
            Filters
          </h2>
          <button
            className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
            aria-label="Clear All"
            onClick={() => {
              router.push(pathname);
            }}
          >
            clear-all
          </button>
        </div>
        {/* <div className="flex flex-wrap -m-1.5 pt-2">
          {!isEmpty(query) &&
            Object.values(query)
              .join(",")
              .split(",")
              .map((v, idx) => (
                <FilteredItem
                  itemKey={
                    Object.keys(query).find((k) => query[k]?.includes(v))!
                  }
                  itemValue={v}
                  key={idx}
                />
              ))}
        </div> */}
      </div>

      <CategoryFilter />
      <BrandFilter />
      <PriceFilter />
    </div>
  );
};
