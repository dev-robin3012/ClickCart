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

  // const handleChangeTheme = async (payload: string) => {
  //   try {
  //     await axios(
  //       `https://api.vercel.com/v1/edge-config/${process.env.VERCEL_EDGE_ConfigID}/items`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           Authorization: `Bearer ${process.env.VERCEL_API_Token}`,
  //         },
  //         data: {
  //           items: [{ operation: "update", key: "theme", value: payload }],
  //         },
  //       }
  //     );
  //     setSelected(payload);
  //     toast.success("Theme Updated.");
  //   } catch (error) {
  //     toast.error("Theme Update Failed!!!!");
  //   }
  // };

  return (
    <section className="max-w-[1920px] mx-auto h-full px-10 flex justify-center items-center py-5 gap-5">
      <Typography variant="h3">
        This is the dashboard. Contents are loading by think...
      </Typography>
    </section>
  );
}

DashboardPage.Layout = AdminLayout;

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const theme = await get("theme");
//   return {
//     props: { theme: "trendy" },
//   };
// };

export default DashboardPage;
