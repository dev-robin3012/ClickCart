import AddNewProductContents from "@/containers/admin-dashboard/add-new-product";
import AdminLayout from "@/layout/dashboard";
import type { NextPageWithLayout } from "../../_app";

const AddNewProductPage: NextPageWithLayout = () => <AddNewProductContents />;
AddNewProductPage.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AddNewProductPage;
