import Container from "@components/ui/container";
import Layout from "@layout/layout-one";
import SignUpForm from "@containers/auth/sign-up-form";
import Subscription from "@components/common/subscription";

export default function SignUpPage() {
  return (
    <>
      {/* <PageHeader pageHeader="Register" /> */}
      <Container>
        <div className="py-16 lg:py-20">
          <SignUpForm />
        </div>
        <Subscription />
      </Container>
    </>
  );
}

SignUpPage.Layout = Layout;
