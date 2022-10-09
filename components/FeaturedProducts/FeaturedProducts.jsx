import Product from "../Product/Product";
import data from "../../data/products.json";

const FeaturedProducts = () => {
  return (
    <section className="py-8 border-b-2 border-black">
      <div className="container mx-auto ">
        <h2 className="text-2xl font-bold pl-[5%] py-[3%]">
          Featured Products
        </h2>

        <div className="flex justify-center gap-2">
          {/* product card */}
          {/* array_object.map((item, index) =>  { return <Something title={item.title} description={item.description} key={index} /> }) */}
          {data.map((product, index) => {
            return (
              <Product
                image={product.image}
                name={product.name}
                category={product.category}
                espana_stock={product.espana_stock}
                pnoval_stock={product.pnoval_stock}
                key={index}
              />
            );
          })}
          {/* <Product />
          <Product />
          <Product /> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
