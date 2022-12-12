import Image from "next/image";
import Pill from "../Pill/Pill";

function Product({ image, name, categories, espana_stock, pnoval_stock }) {
  const branches = [
    {
      name: "Espana Branch",
      stock: espana_stock,
    },
    {
      name: "P. Noval Branch",
      stock: pnoval_stock,
    },
  ];
  return (
    <div className="bg-white rounded-md shadow-md min-w-[300px] max-w-[300px] min-h-[400px] py-6 mx-auto">
      <div className="flex flex-col w-[85%] mx-auto">
        <div className="relative w-full h-40 md:h-48">
          <Image src={image} alt="sample" layout="fill" objectFit="cover" />
        </div>
        <div>
          <h3 className="text-xl text-secondary font-bold">{name}</h3>
          <div>
            {/* {categories.map((category, index) => {
              return (
                <p key={index} className="mb-4">
                  {category.name}
                </p>
              );
            })} */}
          </div>
          <div className="flex gap-8">
            {branches.map((branch) => {
              return (
                <div key={branch.name}>
                  <h4 className="text-primary font-bold text-sm">
                    {branch.name}
                  </h4>
                  <Pill
                    className={`${
                      branch.stock.toUpperCase() == "IN STOCK"
                        ? "bg-success"
                        : "bg-error"
                    } rounded-full py-1 px-1 text-center text-white `}
                    name={branch.stock}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
