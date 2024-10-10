import { Brand } from "@/framework/basic-rest/types";
import Image from "next/image";
import Link from "next/link";

const BrandCard: React.FC<{ brand: Brand }> = ({ brand }) => {
  const { slug, name, background_image, image } = brand;

  return (
    <Link
      href={{ pathname: "/search", query: { brand: slug } }}
      className="group flex justify-center text-center relative overflow-hidden rounded-md"
    >
      <Image
        src={background_image?.original ?? "/assets/placeholder/brand-bg.svg"}
        alt={name || "Brand Thumbnail"}
        height={100}
        width={300}
        className="rounded-md transform transition-transform ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
      />
      <div className="absolute top left bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
      <div className="absolute top left h-full w-full flex items-center justify-center p-8">
        <Image
          src={image?.original ?? "/assets/placeholder/brand-bg.svg"}
          alt={name || "Brand Thumbnail"}
          height={100}
          width={300}
          className="flex-shrink-0"
        />
      </div>
    </Link>
  );
};

export default BrandCard;
