import Subscription from "@/components/common/subscription";
import Container from "@/components/ui/container";
import LoginForm from "@/containers/auth/login-form";

export default function SignInPage() {
  return (
    <Container>
      <LoginForm />
      <Subscription />
    </Container>
  );
}
