import SignUpForm from "@/containers/auth/sign-up-form";
import AuthLayout from "@/layout/auth";
import Layout from "@/layout/global";
import { NextPageWithLayout } from "./_app";

const SignUpPage: NextPageWithLayout = () => <SignUpForm />;

SignUpPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <AuthLayout>{page}</AuthLayout>
    </Layout>
  );
};

export default SignUpPage;
