import Typography from "@/components/typography";
import Button from "@/components/ui/button";
import Link from "next/link";
import { type FC } from "react";
import ProductsFiltering from "./filtering";
import SingleProduct from "./single-product";

const DashboardProductsListing: FC = () => {
  return (
    <section className="space-y-5">
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <Typography variant="h2">Products Management</Typography>

        <div className="flex items-center gap-3">
          <Link href="/dashboard/add-new-product">
            <Button
              className="flex-1 sm:flex-auto"
              icon={{ name: "plus", className: "text-lg lg:text-xl" }}
            >
              Add Product
            </Button>
          </Link>
          <Button
            className="flex-1 sm:flex-auto"
            variant="outlined"
            icon={{ name: "file-export", className: "text-lg lg:text-xl" }}
          >
            Export CSV
          </Button>
        </div>
      </div>
      <ProductsFiltering />
      {/* Add your products listing here */}
      <div className="space-y-2 border overflow-hidden rounded-md">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </section>
  );
};

export default DashboardProductsListing;
