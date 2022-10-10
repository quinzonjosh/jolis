import Product from "../Product/Product";
const FeaturedProducts = () => {
  return (
    <section className="py-8 border-b-2 border-black">
      <div className="container mx-auto ">
        <h2 className="text-2xl font-bold pl-[5%] py-[3%]">
          Featured Products
        </h2>

        <div className="flex justify-center gap-2">
          {/* product card */}
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
