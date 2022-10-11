import Product from "../Product/Product";
import data from "../../data/products.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./FeaturedProducts.module.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../CustomArrows/CustomArrows";

const FeaturedProducts = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 80,
    },
  };

  return (
    <section className="py-8 border-b-2 border-black">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold pl-[5%] py-[3%]">
          Featured Products
        </h2>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass={` mx-auto py-16 ${styles["carousel-container"]}`}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass={`${styles["carousel-item"]}`}
          partialVisible={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          partialVisbile={true}
        >
          {data.map((product, index) => {
            return (
              <Product
                key={index}
                image={product.image}
                name={product.name}
                category={product.category}
                espana_stock={product.espana_stock}
                pnoval_stock={product.pnoval_stock}
              />
            );
          })}
        </Carousel>

        <div className="flex flex-col items-center">
          <div className="pb-4">
            {/* product card */}
            {/* array_object.map((item, index) =>  { return <Something title={item.title} description={item.description} key={index} /> }) */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
