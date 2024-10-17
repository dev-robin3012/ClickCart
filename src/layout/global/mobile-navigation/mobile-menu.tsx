import Scrollbar from "@/components/common/scrollbar";
import Link from "@/components/ui/link";
import Logo from "@/components/ui/logo";
import { CategoryContext } from "@/contexts/index";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  IoClose,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const social = [
  {
    id: 0,
    link: "https://www.facebook.com/redqinc/",
    icon: <IoLogoFacebook />,
    className: "facebook",
    title: "text-facebook",
  },
  {
    id: 1,
    link: "https://twitter.com/redqinc",
    icon: <IoLogoTwitter />,
    className: "twitter",
    title: "text-twitter",
  },
  {
    id: 2,
    link: "https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw",
    icon: <IoLogoYoutube />,
    className: "youtube",
    title: "text-youtube",
  },
  {
    id: 3,
    link: "https://www.instagram.com/redqinc/",
    icon: <IoLogoInstagram />,
    className: "instagram",
    title: "text-instagram",
  },
];

export default function MobileMenu({ closeDrawer }: any) {
  const [expandCategory, setExpandCategory] = useState(false);

  const { categories } = useContext(CategoryContext);

  return (
    <>
      <div className="flex flex-col justify-between w-full h-full">
        <div className="w-full border-b border-gray-100 flex justify-between items-center relative ps-5 md:ps-7 flex-shrink-0 py-0.5">
          <Logo />

          <button
            className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-6 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
            onClick={closeDrawer}
            aria-label="close"
          >
            <IoClose className="text-black mt-1 md:mt-0.5" />
          </button>
        </div>

        <Scrollbar className="menu-scrollbar flex-grow mb-auto">
          <div className="flex flex-col pb-7 text-heading">
            <ul className="mobileMenu px-5">
              <li className="py-3">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandCategory(!expandCategory)}
                >
                  <Link href="#" className="text-base">
                    Categories
                  </Link>
                  <IoIosArrowDown
                    className={`transition duration-200 ease-in-out transform text-heading text-xl ${
                      expandCategory ? "-rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {expandCategory && (
                  <ul className="mt-3 px-3 space-y-1">
                    {categories.map((category: any, index: number) => (
                      <CategoryItem key={index} category={category} />
                    ))}
                  </ul>
                )}
              </li>

              <li className="py-3">
                <Link href="#" className="text-[15px]">
                  All Products
                </Link>
              </li>

              <li className="py-3">
                <Link href="/shops" className="text-[15px]">
                  <span className="block w-full">Shops</span>
                </Link>
              </li>
            </ul>
          </div>
        </Scrollbar>

        <div className="flex items-center justify-center bg-white border-t border-gray-100 px-7 flex-shrink-0 space-s-1">
          {social?.map((item, index) => (
            <a
              href={item.link}
              className={`text-heading p-5 opacity-60 first:-ms-4 transition duration-300 ease-in hover:opacity-100 ${item.className}`}
              target="_blank"
              key={index}
            >
              <span className="sr-only">{item.title}</span>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

const CategoryItem = ({ category }: any) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  return (
    <li>
      <div className="flex items-center gap-2 text-base">
        <IoIosArrowForward
          onClick={() =>
            category.subCategories.length && setExpanded(!expanded)
          }
          className={`transition duration-200 ease-in-out transform text-heading text-lg ${
            expanded ? "rotate-90" : "rotate-0"
          }`}
        />
        <Link href={`/search?categories=${category.name}`}>
          {category.name}
        </Link>
      </div>

      {expanded && (
        <ul className="px-3 space-y-1.5">
          {category.subCategories.map((sub: any, index: number) => (
            <li
              key={index}
              className="flex items-center gap-1"
              onClick={() => router.push(`/search?categories=${sub.slug}`)}
            >
              <AiOutlineMinus className="text-black text-xs" />
              <span className="tracking-wider">{sub.name}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
