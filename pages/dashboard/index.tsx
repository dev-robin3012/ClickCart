import Typography from "@/components/typography";
import AdminLayout from "@/layout/dashboard-layout";
import { useState } from "react";

const themes = [
  "minimal",
  "vintage",
  "trendy",
  "standard",
  "refined",
  "modern",
  "elegant",
  "classic",
  "ancient",
  "contemporary",
];

function DashboardPage() {
  const [selected, setSelected] = useState("trendy");

  return (
    <section className="max-w-[1920px] mx-auto h-full px-10 flex justify-center items-center py-5 gap-5">
      <Typography variant="h3">
        This is the dashboard. Contents are loading by think...
      </Typography>
    </section>
  );
}

DashboardPage.Layout = AdminLayout;
DashboardPage.auth = true;

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const theme = await get("theme");
//   return {
//     props: { theme: "trendy" },
//   };
// };

export default DashboardPage;
