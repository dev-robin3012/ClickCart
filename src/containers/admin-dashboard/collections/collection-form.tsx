import Iconstore from "@/components/icon-store";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Button from "@/components/ui/button";
import { Input, SingleInputBox } from "@/components/ui/input";
import Text from "@/components/ui/text";
import { useState, type FC } from "react";
import { toast } from "react-toastify";

interface IFormData {
  name: string;
  categories: {
    name: string;
    sub: {
      ["subCategory"]?: string[];
    };
  }[];
}

const CollectionForm: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    categories: [],
  });

  const insertCategory = (category: string) => {
    const isExisting = formData.categories.some(
      (cat) => cat.name.toLowerCase() === category.toLowerCase().trim()
    );

    if (isExisting) return toast.error(`${category} already existing`);

    setFormData((prev) => ({
      ...prev,
      categories: [...prev.categories, { name: category.trim(), sub: {} }],
    }));
  };
  const removeCategory = (category: string) =>
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((cat) => cat.name !== category),
    }));

  const insertSubCategory = (category: string, subCategory: string) => {
    const targetCategory = formData.categories.find((c) => c.name === category);
    const isExisting = targetCategory?.sub.hasOwnProperty(subCategory);

    if (isExisting)
      return toast.error(`${subCategory} already existing in ${category}`);

    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.map((cat) => {
        if (cat.name === category) {
          return { ...cat, sub: { ...cat.sub, [subCategory]: [] } };
        }
        return cat;
      }),
    }));
  };
  const removeSubCategory = (category: string, subCategory: string) =>
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.map((cat) => {
        if (cat.name === category) {
          // @ts-ignore
          delete cat.sub[subCategory];
          return cat;
        }
        return cat;
      }),
    }));

  const insertTag = (category: string, subCategory: string, tag: string) => {
    const targetCategory = formData.categories.find((c) => c.name === category);
    // @ts-ignore
    const isExisting = targetCategory?.sub[subCategory]?.some(
      (key: string) => key.toLowerCase().trim() === tag.toLowerCase().trim()
    );

    if (isExisting)
      return toast.error(`${tag} already existing in ${subCategory}`);

    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.map((c) => {
        if (c.name === category) {
          return {
            ...c,
            // @ts-ignore
            sub: { ...c.sub, [subCategory]: [...c.sub[subCategory], tag] },
          };
        }
        return c;
      }),
    }));
  };
  const removeTag = (category: string, subCategory: string, tag: string) =>
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.map((c) => {
        if (c.name === category) {
          return {
            ...c,
            sub: {
              ...c.sub,
              // @ts-ignore
              [subCategory]: c.sub[subCategory].filter(
                (key: string) => key !== tag
              ),
            },
          };
        }
        return c;
      }),
    }));

  const handleSave = () => {
    if (!formData.name) return toast.error("Collection name is required");

    // Connect to database to save collection
    console.log(formData);
  };

  return (
    <div className="bg-white rounded-xl p-5 space-y-5">
      <Text variant="h4">Add New Collection</Text>

      <div className="space-y-5">
        <div className="space-y-1.5">
          <Text variant="label" className="text-gray-default">
            Title
          </Text>
          <Input
            placeholder="Collection name"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="space-y-1.5">
          <Text variant="label" className="text-gray-default">
            Categories
          </Text>

          <div className="space-y-5">
            {/* <<<<<<<<<<<<<<<<========Categories=======>>>>>>>>>>>>> */}
            {formData.categories.length ? (
              <Accordion>
                {formData.categories.map((category, index) => {
                  const subCategories = category.sub;

                  return (
                    <AccordionItem
                      key={index}
                      title={category.name}
                      expandIconPlacement="left"
                      bordereless
                      extraHeaderItems={
                        <Iconstore
                          name="cross"
                          className="text-xl cursor-pointer hover:text-danger"
                          onClick={() => removeCategory(category.name)}
                        />
                      }
                      classNames={{
                        body: "space-y-3",
                      }}
                    >
                      {/* <<<<<<<<<<<<<<<<========Sub-Categories=======>>>>>>>>>>>>> */}
                      {Object.keys(subCategories).length ? (
                        <Accordion>
                          {Object.entries(subCategories).map(
                            ([subCategory, tags], index) => {
                              return (
                                <AccordionItem
                                  key={index}
                                  title={subCategory}
                                  expandIconPlacement="left"
                                  bordereless
                                  extraHeaderItems={
                                    <Iconstore
                                      name="cross"
                                      className="text-xl cursor-pointer hover:text-danger"
                                      onClick={() =>
                                        removeSubCategory(
                                          category.name,
                                          subCategory
                                        )
                                      }
                                    />
                                  }
                                  classNames={{ body: "space-y-2" }}
                                >
                                  <Text variant="label">Tags</Text>
                                  <div className="border flex gap-2 flex-wrap p-1.5 rounded-md">
                                    {tags.map((tag, index) => (
                                      <Text
                                        variant="label"
                                        key={index}
                                        className="border flex items-center justify-center gap-3 py-1.5 px-3 rounded-md"
                                      >
                                        {tag}{" "}
                                        <Iconstore
                                          name="cross"
                                          className="cursor-pointer"
                                          onClick={() =>
                                            removeTag(
                                              category.name,
                                              subCategory,
                                              tag
                                            )
                                          }
                                        />
                                      </Text>
                                    ))}

                                    <SingleInputBox
                                      onProcess={(value) =>
                                        insertTag(
                                          category.name,
                                          subCategory,
                                          value
                                        )
                                      }
                                      size="sm"
                                      processIcon={<Iconstore name="tikmark" />}
                                    />
                                  </div>
                                </AccordionItem>
                              );
                            }
                          )}
                        </Accordion>
                      ) : null}

                      {/* <<<<<<<<<<<<<<<<========Sub-Categories=======>>>>>>>>>>>>> */}

                      <SingleInputBox
                        size="sm"
                        placeholder={`Sub-category of ${category.name}`}
                        onProcess={(value) =>
                          insertSubCategory(category.name, value)
                        }
                      />
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : null}

            {/* <<<<<<<<<<<<<<<<========Categories=======>>>>>>>>>>>>> */}

            <SingleInputBox
              placeholder="Add a category"
              onProcess={(category) => insertCategory(category)}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 justify-end [&>button]:flex-1">
        <Button
          variant="outlined"
          onClick={() => setFormData({ name: "", categories: [] })}
        >
          Clear
        </Button>

        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default CollectionForm;
