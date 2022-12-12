import { BsFilterLeft } from "react-icons/bs";
import { GrSearch, GrSystem } from "react-icons/gr";
import FilterBox from "../FilterBox/FilterBox";
import { useState } from "react";


const ProductFilter = ({ handler, brands, searchRef="", handleSubmit, handleFilter, currBrand }) => {
  const [hideFilter, setHideFilter] = useState(true);

  return (
    <div className="lg:w-[25%] flex flex-col px-3 md:px-10 gap-2">
      {/* Search bar (desktop view)*/}
      <div className="flex justify-between">
        {/* filter(mobile view)*/}
        <div className="flex">
          <button
            className="lg:hidden flex border-2 rounded-lg shadow-lg pl-2 pr-4 pt-1"
            onClick={() => {
              document.body.style.overflow = hideFilter
                ? "hidden"
                : "scroll";

              setHideFilter((hideFilter) => !hideFilter);
            }}
          >
            <div className="pt-[2px] text-secondary pr-3">
              <BsFilterLeft size={22} />
            </div>
            <a className="text-secondary">Filter</a>
          </button>
        </div>
        {handler === "global" ? (<div></div>) : (
          <div className="lg:w-[100%] border-2 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="flex">
              <input
                name="search"
                type="text"
                placeholder="Search products"
                className="w-[150px] md:w-[100%] text-xs md:text-xl p-2 rounded-xl"
                ref={searchRef}
              />
              <button type="submit" className="p-1">
                <GrSearch />
              </button>
            </form>
          </div>

        )}
      </div>
      <div
        className={`${hideFilter ? " -left-full" : "left-0"
          } lg:max-h-[auto] transition-all w-full z-1002 z-[1002] lg:z-0 top-0 lg:w-auto fixed lg:static`}
      >
        {/* browse brand */}
        <FilterBox
          title="Browse by Brand"
          items={["All brands", ...brands]}
          setHideFilter={setHideFilter}
          handleFilter={handleFilter}
          currBrand={currBrand}
        />
      </div>
    </div>
  )
}

export default ProductFilter