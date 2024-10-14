import { siteSettings } from "@/settings/site-settings";
import Image from "next/image";
import { FC } from "react";
import Link from "./link";

const Logo: FC = ({ className }: any) => {
  return (
    <Link href="/" className={`inline-flex focus:outline-none ${className}`}>
      <Image
        src={siteSettings.logo.url}
        alt={siteSettings.logo.alt}
        height={siteSettings.logo.height}
        width={siteSettings.logo.width}
      />
    </Link>
  );
};

export default Logo;
