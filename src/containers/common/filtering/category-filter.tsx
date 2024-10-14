import CheckBox from "@/components/ui/checkbox";
import { CategoryContext } from "@/contexts/index";
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";

const CategoryFilter: FC = () => {
  const router = useRouter();
  const { query, pathname } = router;
  const { categories } = useContext(CategoryContext);

  const handleChange = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement>) => {
    router.push(
      { pathname, query: { ...query, categories: value } },
      undefined,
      { scroll: false }
    );
  };

  return (
    <div className="block border-b border-gray-300 pb-7 mb-7">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
        Category
      </h3>
      <div className="mt-2 flex flex-col space-y-4 max-h-72 overflow-y-auto ">
        {categories?.map((item: any) => (
          <>
            <CheckBox
              key={item.id}
              label={item.name}
              name={item.name.toLowerCase()}
              checked={query.categories === item.slug}
              value={item.slug}
              onChange={handleChange}
            />
            {item.subCategories.length ? (
              <ul className="ml-3 space-y-2">
                {item.subCategories.map((sub: any) => (
                  <CheckBox
                    key={sub.id}
                    label={sub.name}
                    name={sub.name.toLowerCase()}
                    checked={query.categories === sub.slug}
                    value={sub.slug}
                    onChange={handleChange}
                  />
                ))}
              </ul>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
