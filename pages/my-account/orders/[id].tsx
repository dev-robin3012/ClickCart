import Layout from "@layout/layout-one";
import AccountLayout from "@containers/my-account/account-layout";
import OrderDetails from "@components/order/order-details";

export default function OrderPage() {
  return (
    <AccountLayout>
      {/* <OrderDetails order={{}} className="p-0" /> */}
    </AccountLayout>
  );
}

OrderPage.Layout = Layout;

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale!, [
//         "common",
//         "forms",
//         "menu",
//         "footer",
//       ])),
//     },
//   };
// };
