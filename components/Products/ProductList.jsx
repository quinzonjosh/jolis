import { TailSpin } from "react-loader-spinner";
import Product from "../Product/Product";

const ProductList = ({categoryName, productList, loading}) => {
  return (
    <div className="w-[90%] mx-auto py-5">
      <h2 className="font-bold text-3xl text-secondary pb-5 capitalize">
        {categoryName}
      </h2>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:px-0 md:py-5 md:w-[80%] gap-3 md:gap-x-24 lg:mx-0 mx-auto">
        {
          loading ?
            (
              <TailSpin
                height="80"
                width="80"
                color="#474B60"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="mx-auto col-span-4 "
                visible={loading}
              />
            ) : (
              productList.map((product, index) => {
                return (
                  <Product
                    key={index}
                    image={product.image}
                    name={product.name}
                    categories={product.categories}
                    espana_stock={product.espana_stock}
                    pnoval_stock={product.pnoval_stock}
                  />
                );
              })
            )

        }
      </div>
    </div>
  )
}

export default ProductList;