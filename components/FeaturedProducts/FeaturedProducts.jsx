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
    xxl: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1536 },
      items: 5,
    },
    xl: {
      breakpoint: { max: 1535, min: 1280 },
      items: 4,
    },
    lg: {
      breakpoint: { max: 1279, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    md: {
      breakpoint: { max: 1023, min: 768 },
      items: 2,
      partialVisibilityGutter: 60,
    },
    sm: {
      breakpoint: { max: 767, min: 620 },
      items: 2,
      partialVisibilityGutter: 10,
    },
    xs: {
      breakpoint: { max: 619, min: 512 },
      items: 1,
      partialVisibilityGutter: 210,
    },
    xxs: {
      breakpoint: { max: 511, min: 410 },
      items: 1,
      partialVisibilityGutter: 100,
    },

    xxxs: {
      breakpoint: { max: 409, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
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
          showDots={true}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass={` mx-auto py-16  ${styles["carousel-container"]}`}
          removeArrowOnDeviceType={["md", "sm", "xs", "xxs", "xxxs"]}
          itemClass={`${styles["carousel-item"]}`}
          partialVisible={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          dotListClass={`${styles["carousel-dots"]}`}
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
