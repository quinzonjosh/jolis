import Image from "next/image";

function Product({ image, name, category, espana_stock, pnoval_stock }) {
  return (
    <div
      className="block max-w-[200px] md:max-w-[310px] p-3 md:p-6 
                 md:text-base text-[14px] border-2 rounded-xl shadow-lg
                 mb-5"
    >
      <div className="relative w-[100%] h-40 md:h-48">
        <Image src={image} alt="sample" layout="fill" />
      </div>

      <h3 className="font-bold break-words text-secondary">{name}</h3>
      <p className="mb-3 font-['merriweather'] text-primary">{category}</p>
      <div className="flex flex-row gap-5 ">
        <div className="flex flex-col">
          <div className="font-bold text-primary">Espana Branch</div>
          <div className={`${espana_stock.toUpperCase() == "IN STOCK" ? "bg-success" : "bg-error"} rounded-xl px-1 text-center`}>
            {espana_stock}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-primary">P. Noval Branch</div>
          <div className={`${pnoval_stock.toUpperCase() == "IN STOCK" ? "bg-success" : "bg-error"} rounded-xl px-3 text-center`}>
            {pnoval_stock}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
