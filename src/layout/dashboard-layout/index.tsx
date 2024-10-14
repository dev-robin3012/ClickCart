import { ThemeProvider } from "next-themes";
import { type PropsWithChildren } from "react";
import AdminHeader from "./header";
import AdminSidebar from "./sidebar";

const AdminLayout = ({ children }: PropsWithChildren) => {
  // const router = useRouter();

  // const { data } = useSession({
  //   required: true,
  //   onUnauthenticated: () => router.push("/signin"),
  // });

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="flex items-stretch h-[100dvh] dark:text-white">
        <AdminSidebar />

        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-5 border-t dark:border-gray-hard">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};
export default AdminLayout;
