import whatsappLogo from "../../../../assets/whatsapp-icon.svg";
import styles from "./FloatingContactButton.module.css";

function FloatingContactButton({ href, className }) {
  return (
    <div className={`${styles.wrapper}${className ? ` ${className}` : ""}`}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
        className={styles.link}
      >
        <span className={styles.iconWrapper} aria-hidden="true">
          <img src={whatsappLogo} alt="" />
        </span>
      </a>
    </div>
  );
}

export default FloatingContactButton;
