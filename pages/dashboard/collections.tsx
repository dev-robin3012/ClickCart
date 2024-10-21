import CollectionManagementContents from "@/containers/admin-dashboard/collections";
import AdminLayout from "@/layout/dashboard";
import type { NextPageWithLayout } from "../_app";

const DashboardCollectionPage: NextPageWithLayout = () => (
  <CollectionManagementContents />
);

DashboardCollectionPage.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default DashboardCollectionPage;
