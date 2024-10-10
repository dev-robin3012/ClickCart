import PageHeader from "@components/ui/page-header";
import Container from "@components/ui/container";
import AccountNav from "@containers/my-account/account-nav";
import Subscription from "@components/common/subscription";

const AccountLayout = (props: any) => {
  return (
    <>
      <PageHeader pageHeader="My Account" />
      <Container>
        <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex  md:flex-row w-full">
          <div className="flex flex-col md:flex-row w-full">
            <AccountNav />
            <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
              {props.children}
            </div>
          </div>
        </div>

        <Subscription />
      </Container>
    </>
  );
};

export default AccountLayout;
