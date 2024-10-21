import Iconstore from "@/components/icon-store";
import { FileUploadField, Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { useState, type FC } from "react";

const CollectionForm: FC = () => {
  const [formData, setFormData] = useState({});

  return (
    <div className="bg-white rounded-xl p-5 space-y-5">
      <Text variant="h4">Add New Collection</Text>

      <div className="space-y-5">
        <div className="space-y-1.5">
          <Text variant="label" className="text-gray-default">
            Icon
          </Text>
          {/* <Image
            src="/assets/placeholder/image.svg"
            alt=""
            width={150}
            height={200}
            className="rounded-md"
          /> */}
          <FileUploadField className="w-" />
        </div>

        <div className="space-y-1.5">
          <Text variant="label" className="text-gray-default">
            Title
          </Text>
          <Input placeholder="Collection name" />
        </div>

        <div className="space-y-1.5">
          <Text variant="label" className="text-gray-default">
            Categories
          </Text>
          <div className="border py-2.5 rounded-md flex gap-3 items-center justify-center text-lg cursor-pointer">
            <Iconstore name="plus" /> <Text variant="label">Add Category</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionForm;
