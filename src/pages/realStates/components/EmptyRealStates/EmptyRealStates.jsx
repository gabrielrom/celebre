import styles from './EmptyRealStates.module.css'

function EmptyRealStates({ title, subtitle, imageSrc, className }) {
  return (
    <section className={`${styles.wrapper}${className ? ` ${className}` : ''}`} aria-label="Nenhum imóvel encontrado">
      <div className={styles.content}>
        {imageSrc && (
          <div className={styles.imageWrapper} aria-hidden="true">
            <img src={imageSrc} alt="" className={styles.image} />
          </div>
        )}
        <div className={styles.textBlock}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default EmptyRealStates