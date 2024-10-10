import CookieBar from "@/components/common/cookie-bar";
import Button from "@/components/ui/button";
import { useAcceptCookies } from "@/utils/use-accept-cookies";
import { NextSeo } from "next-seo";
import { FC, PropsWithChildren } from "react";
import Footer from "./footer/footer";
import Header from "./header";
import MobileNavigation from "./mobile-navigation/mobile-navigation";

interface Props extends PropsWithChildren {
  pageProps: any;
}

const Layout: FC<Props> = ({ children, pageProps }) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();

  const theme = pageProps.theme;

  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
        title="ChawkBazar React - React Next E-commerce Template"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        canonical="https://chawkbazar.vercel.app/"
        openGraph={{
          url: "https://chawkbazar.vercel.app",
          title: "ChawkBazar React - React Next E-commerce Template",
          description:
            "Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
          images: [
            {
              url: "/assets/images/og-image-01.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "/assets/images/og-image-02.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
          ],
        }}
      />

      <div className="flex flex-col min-h-[100dvh]">
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

      {/* {theme === "contemporary" ? (
        <LayoutThree>{children}</LayoutThree>
      ) : theme === "elegant" || theme === "refined" ? (
        <LayoutTwo>{children}</LayoutTwo>
      ) : (
        <LayoutOne>{children}</LayoutOne>
      )} */}
    </>
  );
};

export default Layout;
