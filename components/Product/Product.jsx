import Image from "next/image";

function Product({ image, name, category, espana_stock, pnoval_stock }) {
  return (
    <div className="block max-w-[310px] p-6 border border-black">
      <div className="relative w-64 h-64">
        <Image src={image} alt="sample" layout="fill" />
      </div>

      <h3 className="font-bold break-words">{name}</h3>
      <p className="mb-3">{category}</p>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col">
          <div className="font-bold">Espana Branch</div>
          <div className="bg-zinc-200 rounded-xl px-1 text-center">
            {espana_stock}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">P. Noval Branch</div>
          <div className="bg-zinc-200 rounded-xl px-3 text-center">
            {pnoval_stock}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
