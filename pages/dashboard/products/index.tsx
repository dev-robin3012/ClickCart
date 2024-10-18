import Typography from "@/components/typography";
import AdminLayout from "@/layout/dashboard";
import { NextPageWithLayout } from "../../_app";

const DashboardProductsPage: NextPageWithLayout = () => {
  return (
    <section>
      <Typography variant="h2">This is Products page</Typography>
    </section>
  );
};
DashboardProductsPage.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default DashboardProductsPage;
