import { AiOutlineClose } from "react-icons/ai";

const FilterBox = ({ title, items, setHideFilter, handleFilter }) => {
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
            <button
              key={index}
              className="hover:cursor-pointer text-primary text-left hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1"
              onClick={handleFilter} value={item}
            >
              {item}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBox;
