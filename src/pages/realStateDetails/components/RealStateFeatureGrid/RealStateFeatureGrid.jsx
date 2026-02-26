import { iconMap } from "../../../../configs/global.jsx";
import styles from "./RealStateFeatureGrid.module.css";

function RealStateFeatureGrid({ iconName, title, value, className }) {
  const Icon = iconMap[iconName];

  return (
    <div className={`${styles.container}${className ? ` ${className}` : ""}`}>
      {Icon ? (
        <Icon size={16} className={styles.icon} aria-hidden="true" />
      ) : null}

      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <strong className={styles.value}>{value}</strong>
      </div>
    </div>
  );
}

export default RealStateFeatureGrid;
