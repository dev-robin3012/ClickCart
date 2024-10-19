import { Drawer } from "@/components/common/drawer";
import motionProps from "@/components/common/drawer/motion";
import Iconstore from "@/components/icon-store";
import HomeIcon from "@/components/icons/home-icon";
import MenuIcon from "@/components/icons/menu-icon";
import Link from "@/components/ui/link";
import useModal from "@/hooks/useModal";
import dynamic from "next/dynamic";
import { useState } from "react";
import Search from "../header/search";

const Cart = dynamic(() => import("@/containers/cart"), { ssr: false });
const AuthMenu = dynamic(() => import("../header/auth-menu"), { ssr: false });
const MobileMenu = dynamic(() => import("./mobile-menu"));

const BottomNavigation: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { openModal } = useModal();

  return (
    <>
      <div className="lg:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4 md:px-8">
        <button
          aria-label="Menu"
          className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </button>
        <div aria-label="search-button">
          <Search />
        </div>
        <Link href="/" className="flex-shrink-0">
          <HomeIcon />
        </Link>
        <Cart />
        <AuthMenu
          isAuthorized={false}
          href="/my-account"
          className="flex-shrink-0"
          btnProps={{
            className: "flex-shrink-0 focus:outline-none",
            children: <Iconstore name="user" />,
            onClick: () => openModal("LOGIN_VIEW"),
          }}
        >
          <Iconstore name="user" />
        </AuthMenu>
      </div>

      {/* TODO: need to use just one drawer component */}
      <Drawer
        placement="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        contentWrapperStyle={{ left: 0 }}
        {...motionProps}
      >
        <MobileMenu closeDrawer={() => setOpenDrawer(false)} />
      </Drawer>
    </>
  );
};

export default BottomNavigation;
