import AuthMenu from "@/components/auth-menu";
import Logo from "@/components/ui/logo";
import { siteSettings } from "@/settings/site-settings";
import { useActiveScroll } from "@/utils/add-active-scroll";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC, useRef } from "react";
import HeaderMenu from "./header-menu";

// const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const Cart = dynamic(() => import("@/containers/cart"), {
  ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const { site_header } = siteSettings;

const Header: FC = () => {
  const { status } = useSession();
  const router = useRouter();
  const siteHeaderRef = useRef() as DivElementRef;

  useActiveScroll(siteHeaderRef);

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
    >
      <div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 px-4 md:px-8 transition duration-200 ease-in-out">
        <div className="flex gap-5 items-center justify-between lg:justify-between mx-auto max-w-[1920px] h-full w-full">
          <div className="flex items-center gap-5">
            <Logo />
            <HeaderMenu data={site_header.menu} className="hidden lg:flex" />
          </div>

          <div className="flex items-stretch gap-5">
            {/* <LanguageSwitcher /> */}
            <AuthMenu />
            <Cart />
          </div>

          {/* <div className="flex-shrink-0 ms-auto lg:me-5 xl:me-8 2xl:me-10">
          </div> */}

          {/* <div className="hidden lg:flex justify-end items-center gap-2 md:gap-5 border"> */}
          {/* <Search /> */}
          {/* <div className="flex-shrink-0">
              <AuthMenu
                isAuthorized={status === "authenticated"}
                href="/my-account"
                className="text-sm xl:text-base text-heading font-semibold"
                btnProps={{
                  className:
                    "text-sm xl:text-base text-heading font-semibold focus:outline-none",
                  children:
                    status === "authenticated" ? "Dashboard" : "Sign In",

                  onClick: () =>
                    router.push(
                      status === "authenticated" ? "/dashboard" : "/signin"
                    ),
                }}
              >
                Account
              </AuthMenu>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
