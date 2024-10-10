import Link from "@components/ui/link";
import Layout from "@layout/layout-one";
import AccountLayout from "@containers/my-account/account-layout";
import { ROUTES } from "@utils/routes";
export default function AccountPage() {
  return (
    <AccountLayout>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
        Dashboard
      </h2>
      <p className=" text-sm leading-7 md:text-base md:leading-loose lowercase">
        Account Dashboard{" "}
        <Link
          href={ROUTES.ORDERS}
          className="text-heading underline font-semibold"
        >
          Recent Orders
        </Link>
        , Manage Your{" "}
        <Link
          href={ROUTES.ACCOUNT_DETAILS}
          className="text-heading underline font-semibold"
        >
          Account Details
        </Link>{" "}
        and{" "}
        <Link
          href={ROUTES.CHANGE_PASSWORD}
          className="text-heading underline font-semibold"
        >
          change your password
        </Link>
      </p>
    </AccountLayout>
  );
}

AccountPage.Layout = Layout;
