import SectionHeader from "@/components/common/section-header";
import ProductsBlock from "@/containers/products-block";
import { Product } from "@/framework/basic-rest/types";
import { getProducts } from "@/services/product/get-products";
import { Tab } from "@headlessui/react";
import { useQuery } from "react-query";

const TrendingProductFeedWithTabs: React.FC<any> = () => {
  const { data, isLoading } = useQuery<Product[], Error>(
    "trending-products",
    () => getProducts({ orderby: "popularity" }).then((data) => data)
  );

  return (
    <div className="mb-12 md:mb-14 xl:mb-16">
      <SectionHeader
        sectionHeading="Trending Products"
        className="pb-0.5 mb-1 sm:mb-1.5 md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-5"
      />

      <Tab.Group as="div" className="">
        <Tab.List as="ul" className="tab-ul">
          <Tab
            as="li"
            className={({ selected }) =>
              selected ? "tab-li-selected" : "tab-li"
            }
          >
            <p>All Collection</p>
          </Tab>
          <Tab
            as="li"
            className={({ selected }) =>
              selected ? "tab-li-selected" : "tab-li"
            }
          >
            <p>Flash Sale</p>
          </Tab>
          <Tab
            as="li"
            className={({ selected }) =>
              selected ? "tab-li-selected" : "tab-li"
            }
          >
            <p>Best Sellers</p>
          </Tab>
          <Tab
            as="li"
            className={({ selected }) =>
              selected ? "tab-li-selected" : "tab-li"
            }
          >
            <p>Featured</p>
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <ProductsBlock
              products={data}
              loading={isLoading}
              uniqueKey="new-arrivals"
              variant="gridModern"
              imgWidth={344}
              imgHeight={344}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ProductsBlock
              products={data}
              loading={isLoading}
              uniqueKey="new-arrivals"
              variant="gridModern"
              imgWidth={344}
              imgHeight={344}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ProductsBlock
              products={data}
              loading={isLoading}
              uniqueKey="new-arrivals"
              variant="gridModern"
              imgWidth={344}
              imgHeight={344}
            />
          </Tab.Panel>
          <Tab.Panel>
            <ProductsBlock
              products={data}
              loading={isLoading}
              uniqueKey="new-arrivals"
              variant="gridModern"
              imgWidth={344}
              imgHeight={344}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TrendingProductFeedWithTabs;
