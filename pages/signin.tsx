import LoginForm from "@/containers/auth/login-form";
import AuthLayout from "@/layout/auth";
import Layout from "@/layout/global";
import type { NextPageWithLayout } from "./_app";

const SignInPage: NextPageWithLayout = () => <LoginForm />;

SignInPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AuthLayout>{page}</AuthLayout>
    </Layout>
  );
};

export default SignInPage;
