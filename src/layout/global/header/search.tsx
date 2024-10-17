import nextClient from "@/api-config/next-client";
import Scrollbar from "@/components/common/scrollbar";
import SearchBox from "@/components/common/search-box";
import SearchIcon from "@/components/icons/search-icon";
import SearchProduct from "@/components/product/search-product";
import SearchResultLoader from "@/components/ui/loaders/search-result-loader";
import API_ENDPOINTS from "@/utils/api.routes";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";

export default function Search() {
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [searchState, setSearchState] = useState({
    isLoading: false,
    data: [],
  });

  function handleSearch(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  const handleAutoSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchText) {
      setSearchState({ ...searchState, isLoading: true });
      const timer = setTimeout(async () => {
        setSearchState({ ...searchState, isLoading: true });
        const { data } = await nextClient.get(
          `${API_ENDPOINTS.Products.all}?search=${searchText}&per_page=20`
        );

        setSearchState({ data, isLoading: false });
      }, 500);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    if (ref.current) {
      if (displaySearch) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [displaySearch]);

  return (
    <>
      <button
        className="flex items-center justify-center h-auto relative focus:outline-none transform"
        onClick={() => setDisplaySearch(true)}
        aria-label="search-button"
      >
        <SearchIcon />
      </button>

      <div ref={ref}>
        <div
          className={cn("overlay", { open: displaySearch })}
          role="button"
          onClick={() => setDisplaySearch(false)}
        />
        <div
          className={cn(
            "drawer-search relative hidden top-0 z-50 opacity-0 invisible transition duration-300 ease-in-out left-1/2 px-4 w-full md:w-[730px] lg:w-[930px]",
            { open: displaySearch }
          )}
        >
          <div className="w-full flex flex-col justify-center">
            <div className="flex-shrink-0 mt-3.5 lg:mt-4 w-full">
              <div className="flex flex-col mx-auto mb-1.5 w-full ">
                <SearchBox
                  onSubmit={handleSearch}
                  onChange={handleAutoSearch}
                  name="search"
                  value={searchText}
                  onClear={() =>
                    searchText ? setSearchText("") : setDisplaySearch(false)
                  }
                  ref={(input) => input && input.focus()}
                />
              </div>
              {searchText && (
                <div className="bg-white flex flex-col rounded-md overflow-hidden h-full max-h-64vh lg:max-h-[550px]">
                  <Scrollbar className="os-host-flexbox">
                    <div className="h-full">
                      {searchState.isLoading ? (
                        <div className="p-5 border-b border-gray-300 border-opacity-30 last:border-b-0">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <SearchResultLoader
                              key={idx}
                              uniqueKey={`top-search-${idx}`}
                            />
                          ))}
                        </div>
                      ) : (
                        searchState.data?.map((item: any, index: number) => (
                          <div
                            key={index}
                            className=" p-5 border-b border-gray-150 relative last:border-b-0"
                            onClick={() => setDisplaySearch(false)}
                          >
                            <SearchProduct item={item} key={index} />
                          </div>
                        ))
                      )}
                    </div>
                  </Scrollbar>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
