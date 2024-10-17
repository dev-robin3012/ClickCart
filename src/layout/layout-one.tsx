import CookieBar from "@/components/common/cookie-bar";
import Button from "@/components/ui/button";
import { useAcceptCookies } from "@/utils/use-accept-cookies";
import { PropsWithChildren } from "react";
import Footer from "./global/footer/footer";
import Header from "./global/header";
import MobileNavigation from "./global/mobile-navigation/mobile-navigation";
// import Header from "./header";

export default function LayoutOne({ children }: PropsWithChildren<{}>) {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="relative flex-grow"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>
      <Footer />
      <MobileNavigation />
      <CookieBar
        title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
        hide={acceptedCookies}
        action={
          <Button onClick={() => onAcceptCookies()} variant="slim">
            Accept cookies
          </Button>
        }
      />
    </div>
  );
}
