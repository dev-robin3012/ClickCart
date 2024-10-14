import Subscription from "@/components/common/subscription";
import Container from "@/components/ui/container";
import SignUpForm from "@/containers/auth/sign-up-form";

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
