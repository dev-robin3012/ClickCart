import Iconstore from "@/components/icon-store";
import Typography from "@/components/typography";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { type FC } from "react";
import MobileMenu from "./mobile-menu";

const AdminHeader: FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const router = useRouter();

  const pagePath = router.pathname.split("/").pop();

  return (
    <header
      id="top-header"
      className="px-5 py-3 md:py-5 flex items-center justify-between"
    >
      <div className="flex items-center gap-5">
        <MobileMenu />
        <Typography variant="h2" className="capitalize">
          {pagePath === "dashboard"
            ? "Overview"
            : pagePath?.replaceAll("-", " ")}
        </Typography>
      </div>

      <div>
        <span
          className="border dark:border-gray-hard rounded-lg inline-block p-2.5 cursor-pointer hover:bg-gray-light dark:hover:bg-gray-hard transition-all"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          <Iconstore name={isDark ? "sun" : "moon"} className="text-xl" />
        </span>
      </div>
    </header>
  );
};

export default AdminHeader;
