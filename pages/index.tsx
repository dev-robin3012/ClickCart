import Layout from "@/layout/global";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import type { NextPageWithLayout } from "./_app";

const TrendyTheme = dynamic(() => import("@/themes/trendy"));
// const MinimalTheme = dynamic(() => import("@/themes/minimal"));
// const VintageTheme = dynamic(() => import("@/themes/vintage"));
// const StandardTheme = dynamic(() => import("@/themes/standard"));
// const RefinedTheme = dynamic(() => import("@/themes/refined"));
// const ModernTheme = dynamic(() => import("@/themes/modern"));
// const ElegantTheme = dynamic(() => import("@/themes/elegant"));
// const ClassicTheme = dynamic(() => import("@/themes/classic"));
// const AncientTheme = dynamic(() => import("@/themes/ancient"));
// const ContemporaryTheme = dynamic(() => import("@/themes/contemporary"));

// const Themes = {
//   minimal: "minimal",
//   vintage: "vintage",
//   trendy: "trendy",
//   standard: "standard",
//   refined: "refined",
//   modern: "modern",
//   elegant: "elegant",
//   classic: "classic",
//   contemporary: "contemporary",
//   ancient: "ancient",
// };

export const getServerSideProps: GetServerSideProps = async () => {
  // const theme = await get("theme");
  return { props: { theme: "trendy" } };
};

const HomePage: NextPageWithLayout = () => {
  return <TrendyTheme />;

  // switch (theme) {
  //   case Themes.minimal:
  //     return <MinimalTheme />;

  //   case Themes.vintage:
  //     return <VintageTheme />;

  //   case Themes.trendy:
  //     return <TrendyTheme />;

  //   case Themes.standard:
  //     return <StandardTheme />;

  //   case Themes.refined:
  //     return <RefinedTheme />;

  //   case Themes.modern:
  //     return <ModernTheme />;

  //   case Themes.elegant:
  //     return <ElegantTheme />;

  //   case Themes.classic:
  //     return <ClassicTheme />;

  //   case Themes.contemporary:
  //     return <ContemporaryTheme />;

  //   case Themes.ancient:
  //     return <AncientTheme />;

  //   default:
  //     return null;
  // }
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
