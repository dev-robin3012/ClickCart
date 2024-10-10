import React, { useState, FC } from "react";
import { Drawer } from "@components/common/drawer";
import FilterIcon from "@components/icons/filter-icon";
import motionProps from "@components/common/drawer/motion";
import { ShopFilters } from ".";

const FilterDrawer: FC = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <button
        className="lg:hidden text-heading text-sm px-4 py-2 font-semibold border border-gray-300 rounded-md flex items-center transition duration-200 ease-in-out focus:outline-none hover:bg-gray-200"
        onClick={() => setOpenFilter(true)}
      >
        <FilterIcon />
        <span className="ps-2.5">Filters</span>
      </button>

      <Drawer
        placement="left"
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        contentWrapperStyle={{ left: 0, maxWidth: "280px" }}
        {...motionProps}
      >
        <div className="p-5 md:p-10">
          <ShopFilters />
        </div>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
