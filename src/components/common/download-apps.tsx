import Link from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import cn from "classnames";
import Image from "next/image";

const data = {
  title: "The ChawkBazar App",
  subTitle:
    "<span> Share Your <strong>Ideas</strong> &amp; Shop Endless <strong>Inspiration</strong> </span>",
  appImage: "/assets/images/app.png",
  appImage2: "/assets/images/app2.png",
  appImage3: "/assets/images/app3.png",
  appButtons: [
    {
      id: 1,
      slug: "/#",
      altText: "App Store",
      appButton: "/assets/images/app-store.svg",
      buttonWidth: 209,
      buttonHeight: 60,
    },
    {
      id: 2,
      slug: "/#",
      altText: "Play Store",
      appButton: "/assets/images/play-store.svg",
      buttonWidth: 209,
      buttonHeight: 60,
    },
  ],
};

interface Props {
  className?: string;
  variant?: "modern" | "ancient";
  disableBorderRadius?: boolean;
}

const DownloadApps: React.FC<Props> = ({
  className,
  variant,
  disableBorderRadius = false,
}) => {
  const { appButtons, title, subTitle, appImage, appImage2, appImage3 } = data;

  return (
    <div
      className={cn(
        "flex justify-between items-end rounded-lg bg-gray-200 pt-5 md:pt-8 lg:pt-10 xl:pt-14 px-6 md:px-12 lg:px-20 2xl:px-24 3xl:px-36",
        className
      )}
    >
      <div className="flex-shrink-0 w-full sm:w-60 md:w-96 lg:w-auto lg:max-w-lg xl:max-w-xl lg:flex lg:items-center pb-5 md:pb-8 lg:pb-12 xl:pb-16">
        <div className="py-4 md:py-6 xl:py-8 text-center sm:text-start">
          <Text
            variant="mediumHeading"
            className="-mt-1 mb-2 md:mb-3 lg:mb-3.5 xl:mb-4"
          >
            {title}
          </Text>
          <h2
            className="text-heading text-md sm:text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-normal leading-7 sm:leading-8 md:leading-snug xl:leading-relaxed 2xl:leading-snug mb-6 md:mb-8 lg:mb-9 xl:mb-12 2xl:mb-14 lg:pe-20 2xl:pe-0"
            dangerouslySetInnerHTML={{
              __html: subTitle,
            }}
          />
          <div className="flex justify-center sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0">
            {appButtons?.map((item) => (
              <Link
                key={item.id}
                href={item.slug}
                className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
              >
                <Image
                  src={item.appButton}
                  alt={item.altText}
                  className={`w-36 lg:w-44 xl:w-auto ${
                    !disableBorderRadius && "rounded-md"
                  }`}
                  width={item.buttonWidth}
                  height={item.buttonHeight}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-end ps-4 -me-0.5 2xl:-me-1.5 w-60 md:w-72 lg:w-96 xl:w-auto">
        <Image
          src={
            variant === "modern"
              ? appImage2
              : variant === "ancient"
              ? appImage3
              : appImage
          }
          alt="App thumbnail"
          width={375}
          height={430}
        />
      </div>
    </div>
  );
};

export default DownloadApps;
