import Layout from "@layout/layout-one";
import AccountLayout from "@containers/my-account/account-layout";
import ChangePassword from "@containers/my-account/change-password";

export default function ChangePasswordPage() {
  return (
    <AccountLayout>
      <ChangePassword />
    </AccountLayout>
  );
}

ChangePasswordPage.Layout = Layout;

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
