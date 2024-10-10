import { DefaultSeo } from "@/components/common/default-seo";
import ContextWrapper from "@/contexts";
import { getDirection } from "@/utils/get-direction";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

// base fonts
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/satisfy";

// base css file
import "@/styles/custom-plugins.css";
import "@/styles/rc-drawer.css";
import "@/styles/scrollbar.css";
import "@/styles/swiper-carousel.css";
import "@/styles/tailwind.css";
import "rc-drawer/assets/index.css";
import "react-toastify/dist/ReactToastify.css";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function Noop({ children }: React.PropsWithChildren<{}>) {
  return <>{children}</>;
}

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();

  const dir = getDirection(router.locale);

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  const Layout = (Component as any).Layout || Noop;

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <QueryClientProvider client={queryClient}>
        {/* @ts-ignore */}
        <Hydrate state={pageProps?.dehydratedState}>
          <ContextWrapper>
            <Layout pageProps={pageProps}>
              <DefaultSeo />
              <Component {...pageProps} key={router.route} />
              <ToastContainer />
            </Layout>
          </ContextWrapper>
        </Hydrate>
      </QueryClientProvider>
    </AnimatePresence>
  );
};

export default CustomApp;
