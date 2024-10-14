import Layout from "@layout/layout-one";
import AccountLayout from "@containers/my-account/account-layout";
import AccountDetails from "@containers/my-account/account-details";

export default function AccountDetailsPage() {
  return (
    <AccountLayout>
      <AccountDetails />
    </AccountLayout>
  );
}

AccountDetailsPage.Layout = Layout;
