import Iconstore from "@/components/icon-store";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Button from "@/components/ui/button";
import { Input, InputProps } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { cn } from "@/utils/class-merge";
import { useRef, useState, type Dispatch, type FC } from "react";

interface IFormData {
  name: string;
  categories: {
    name: string;
    sub: string[];
  }[];
}

const CollectionForm: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    categories: [],
  });

  return (
    <div className="bg-white rounded-xl p-5 space-y-5">
      <Text variant="h4">Add New Collection</Text>

      <div className="space-y-5">
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

          <div className="space-y-5">
            {/* <<<<<<<<<<<<<<<<========Categories=======>>>>>>>>>>>>> */}
            {formData.categories.length ? (
              <Accordion>
                {formData.categories.map((category, index) => (
                  <AccordionItem
                    key={index}
                    title={category.name}
                    expandIconPlacement="left"
                    bordereless
                    extraHeaderItems={
                      <Iconstore
                        name="cross"
                        className="text-xl cursor-pointer text-danger"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            categories: prev.categories.filter(
                              (cat) => cat.name !== category.name
                            ),
                          }))
                        }
                      />
                    }
                    classNames={{
                      body: "space-y-5",
                    }}
                  >
                    {/* <<<<<<<<<<<<<<<<========Sub-Categories=======>>>>>>>>>>>>> */}
                    {category.sub.length ? (
                      <Accordion>
                        {category.sub.map((sub, index) => (
                          <AccordionItem
                            key={index}
                            title={sub}
                            expandIconPlacement="left"
                            bordereless
                            extraHeaderItems={
                              <Iconstore
                                name="cross"
                                className="text-xl cursor-pointer text-danger"
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    categories: prev.categories.map((c) => {
                                      if (c.name === category.name) {
                                        return {
                                          ...c,
                                          sub: c.sub.filter((s) => s !== sub),
                                        };
                                      }

                                      return c;
                                    }),
                                  }))
                                }
                              />
                            }
                            classNames={{ body: "space-y-5" }}
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta ratione rerum illum non nisi culpa, hic
                            fugiat itaque facere harum magnam incidunt, illo,
                            voluptate officia esse voluptatem neque nihil sed!
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : null}

                    {/* <<<<<<<<<<<<<<<<========Sub-Categories=======>>>>>>>>>>>>> */}

                    <CategoryInsertBox
                      size="sm"
                      placeholder={`Sub-category of ${category.name}`}
                      onInsert={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          categories: prev.categories.map((c) =>
                            c.name === category.name
                              ? { ...c, sub: [...c.sub, value] }
                              : c
                          ),
                        }))
                      }
                    />
                  </AccordionItem>
                ))}
              </Accordion>
            ) : null}

            {/* <<<<<<<<<<<<<<<<========Categories=======>>>>>>>>>>>>> */}

            <CategoryInsertBox
              placeholder="Add a category"
              onInsert={(category) =>
                setFormData((prev) => ({
                  ...prev,
                  categories: [
                    ...prev.categories,
                    {
                      name: category,
                      sub: [],
                    },
                  ],
                }))
              }
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 justify-end [&>button]:flex-1">
        <Button variant="outlined">Clear</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
};

interface CategoryInsertBoxProps {
  onInsert: Dispatch<string>;
  placeholder: string;
  size?: InputProps["size"];
}

const CategoryInsertBox: FC<CategoryInsertBoxProps> = ({
  onInsert,
  placeholder,
  size,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-stretch border rounded-md overflow-hidden">
      <Input
        ref={ref}
        size={size}
        placeholder={placeholder}
        className="border-0 "
      />
      <span
        className={cn(
          "flex items-center bg-gray-light px-5 gap-5 text-xl cursor-pointer",
          size === "sm" && "text-base px-4"
        )}
        onClick={() => {
          const value = ref.current?.value;
          if (!!value) {
            onInsert(value);
            ref.current.value = "";
          }
        }}
      >
        <Iconstore name="list-plus" />
      </span>
    </div>
  );
};

export default CollectionForm;
