import styles from "./CustomArrows.module.css";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      onClick={() => onClick()}
      className={` ${styles.customArrow} ${styles.rightArrow}`}
    />
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      onClick={() => onClick()}
      className={`${styles.customArrow} ${styles.leftArrow}`}
    />
  );
};

export { CustomLeftArrow, CustomRightArrow };
