import woo_client from "@/api-config/woo-client";
import AccountLayout from "@/containers/my-account/account-layout";
import OrdersTable from "@/containers/my-account/orders-table";
import Layout from "@/layout/layout-one";
import { useQuery } from "react-query";

export default function OrdersTablePage() {
  const { data, isLoading } = useQuery("get-orders", () =>
    woo_client.get(`orders?customer=216`).then(({ data }) => data)
  );

  console.log(data, isLoading);

  return (
    <AccountLayout>
      <OrdersTable />
    </AccountLayout>
  );
}

OrdersTablePage.Layout = Layout;
