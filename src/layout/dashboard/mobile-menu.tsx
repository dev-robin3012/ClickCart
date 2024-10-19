import Iconstore from "@/components/icon-store";
import useDimention from "@/hooks/useDimention";
import { cn } from "@/utils/class-merge";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, type FC } from "react";
import navigations from "./navigations";

const MobileMenu: FC = () => {
  const { width } = useDimention();
  const [openMenu, setOpenMenu] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const muskRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const show = { opacity: 1, display: "block" };
  const hide = {
    opacity: 0,
    transition: { duration: 0.5 },
    transitionEnd: { display: "none" },
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!!muskRef.current?.contains(e.target as Node)) {
      !contentRef.current?.contains(e.target as Node) && setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  useEffect(() => {
    width > 1023 && setOpenMenu(false);
  }, [width]);

  return (
    <>
      <Iconstore
        name="menu"
        className="text-2xl lg:hidden cursor-pointer"
        onClick={() => setOpenMenu(true)}
      />

      <motion.div
        ref={muskRef}
        className="fixed inset-0 backdrop-blur-md z-50"
        initial={{ display: "none" }}
        animate={openMenu ? show : hide}
      >
        <motion.div
          ref={contentRef}
          className={cn(
            "bg-white/60 dark:bg-gray-hard/60 shadow-xl lg:hidden w-3/4 sm:w-1/2 md:w-1/3 h-full px-5 space-y-10"
          )}
          animate={
            openMenu
              ? { opacity: 1, x: 0, display: "block" }
              : { opacity: 0.5, x: "-100%", transitionEnd: { display: "none" } }
          }
          transition={{ duration: 0.5 }}
        >
          <header>
            <div className="h-[72px] md:h-[89px] flex items-center justify-between">
              <Iconstore
                name="cross"
                className="text-[24px]"
                onClick={() => setOpenMenu(false)}
              />

              <button className="bg-transparent font-semibold flex items-center justify-center gap-2 text-danger">
                <Iconstore name="logout" className="rotate-180 text-lg" />
                Log out
              </button>
            </div>

            <Image
              src="/assets/logo.png"
              alt="logo"
              width={700}
              height={100}
              className="w-full h-auto mx-auto"
            />
          </header>

          <ul
            className={cn(
              "space-y-3",
              "[&_a]:block [&_a]:font-semibold [&_a]:px-5 [&_a]:py-2 [&_a]:rounded-md"
            )}
          >
            {navigations.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={cn(
                    "transition-all hover:bg-gray-light dark:hover:bg-gray-hard",
                    router.pathname === item.path &&
                      "bg-gray-light dark:bg-gray-hard text-primary"
                  )}
                  onClick={() => setOpenMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
