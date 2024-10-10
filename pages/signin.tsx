import Container from "@components/ui/container";
import Layout from "@layout/layout-one";
import Subscription from "@components/common/subscription";
import LoginForm from "@containers/auth/login-form";

export default function SignInPage() {
  return (
    <>
      {/* <PageHeader pageHeader="Sign In" /> */}
      <Container>
        <div className="py-16 lg:py-20">
          <LoginForm />
        </div>
        <Subscription />
      </Container>
    </>
  );
}

SignInPage.Layout = Layout;
