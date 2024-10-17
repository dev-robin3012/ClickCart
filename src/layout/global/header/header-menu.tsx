import Link from "@/components/ui/link";
import classNames from "classnames";
import { FaChevronDown } from "react-icons/fa";
import MegaMenu from "./mega-menu";

interface MenuProps {
  data: any;
  className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ className }) => {
  return (
    <nav className={classNames(`headerMenu flex w-full relative`, className)}>
      <div className={`menuItem group cursor-pointer py-7 relative`}>
        <Link
          href="/"
          className="relative inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
        >
          Categories
          <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
            <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
          </span>
        </Link>

        <MegaMenu />
      </div>

      <div className={`menuItem group cursor-pointer py-7`}>
        <Link
          href="/search"
          className="relative inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
        >
          All Products
        </Link>
      </div>
    </nav>
  );
};

export default HeaderMenu;
