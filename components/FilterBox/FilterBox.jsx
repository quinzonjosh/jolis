import { AiOutlineClose } from "react-icons/ai";

const FilterBox = ({
  title,
  items,
  setHideFilter,
  handleFilter,
  currBrand,
}) => {
  console.log(currBrand);
  return (
    <div className="h-screen overflow-y-scroll flex flex-col lg:h-auto  lg:block w-[100%] bg-white border-2 rounded-xl shadow-lg p-2">
      <button
        className="lg:hidden text-2xl block self-end text-primary"
        onClick={() => {
          document.body.style.overflow = "scroll";
          setHideFilter((hideNav) => {
            return !hideNav;
          });
        }}
      >
        <AiOutlineClose />
      </button>
      <h3 className="text-xl py-2 text-secondary font-bold">{title}</h3>
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => {
          return (
            <li className="flex" key={index}>
              <button
                className={`${
                  currBrand === item
                    ? "bg-white-accent-lavender rounded-l-md"
                    : "rounded-md"
                } hover:cursor-pointer text-primary text-left hover:bg-white-accent-lavender hover:opacity-70  py-1 px-1 w-full`}
                onClick={handleFilter}
                value={item}
              >
                {item}
              </button>
              {currBrand === item ? (
                <button
                  className="bg-white-accent-lavender px-2 rounded-r-md text-sm"
                  onClick={handleFilter}
                  value={"All brands"}
                >
                  <AiOutlineClose />
                  
                </button>
              ) : (
                <div></div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBox;
