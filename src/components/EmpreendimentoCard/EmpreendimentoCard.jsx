import styles from './EmpreendimentoCard.module.css'
import { Link } from 'react-router-dom'

function EmpreendimentoCard({
  to,
  imageSrc,
  imageAlt = '',
  minIncome,
  name,
  state,
  differentials,
  className,
  ...props
}) {
  const items = Array.isArray(differentials) ? differentials : []
  const rootClassName = `${styles.card}${to ? ` ${styles.cardInteractive}` : ''}${
    className ? ` ${className}` : ''
  }`

  return (
    <Link to={to} className={rootClassName} {...props}>
      <div className={styles.media}>
        {imageSrc ? (
          <img
            className={styles.image}
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}

        <div className={styles.incomeBar}>
          <p className={styles.incomeLabel}>
            <span className={styles.incomeLabelTop}>RENDA FAMILIAR</span>
            <br />
            <span className={styles.incomeLabelSub}>A partir de</span>
          </p>
          <p className={styles.incomeValue}>{minIncome}</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.state}>{state}</span>
        </div>

        <hr className={styles.divider} />

        <ul className={styles.differentials} aria-label="Diferenciais do empreendimento">
          {items.map(({ title, icon }, idx) => (
            <li key={`${idx}-${title}`} className={styles.differentialItem}>
              <span className={styles.differentialContent}>
                {icon ? (
                  <span className={styles.differentialIcon} aria-hidden="true">
                    {icon}
                  </span>
                ) : null}
                <span className={styles.differentialTitle}>{title}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default EmpreendimentoCard
