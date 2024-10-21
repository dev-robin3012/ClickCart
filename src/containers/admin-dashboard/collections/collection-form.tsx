import Iconstore from "@/components/icon-store";
import Collapse from "@/components/ui/accordion";
import { FileUploadField, Input } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { useRef, useState, type FC } from "react";

const CollectionForm: FC = () => {
  const [formData, setFormData] = useState({ categories: [] });

  const categoryInputRef = useRef<HTMLInputElement>(null);

  console.log(formData);

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

          {formData.categories.length ? (
            <Collapse items={formData.categories} />
          ) : null}

          {/* <div
            className="border py-2.5 rounded-md flex gap-3 items-center justify-center text-lg cursor-pointer"
            onClick={() => setAddingCategory(true)}
          >
            <Iconstore name="plus" /> <Text variant="label">Add Category</Text>
          </div> */}

          {/* <div className="">
            <div className="border-b py-2.5 px-3 flex items-center justify-between cursor-pointer">
              <Text className="font-semibold">Clategory Name 2</Text>
              <Iconstore name="arrow-down" className="text-xl" />
            </div>
          </div> */}

          <div className="flex items-stretch border rounded-md overflow-hidden">
            <Input
              ref={categoryInputRef}
              placeholder="Add New Category"
              className="border-0 "
            />
            <span
              className="flex items-center bg-gray-light px-5 gap-5 text-xl cursor-pointer"
              // onClick={() => {
              //   if (!!categoryInputRef.current?.value) {
              //     setFormData({
              //       ...formData,
              //       categories: [
              //         ...formData.categories,
              //         {
              //           name: categoryInputRef.current.value,
              //           subCategories: [],
              //         },
              //       ],
              //     });

              //     categoryInputRef.current?.value = "";
              //   }
              // }}
            >
              <Iconstore name="list-plus" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionForm;

// [
//   {
//     key: "category-one",
//     label: "Category One",
//     children: (
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quisquam
//         ipsam doloribus enim architecto veritatis eveniet blanditiis
//         exercitationem voluptatibus vel, quia non ea quo maiores quod dolore?
//         Consequatur, iusto itaque?
//       </p>
//     ),
//   },
//   {
//     key: "category-two",
//     label: "Category One",
//     children: (
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quisquam
//         ipsam doloribus enim architecto veritatis eveniet blanditiis
//         exercitationem voluptatibus vel, quia non ea quo maiores quod dolore?
//         Consequatur, iusto itaque?
//       </p>
//     ),
//   },
// ];
