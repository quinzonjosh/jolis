
const FilterBox = ({ title, items }) => {
  return (
    <div className="md:block w-[100%] bg-white border-2 rounded-xl shadow-lg p-2">
      <h3 className="text-xl py-2 text-secondary font-bold">{title}</h3>
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => {
          return (<li key={index} className="hover:cursor-pointer text-primary hover:bg-white-accent-lavender hover:opacity-70 rounded-md py-1 px-1">
            <button>{item}</button>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default FilterBox;