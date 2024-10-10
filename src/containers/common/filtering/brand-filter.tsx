import CheckBox from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React, { FC } from "react";

const dummyBrands = [
  { id: 1, name: "Brand One", slug: "brand-one" },
  { id: 2, name: "Brand Two", slug: "brand-two" },
  { id: 3, name: "Brand Three", slug: "brand-three" },
  { id: 4, name: "Brand Four", slug: "brand-four" },
  { id: 5, name: "Brand Five", slug: "brand-five" },
  { id: 6, name: "Brand Six", slug: "brand-six" },
  { id: 7, name: "Brand Seven", slug: "brand-seven" },
  { id: 8, name: "Brand Eight", slug: "brand-eight" },
  { id: 9, name: "Brand Nine", slug: "brand-nine" },
  { id: 10, name: "Brand Ten", slug: "brand-ten" },
];

const BrandFilter: FC = () => {
  const router = useRouter();
  const { pathname, query } = router;

  // @ts-ignore
  let selected = query.brands ? query.brands.split(",") : [];

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { brands, ...restQuery } = query;

    if (e.currentTarget.checked) {
      selected.push(e.currentTarget.value);
    } else {
      selected = selected.filter(
        (item: string) => item !== e.currentTarget.value
      );
    }

    router.push(
      {
        pathname,
        query: { ...restQuery, brands: selected.join(",") },
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <div className="block border-b border-gray-300 pb-7 mb-7">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
        Brands
      </h3>
      <div className="mt-2 flex flex-col space-y-4 max-h-72 overflow-y-auto">
        {dummyBrands?.map((item: any) => (
          <CheckBox
            key={item.id}
            label={item.name}
            name={item.name.toLowerCase()}
            checked={selected.includes(item.slug)}
            value={item.slug}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
