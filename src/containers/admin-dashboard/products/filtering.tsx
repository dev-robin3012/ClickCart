import Input from "@/components/input";
import Typography from "@/components/typography/index";
import DropdownSelect from "@/components/ui/dropdown-select";
import { type FC } from "react";

const ProductsFiltering: FC = () => {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-end ">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-default leading-none">
            Collections:
          </span>
        </div>

        <DropdownSelect
          label="Select Collections"
          options={[
            { label: "Category One", value: "category-one" },
            { label: "Category Two", value: "category-two" },
            { label: "Category Three", value: "category-three" },
            { label: "Category Four", value: "category-four" },
            { label: "Category Five", value: "category-five" },
          ]}
        />
      </div>

      <div className="space-y-1">
        <Typography variant="p2" className="font-semibold text-gray-default">
          Categories:
        </Typography>

        <DropdownSelect
          label="Select Categories"
          options={[
            { label: "In stock", value: "stock-in" },
            { label: "Out of Stock", value: "stock-out" },
          ]}
        />
      </div>

      <div className="space-y-1">
        <Typography variant="p2" className="font-semibold text-gray-default">
          Stock:
        </Typography>

        <DropdownSelect
          label="Select Categories"
          options={[
            { label: "In stock", value: "stock-in" },
            { label: "Out of Stock", value: "stock-out" },
          ]}
        />
      </div>

      <div className="sm:col-span-2 md:col-span-1">
        <Input name="search" placeholder="Search by name or category" />
      </div>
    </div>
  );
};

export default ProductsFiltering;
