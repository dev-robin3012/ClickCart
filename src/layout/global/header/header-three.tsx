import SearchIcon from "@/components/icons/search-icon";
import { UserLineIcon } from "@/components/icons/UserLineIcon";
import CategoryMenu from "@/components/ui/category-menu";
import Link from "@/components/ui/link";
import Logo from "@/components/ui/logo";
import WishButton from "@/components/ui/wish-button";
import { siteSettings } from "@/settings/site-settings";
import { useActiveScroll } from "@/utils/add-active-scroll";
import { ROUTES } from "@/utils/routes";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { IoFlashOutline } from "react-icons/io5";
import HeaderMenu from "./header-menu";

const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });

const CartButton = dynamic(() => import("@/containers/cart"), { ssr: false });

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;

export default function Header() {
  const siteHeaderRef = useRef() as DivElementRef;

  useActiveScroll(siteHeaderRef);

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="relative z-20 w-full h-16 sm:h-20 lg:h-36 xl:h-40 headerThree"
    >
      <div className="fixed z-20 w-full h-16 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font sm:h-20 lg:h-36 xl:h-40 ps-4 md:ps-0 lg:ps-6 pe-4 lg:pe-6 px-4 md:px-8 2xl:px-16">
        <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full lg:h-20 xl:h-24 w-full relative before:absolute before:w-screen before:h-px before:bg-[#F1F1F1] before:bottom-0">
          <div className="flex items-center 2xl:me-12 3xl:me-20">
            <Logo />
            <div className="hidden transition-all duration-100 ease-in-out lg:flex ms-7 xl:ms-9 pe-2 headerTopMenu">
              <Link
                href="/"
                className="relative flex items-center px-3 gap-2 lg:px-2.5 py-0 text-sm font-normal xl:text-base text-heading xl:px-6 hover:text-black"
              >
                Deals Today <IoFlashOutline className="text-xl" />
                {/* {item.icon && (
                  <span className="ms-1.5 xl:ms-2">{item.icon}</span>
                )} */}
              </Link>
              <Link
                href="/"
                className="relative flex items-center px-3 lg:px-2.5 py-0 text-sm font-normal xl:text-base text-heading xl:px-6 hover:text-black"
              >
                Offers
              </Link>
              <Link
                href="/"
                className="relative flex items-center px-3 lg:px-2.5 py-0 text-sm font-normal xl:text-base text-heading xl:px-6 hover:text-black"
              >
                Faq
              </Link>
              <Link
                href="/"
                className="relative flex items-center px-3 lg:px-2.5 py-0 text-sm font-normal xl:text-base text-heading xl:px-6 hover:text-black"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative hidden w-2/6 me-auto lg:block">
            <form
              className="relative w-full overflow-hidden rounded-md bg-borderBottom"
              noValidate
              role="search"
            >
              <label htmlFor="search" className="flex items-center">
                <span className="absolute top-0 left-0 flex items-center justify-center flex-shrink-0 w-12 h-full cursor-pointer md:w-14 focus:outline-none">
                  <SearchIcon
                    color="text-heading"
                    className="w-[18px] h-[18px]"
                  />
                </span>
                <input
                  id="search"
                  className="w-full text-sm placeholder-gray-400 bg-transparent rounded-md outline-none focus:border-2 focus:border-gray-600 pe-4 ps-14 h-14 text-heading lg:text-base"
                  placeholder={"Search Anything..."}
                  aria-label="Search"
                  autoComplete="off"
                />
              </label>
            </form>
          </div>

          <div className="flex items-center justify-end flex-shrink-0">
            <div className="items-center transition-all flex wishlistShopping space-s-7 lg:space-s-6 xl:space-s-8 2xl:space-s-10 ps-3">
              <div className="flex md:gap-x-4 align-center ">
                <WishButton />
                <span className="hidden text-sm font-semibold transition-all duration-100 ease-in-out cursor-pointer lg:font-normal lg:block xl:text-base text-heading">
                  Wishlist
                </span>
              </div>
              <div className="hidden lg:flex md:gap-x-4 align-center">
                <CartButton />
              </div>
            </div>
          </div>
        </div>

        <div className="items-center hidden lg:flex lg:h-16 headerBottom mx-auto max-w-[1920px]">
          <div className="flex items-center">
            <CategoryMenu
              className="hidden lg:block"
              categoryMenu={site_header?.categoryMenu}
            />
            <HeaderMenu
              data={site_header.menu}
              className="hidden lg:flex ps-3.5 xl:ps-5"
            />
          </div>

          <div className="flex items-center flex-shrink-0 ms-auto gap-x-7">
            <AuthMenu
              isAuthorized={false}
              href={ROUTES.ACCOUNT}
              className="flex-shrink-0 hidden text-sm xl:text-base lg:flex focus:outline-none text-heading gap-x-3"
              btnProps={{
                children: (
                  <>
                    <UserLineIcon className="w-4 xl:w-[17px] h-auto text-black" />
                    Login
                  </>
                ),
                onClick: () => null,
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
