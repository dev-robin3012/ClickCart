import { useState, FC } from "react";
import { Drawer } from "@components/common/drawer";
import motionProps from "@components/common/drawer/motion";
import MobileMenu from "@layout/mobile-navigation/mobile-menu";

const DrawerMenu: FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <button
        aria-label="Menu"
        className="menuBtn hidden md:flex flex-col items-center justify-center pe-5 2xl:pe-7 flex-shrink-0 h-full outline-none focus:outline-none"
        onClick={() => setOpenDrawer(true)}
      >
        <span className="menuIcon">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </span>
      </button>

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

export default DrawerMenu;
