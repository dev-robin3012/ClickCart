import { DefaultSeo } from "@/components/common/default-seo";
import ContextWrapper from "@/contexts";
import { getDirection } from "@/utils/get-direction";
import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

// base css file
import "@/styles/custom-plugins.css";
import "@/styles/rc-drawer.css";
import "@/styles/scrollbar.css";
import "@/styles/swiper-carousel.css";
import "@/styles/tailwind.css";
import "rc-drawer/assets/index.css";
import "react-toastify/dist/ReactToastify.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  const dir = getDirection(router.locale);

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <QueryClientProvider client={queryClient}>
        {/* @ts-ignore */}
        <Hydrate state={pageProps?.dehydratedState}>
          <SessionProvider>
            <ContextWrapper>
              <DefaultSeo />
              {getLayout(<Component {...pageProps} />)}
              <ToastContainer />
            </ContextWrapper>
          </SessionProvider>
        </Hydrate>
      </QueryClientProvider>
    </AnimatePresence>
  );
};

export default CustomApp;
