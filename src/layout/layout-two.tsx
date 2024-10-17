import CookieBar from "@/components/common/cookie-bar";
import Button from "@/components/ui/button";
import { useAcceptCookies } from "@/utils/use-accept-cookies";
import Footer from "./global/footer/footer";
import HeaderTwo from "./global/header/header-two";
import Search from "./global/header/search";
import MobileNavigation from "./global/mobile-navigation/mobile-navigation";

export default function LayoutTwo({ children }: React.PropsWithChildren<{}>) {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderTwo />
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
      <Search />
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
