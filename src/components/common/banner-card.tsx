import Link from "@/components/ui/link";
import { useSsrCompatible } from "@/utils/use-ssr-compatible";
import { useWindowSize } from "@/utils/use-window-size";
import cn from "classnames";
import Image from "next/image";
import { LinkProps } from "next/link";

interface BannerProps {
  banner: any;
  variant?: "rounded" | "default";
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href: LinkProps["href"];
  disableBorderRadius?: boolean;
}

export default function BannerCard({
  banner,
  className,
  variant = "rounded",
  effectActive = false,
  classNameInner,
  href,
  disableBorderRadius = false,
}: BannerProps) {
  const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });

  const {
    title,
    image: { mobile, desktop },
  } = banner;

  const displayImg = width < 480 ? mobile : desktop;

  return (
    <div className={cn("mx-auto", className)}>
      <Link
        href={href}
        className={cn(
          "h-full group flex justify-center relative overflow-hidden",
          classNameInner
        )}
      >
        <>
          <Image
            src={displayImg.url}
            width={displayImg.width}
            height={displayImg.height}
            priority
            alt={title}
            className={cn("w-full max-h-[800px]", {
              "rounded-md": variant === "rounded" && !disableBorderRadius,
            })}
          />
          {effectActive && (
            <div className="absolute top-0 ltr:-left-[100%] h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          )}
        </>
      </Link>
    </div>
  );
}
