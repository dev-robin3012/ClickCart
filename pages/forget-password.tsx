import Container from "@components/ui/container";
import Layout from "@layout/layout-one";
import ForgetPasswordForm from "@containers/auth/forget-password-form";
import PageHeader from "@components/ui/page-header";
import Subscription from "@components/common/subscription";

export default function ForgetPasswordPage() {
  return (
    <>
      <PageHeader pageHeader="Forget Password" />
      <Container>
        <div className="py-16 lg:py-20">
          <ForgetPasswordForm />
        </div>
        <Subscription />
      </Container>
    </>
  );
}

ForgetPasswordPage.Layout = Layout;

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
