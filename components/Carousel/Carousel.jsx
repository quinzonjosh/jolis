import Product from "../components/Product/Product";

const Carousel = () => {
  return (
    <div id="carousel" className="carousel slide relative" data-bs-ride>
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify center p-0 mb-4">
        <button
          type="button"
          data-bs-target="carousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          arie-lable="slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="carousel"
          data-bs-slide-to="1"
          arie-lable="slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="carousel"
          data-bs-slide-to="2"
          arie-lable="slide 3"
        ></button>
      </div>
      <div class="carousel inner relative w-full overflow hidden">
        <div class="carousel-item active relative float-let w-full"></div>
      </div>
    </div>
  );
};

export default Carousel;
