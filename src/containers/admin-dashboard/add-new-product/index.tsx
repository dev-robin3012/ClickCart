import FileUploadField from "@/components/ui/input/file-upload";
import Image from "next/image";
import { useState, type FC } from "react";

const AddNewProductContents: FC = () => {
  const [thumbnails, setThumbnails] = useState({
    previews: [] as string[],
    files: [] as any[],
  });

  const [product, setProduct] = useState({});

  return (
    <section className=" h-full grid xl:grid-cols-2 gap-5">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-default">Image Gallary</p>

        <div className="flex flex-col flex-wrap sm:flex-row gap-5">
          {thumbnails.previews.length
            ? thumbnails.previews.map((thumb) => (
                <Image src={thumb} alt="Thumb Image" height={200} width={200} />
              ))
            : null}

          <FileUploadField
            label="Add thumbnail pictures"
            className="w-full"
            onChange={(previews, files) =>
              setThumbnails({
                previews: [...thumbnails.previews, ...previews],
                files: [...thumbnails.files, ...files],
              })
            }
          />
        </div>
      </div>

      <div className="border">Meta descriptions</div>
    </section>
  );
};

export default AddNewProductContents;
