import Product from "../Product/Product";
import styles from "./FeaturedProducts.module.css";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../CustomArrows/CustomArrows";

import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const FeaturedProducts = ({ data }) => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1536: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  };
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl text-secondary font-bold py-8 px-5 md:px-0">
          Featured Products
        </h2>
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={breakpoints}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className={`${styles.swiper_carousel} h-[475px]`}
        >
          {data.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <Product
                  image={product.image}
                  name={product.name}
                  category={product.category}
                  espana_stock={product.espana_stock}
                  pnoval_stock={product.pnoval_stock}
                />
              </SwiperSlide>
            );
          })}
          <CustomLeftArrow />
          <CustomRightArrow />
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
