import Iconstore from "@/components/icon-store";
import Typography from "@/components/typography";
import { cn } from "@/utils/class-merge";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { type FC } from "react";
import navigations from "./navigations";

const AdminSidebar: FC = () => {
  const router = useRouter();

  return (
    <aside className="border-r hidden lg:flex dark:border-gray-hard flex-col justify-between w-[220px]">
      <div className="space-y-5">
        <div className="p-5 h-[89px] flex items-center justify-center">
          <Typography variant="h2">ClickCart</Typography>
        </div>

        <ul
          className={cn(
            "p-5 space-y-3",
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
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <footer className="p-5">
        <button
          className="bg-transparent w-full font-semibold flex items-center justify-center gap-2 text-danger"
          onClick={() => signOut()}
        >
          <Iconstore name="logout" className="rotate-180 text-lg" />
          Log out
        </button>
      </footer>
    </aside>
  );
};

export default AdminSidebar;
