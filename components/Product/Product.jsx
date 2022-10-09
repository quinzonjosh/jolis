import Image from "next/image";

function Product({ prop }) {
  return (
    <div className="block max-w-[310px] p-6 border border-black">
      <div className="relative w-64 h-64">
        <Image src="/images/sample.jpg" alt="sample" layout="fill" />
      </div>

      <h3 className="font-bold break-words">Product name</h3>
      <p className="mb-3">Product Category</p>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col">
          <div className="font-bold">Espana Branch</div>
          <div className="bg-zinc-200 rounded-xl px-1 text-center">
            In stock
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">P. Noval Branch</div>
          <div className="bg-zinc-200 rounded-xl px-3 text-center">
            Out of Stock
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
