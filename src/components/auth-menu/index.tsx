import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type FC } from "react";
import Icon from "../icons";
import Typography from "../typography";

const AuthMenu: FC = () => {
  const { data } = useSession();
  const [openMenu, setOpenMenu] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  if (!data) {
    return (
      <Link href="/signin" className="hidden lg:block">
        Sign in
      </Link>
    );
  }

  const { image, firstName, role } = data.user;

  return (
    <div className="relative" ref={ref}>
      <div
        className="flex items-center gap-2.5 justify-center px-3 py-1 text-xl cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {image ? (
          <Image
            src={image}
            alt="LoggedIn user's DP"
            height={30}
            width={30}
            className="rounded-full"
          />
        ) : (
          <div className="border p-1.5 rounded-full h-[30px] w-[30px] flex items-center justify-center">
            <Icon name="user" />
          </div>
        )}
        <div className="flex items-center gap-1">
          <Typography className="font-semibold text-lg">
            {firstName || "Account"}
          </Typography>
          <Icon name="arrow-down" />
        </div>
      </div>

      <motion.ul
        className="absolute top-full right-0 border bg-white p-3 rounded-md w-full max-w-[250px] text-sm"
        animate={
          openMenu
            ? { opacity: 1, display: "block" }
            : { opacity: 0, transitionEnd: { display: "none" } }
        }
      >
        <li className="hover:bg-gray-light rounded-md">
          <Link href="/my-account" className="px-3 py-1.5 block">
            Account
          </Link>
        </li>

        {role === "admin" && (
          <li className="hover:bg-gray-light rounded-md">
            <Link href="/dashboard" className="px-3 py-1.5 block">
              Dashboard
            </Link>
          </li>
        )}

        <li
          className="hover:bg-gray-light rounded-md py-1.5 px-3 cursor-pointer"
          onClick={() => signOut()}
        >
          Sign out
        </li>
      </motion.ul>
    </div>
  );
};

export default AuthMenu;
