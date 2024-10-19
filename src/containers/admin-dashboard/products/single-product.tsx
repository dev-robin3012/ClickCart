import Iconstore from "@/components/icon-store";
import Typography from "@/components/typography";
import Image from "next/image";
import { type FC } from "react";

const SingleProduct: FC = () => {
  return (
    <div className="py-2 px-3 shadow flex items-stretch justify-between">
      <div className="flex gap-5">
        <Image
          src="https://media.e-valy.com/cms/products/images/0491b154-25ff-4801-825f-271dc448512b"
          alt=""
          height={100}
          width={100}
        />
        <div className="space-y-0">
          <Typography variant="h3" className="font-semibold">
            This is Product Title
          </Typography>
          <Typography variant="p2">SKU: pk-85474487</Typography>
        </div>
      </div>

      <div className="space-y-0">
        <Typography variant="h4" className="font-semibold">
          Stock
        </Typography>
        <Typography variant="p2">487 items left</Typography>
        <Typography variant="p2">13 items sold</Typography>
      </div>

      <div className="space-y-0">
        <Typography variant="h4" className="font-semibold">
          Stock
        </Typography>
        <Typography variant="p2">487 items left</Typography>
        <Typography variant="p2">13 items sold</Typography>
      </div>
      <div className="space-y-0">
        <Typography variant="h4" className="font-semibold">
          Stock
        </Typography>
        <Typography variant="p2">487 items left</Typography>
        <Typography variant="p2">13 items sold</Typography>
      </div>

      <div className="flex items-center gap-5">
        <Iconstore name="edit" className="text-xl cursor-pointer" />
        <Iconstore name="threedot" className="text-[1.5rem] cursor-pointer" />
      </div>
    </div>
  );
};

export default SingleProduct;
