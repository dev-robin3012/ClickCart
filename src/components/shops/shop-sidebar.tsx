import Button from "@components/ui/button";
import { Text } from "@components/ui/text";
import { ROUTES } from "@utils/routes";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiShareBoxLine } from "react-icons/ri";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

interface ShopSidebarProps {
  data: any;
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({ data }) => {
  const {
    query: { slug },
  } = useRouter();

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${ROUTES.SHOPS}/${slug}`;
  const [follow, setFollow] = useState(Boolean(false));

  const followHandel = () => {
    return setFollow(!follow);
  };
  const shareHandel = () => {
    return console.log(shareUrl);
  };

  return (
    <div className="flex flex-col pt-10 lg:pt-14 px-6">
      <div className="text-center w-full border-b border-gray-300 pb-8">
        <div className="w-32 lg:w-auto h-32 lg:h-auto mx-auto">
          <Image
            src={data?.logo?.original!}
            alt={data?.name}
            width={180}
            height={180}
            className="rounded-xl"
          />
        </div>
        <Text variant="heading" className="mt-6 mb-1.5">
          {data?.name}
        </Text>
        <Text>{data?.description}</Text>
        <div className="flex items-center flex-wrap justify-center space-s-2 pt-4 mt-0.5">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon
              size={25}
              round
              className="transition-all hover:opacity-90"
            />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon
              size={25}
              round
              className="transition-all hover:opacity-90"
            />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon
              size={25}
              round
              className="transition-all hover:opacity-90"
            />
          </LinkedinShareButton>
        </div>
      </div>
      <div className="space-y-6 py-7">
        <div className="block">
          <h4 className="text-heading font-semibold text-sm mb-1.5">
            Address:
          </h4>
          <Text>{data?.address}</Text>
        </div>
        <div className="block">
          <h4 className="text-heading font-semibold text-sm mb-1.5">Phone:</h4>
          <div className="flex items-center justify-between">
            <Text>{data?.phone}</Text>
            <button className="font-semibold text-sm text-heading transition-all hover:opacity-80 flex-shrink-0">
              Call Now
            </button>
          </div>
        </div>
        <div className="block">
          <h4 className="text-heading font-semibold text-sm mb-1.5">
            Website:
          </h4>
          <div className="flex items-center justify-between">
            <Text>{data?.website}</Text>
            <a
              href={`https://${data?.website}`}
              target="_blank"
              className="font-semibold text-sm text-heading transition-all hover:opacity-80 flex-shrink-0"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="block">
          <h4 className="text-heading font-semibold text-sm mb-1.5">
            Ratings:
          </h4>
          <Text>{data?.ratings}</Text>
        </div>
      </div>
      <div className="border-t border-gray-300 flex space-x-2.5 py-7">
        <Button
          variant="smoke"
          className={`w-full ${follow === true && "bg-gray-300"}`}
          onClick={followHandel}
        >
          Follow
        </Button>
        <Button variant="smoke" className="w-full" onClick={shareHandel}>
          Share <RiShareBoxLine className="ms-1" />
        </Button>
      </div>
    </div>
  );
};

export default ShopSidebar;
