import styles from "./CustomArrows.module.css";
import { useSwiper } from "swiper/react";

const CustomRightArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className={`${styles.customArrow} ${styles.rightArrow}`}
    />
  );
};

const CustomLeftArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className={`${styles.customArrow} ${styles.leftArrow}`}
    />
  );
};

export { CustomLeftArrow, CustomRightArrow };
