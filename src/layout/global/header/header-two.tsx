import Logo from "@/components/ui/logo";
import { useActiveScroll } from "@/utils/add-active-scroll";
import { ROUTES } from "@/utils/routes";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useRef } from "react";
import DrawerMenu from "./Drawer";
import Search from "./search";

const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const CartButton = dynamic(() => import("@/containers/cart"), { ssr: false });

type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const HeaderTwo: React.FC = () => {
  const router = useRouter();

  const siteHeaderRef = useRef() as DivElementRef;
  useActiveScroll(siteHeaderRef);

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
    >
      <div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 px-4 lg:pe-6 transition duration-200 ease-in-out">
        <div className="flex items-center mx-auto max-w-[1920px] h-full w-full">
          <DrawerMenu />
          <Logo />
          {/* <div className="w-full flex items-center justify-end md:me-5 xl:me-8 2xl:me-10">
            <LanguageSwitcher />
          </div> */}
          <div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
            <Search />
            <div className="-mt-0.5 flex-shrink-0">
              <AuthMenu
                isAuthorized={false}
                href={ROUTES.ACCOUNT}
                className="text-sm xl:text-base text-heading font-semibold"
                btnProps={{
                  className:
                    "text-sm xl:text-base text-heading font-semibold focus:outline-none",
                  children: "Sign In",
                  onClick: () => router.push("/signin"),
                }}
              >
                Account
              </AuthMenu>
            </div>
            <CartButton />
          </div>
        </div>
      </div>
    </header>
  );
};

// const DrawerMenu = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);

//   return (
//     <>
//       <button
//         aria-label="Menu"
//         className="menuBtn hidden md:flex flex-col items-center justify-center pe-5 2xl:pe-7 flex-shrink-0 h-full outline-none focus:outline-none"
//         onClick={() => setOpenDrawer(true)}
//       >
//         <span className="menuIcon">
//           <span className="bar" />
//           <span className="bar" />
//           <span className="bar" />
//         </span>
//       </button>

//       <Drawer
//         placement="left"
//         open={openDrawer}
//         onClose={() => setOpenDrawer(false)}
//         contentWrapperStyle={{ left: 0 }}
//         {...motionProps}
//       >
//         <MobileMenu closeDrawer={() => setOpenDrawer(false)} />
//       </Drawer>
//     </>
//   );
// };

export default HeaderTwo;
