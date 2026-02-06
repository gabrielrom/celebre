import styles from './InfoCard.module.css'

function InfoCard({ icon, title, subtitle, className }) {
  return (
    <article className={`${styles.card}${className ? ` ${className}` : ''}`}>
      <div className={styles.icon} aria-hidden="true">
        {icon}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </article>
  )
}

export default InfoCard