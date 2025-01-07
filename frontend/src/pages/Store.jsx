import Card from "../components/Card";
import Sort from "@/assets/sort.svg";
import { useState, useMemo } from "react";
import NotFound from "./NotFound";
import { useProducts } from "../controllers/productController";

const Store = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const { data, isLoading, isSuccess } = useProducts();

  const filteredAndSortedItems = useMemo(() => {
    if (!data) return [];

    let filteredData = data;
    if (searchQuery) {
      filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredData.sort((a, b) => {
      if (!a.name || !b.name) return 0;
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  }, [data, searchQuery, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="flex flex-col">
      {/* Search input */}
      <div className="relative flex w-[300px] m-8 mb-3 flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[200px] min-w-0 flex-auto rounded-l border border-solid border-[#194d39] bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-[#194d39] focus:text-neutral-700 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="relative z-[2] flex items-center rounded-r bg-[#267356] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-[#194d39] hover:shadow-lg focus:bg-[#267356] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#267356] active:shadow-lg"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Sort button */}
      <div className="flex gap-2">
        <button
          onClick={toggleSortOrder}
          type="button"
          className="text-white bg-[#267356] hover:bg-[#194d39] focus:ring-4 focus:outline-none focus:ring-[#37a87d] font-medium ml-8 text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
        >
          <img src={Sort} alt="sort icon" className="w-6 h-6 mr-2" />
          Sort Items
        </button>
      </div>
      {/* Items list */}
      <div className="flex w-full flex-wrap">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-success opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : !isSuccess ? (
          <NotFound />
        ) : (
          filteredAndSortedItems.map((item) => (
            <Card item={item} key={item?.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Store;
