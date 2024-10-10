import Link from "@/components/ui/link";
import { CategoryContext } from "@/contexts/index";
import { FC, useContext } from "react";

const MegaMenu: FC = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <div className="absolute bg-gray-200 megaMenu shadow-header -start-28 xl:start-0">
      <div className={`grid grid-cols-5 py-5}`}>
        {categories
          .sort((a: any, b: any) =>
            a.subCategories.length > b.subCategories.length ? -1 : 1
          )
          .map((category: any, index: number) => (
            <div
              key={category.id}
              className={`py-5 ${index % 2 === 0 && "bg-gray-100"} `}
            >
              <Link
                href={`search?categories=${category.slug}`}
                className="block py-1.5 px-5 text-heading font-semibold hover:text-heading hover:bg-gray-300"
              >
                {category.name}
              </Link>
              {category.subCategories.length ? (
                <ul>
                  {category.subCategories.map((sub: any) => (
                    <Link
                      key={sub.id}
                      href={`search?categories=${sub.slug}`}
                      className="block py-.5 ml-5 px-2 text-heading hover:text-heading hover:bg-gray-300"
                    >
                      <li>{sub.name}</li>
                    </Link>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MegaMenu;
