import styles from "./HousePlanImage.module.css";

function HousePlanImage({ src, alt = "", className, onClick }) {
  function handleKeyDown(event) {
    if (!onClick) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  }

  return (
    <div
      className={`${styles.container}${onClick ? ` ${styles.clickable}` : ""}${
        className ? ` ${className}` : ""
      }`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
}

export default HousePlanImage;
