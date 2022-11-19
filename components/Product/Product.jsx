import Image from "next/image";
import Pill from "../Pill/Pill";

function Product({ image, name, category, espana_stock, pnoval_stock }) {
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
    <div className="bg-white rounded-md shadow-md">
      <div className="flex flex-col w-[90%] mx-auto">
        <div className="relative w-full h-40 md:h-48">
          <Image src={image} alt="sample" layout="fill" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{category}</p>
          <div className="flex">
            {branches.map((branch) => {
              return (
                <div key={branch.name}>
                  <h4>{branch.name}</h4>
                  <Pill
                    className={`${
                      espana_stock.toUpperCase() == "IN STOCK"
                        ? "bg-success"
                        : "bg-error"
                    } rounded-full py-1 px-1 text-center text-white text-sm`}
                    name={branch.stock}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className="block max-w-[200px] md:max-w-[400px] p-3 md:p-6
    //               border-2 rounded-xl shadow-lg
    //              mb-5"
    // >
    //   <div className="w-[90%] mx-auto">
    //     <div className="relative w-full h-40 md:h-48">
    //       <Image src={image} alt="sample" layout="fill" />
    //     </div>

    //     <h3 className="font-bold break-words text-secondary text-xl">{name}</h3>
    //     <p className="mb-3 text-primary">{category}</p>
    //     <div className="flex flex-row gap-5 ">
    //       <div className="flex flex-col">
    //         <h4 className="font-bold text-primary ">Espana Branch</h4>
    //         <Pill
    //           className={`${
    //             espana_stock.toUpperCase() == "IN STOCK"
    //               ? "bg-success"
    //               : "bg-error"
    //           } rounded-full py-1 px-1 text-center text-white text-sm`}
    //           name={espana_stock}
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <h4 className="font-bold text-primary ">P. Noval Branch</h4>
    //         <Pill
    //           className={`${
    //             espana_stock.toUpperCase() == "IN STOCK"
    //               ? "bg-success"
    //               : "bg-error"
    //           } rounded-full py-1 px-1 text-center text-white text-sm`}
    //           name={espana_stock}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Product;
