import Typography from "@/components/typography";
import AdminLayout from "@/layout/dashboard";
import { NextPageWithLayout } from "../_app";

// const themes = [
//   "minimal",
//   "vintage",
//   "trendy",
//   "standard",
//   "refined",
//   "modern",
//   "elegant",
//   "classic",
//   "ancient",
//   "contemporary",
// ];

const DashboardPage: NextPageWithLayout = () => {
  // const [selected, setSelected] = useState("trendy");

  return (
    <section className="max-w-[1920px] mx-auto h-full px-10 flex justify-center items-center py-5 gap-5">
      <Typography variant="h3">
        This is the dashboard. Contents are loading by think...
      </Typography>
    </section>
  );
};

DashboardPage.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default DashboardPage;
