import Container from "@components/ui/container";
import Layout from "@layout/layout-one";
import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
import CheckoutForm from "@containers/checkout/checkout-form";

export default function CheckoutPage() {
  return (
    <>
      <PageHeader pageHeader="Checkout" />
      <Container>
        <CheckoutForm />
        <Subscription />
      </Container>
    </>
  );
}

CheckoutPage.Layout = Layout;
