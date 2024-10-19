import DashboardProductsListing from "@/containers/admin-dashboard/products";
import AdminLayout from "@/layout/dashboard";
import type { NextPageWithLayout } from "../../_app";

const DashboardProductsPage: NextPageWithLayout = () => (
  <DashboardProductsListing />
);
DashboardProductsPage.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default DashboardProductsPage;
