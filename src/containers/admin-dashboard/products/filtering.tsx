import DropdownSelect from "@/components/ui/dropdown-select";
import Input from "@/components/ui/input";
import { type FC } from "react";

const ProductsFiltering: FC = () => {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      <DropdownSelect
        label="Category"
        options={[
          { label: "Category One", value: "category-one" },
          { label: "Category Two", value: "category-two" },
          { label: "Category Three", value: "category-three" },
          { label: "Category Four", value: "category-four" },
          { label: "Category Five", value: "category-five" },
        ]}
      />
      <DropdownSelect
        label="Stock"
        options={[
          { label: "In stock", value: "stock-in" },
          { label: "Out of Stock", value: "stock-out" },
        ]}
      />
      <DropdownSelect
        options={[
          { label: "Category One", value: "category-one" },
          { label: "Category Two", value: "category-two" },
          { label: "Category Three", value: "category-three" },
          { label: "Category Four", value: "category-four" },
          { label: "Category Five", value: "category-five" },
        ]}
      />
      <DropdownSelect
        options={[
          { label: "Category One", value: "category-one" },
          { label: "Category Two", value: "category-two" },
          { label: "Category Three", value: "category-three" },
          { label: "Category Four", value: "category-four" },
          { label: "Category Five", value: "category-five" },
        ]}
      />
      <DropdownSelect
        wrapperClassName="sm:col-span-2 md:col-span-1"
        options={[
          { label: "Category One", value: "category-one" },
          { label: "Category Two", value: "category-two" },
          { label: "Category Three", value: "category-three" },
          { label: "Category Four", value: "category-four" },
          { label: "Category Five", value: "category-five" },
        ]}
      />
      <div className="sm:col-span-2 md:col-span-1">
        <Input name="search" placeholder="Search by name or category" />
      </div>
    </div>
  );
};

export default ProductsFiltering;
